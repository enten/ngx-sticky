import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  SimpleChanges,
  SkipSelf,
  forwardRef,
  isDevMode,
} from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler, merge } from 'rxjs';
import { distinctUntilChanged, mapTo, share, takeUntil, throttleTime } from 'rxjs/operators';

import { NgxStickyBaseController } from './sticky-base.controller';
import { NgxStickyBoundaryDirective } from './sticky-boundary.directive';
import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyRootContainerController } from './sticky-root-container.controller';
import { coerceStickyDirection, coerceStickyPosition, getStuckedPositionTop } from './sticky.helpers';
import { NGX_STICKY_WINDOW } from './sticky.tokens';
import {
  NgxSticky,
  NgxStickyBoundaryController,
  NgxStickyComputation,
  NgxStickyContainerController,
  NgxStickyController,
  NgxStickyDirection,
  NgxStickyPosition,
  NgxStickyState,
} from './sticky.types';
import { coerceBooleanProperty, coerceNumberProperty } from './utils/coercion';
import { ConfigSubject, ConfigSubjectSchema } from './utils/config-subject';
import { getElementAbsoluteRect, getElementRelativeRect, setElementStyles } from './utils/dom';
import { fromImageEvents } from './utils/from-image-events';


/**
 * Interface for a sticky style.
 */
export interface NgxStickyElementStyle {
  // [prop: string]: string;
  width: string;
  position: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  cssFloat: string;
  margin: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
}

/**
 * Interface for a sticky ghost style.
 */
export interface NgxStickyGhostStyle {
  // [prop: string]: string;
  width: string;
  position: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  cssFloat: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;

  height: string;
  maxHeight: string;
  minHeight: string;
  boxSizing: string;
  borderTop: string;
  borderBottom: string;
  borderLeft: string;
  borderRight: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
}


export interface NgxStickyConfig {
  classes: boolean;
  disabled: boolean;
  direction: NgxStickyDirection;
  height: number;
  // orbit: boolean;
  position: NgxStickyPosition;
  spacer: HTMLElement | null;
  spot: HTMLElement | null;
  spotHeight: number;
}


export const NGX_STICKY_BASE_CONFIG_SCHEMA: ConfigSubjectSchema<NgxStickyConfig> = {
  classes: {
    aliasKey: 'stickyClasses',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
  disabled: {
    aliasKey: 'stickyDisabled',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
  direction: {
    aliasKey: 'stickyDirection',
    defaultValue: 'down',
    coercion: coerceStickyDirection,
  },
  height: {
    aliasKey: 'stickyHeight',
    defaultValue: 0,
    coercion: coerceNumberProperty,
  },
  // orbit: {
  //   aliasKey: 'stickyOrbit',
  //   defaultValue: false,
  //   coercion: coerceBooleanProperty,
  // },
  position: {
    aliasKey: 'stickyPosition',
    defaultValue: 'top',
    coercion: coerceStickyPosition,
  },
  spacer: {
    aliasKey: 'stickySpacer',
    defaultValue: null,
  },
  spot: {
    aliasKey: 'stickySpot',
    defaultValue: null,
  },
  spotHeight: {
    aliasKey: 'stickySpotHeight',
    defaultValue: 0,
    coercion: coerceNumberProperty,
  },
};


/**
 * Defines a sticky.
 */
@Directive({
  selector: '[ngxSticky], [ngx-sticky], ngx-sticky',
  exportAs: 'ngxSticky',
})
export class NgxStickyDirective extends NgxStickyBaseController implements AfterViewInit, OnChanges, OnDestroy {
  /**
   * Binding sticky classes.
   *
   * Defaults to `false`.
   */
  @Input()
  stickyClasses: boolean;

  /**
   * Direction of the sticky; one of 'up' or 'down'.
   *
   * Defaults to `'down'`.
   */
  @Input()
  stickyDirection: NgxStickyDirection;

  /**
   * Disable sticky.
   *
   * Defaults to `false`.
   */
  @Input()
  stickyDisabled: boolean;

  /**
   * Force element height when calculate sticky element height.
   */
  @Input()
  stickyHeight: number;

  // /**
  //  * Indicate sticky element is an orbit.
  //  *
  //  * An orbit is a sticky element which isn't visible until
  //  * it's sticked.
  //  *
  //  * Generally an orbit spot on another element to be sticked.
  //  *
  //  * Defaults to `false`.
  //  */
  // @Input()
  // stickyOrbit: boolean;

  /**
   * Position of the sticky; one of 'top' or 'bottom'.
   *
   * Defaults to `'top'`.
   */
  @Input()
  stickyPosition: NgxStickyPosition;

  /**
   * Sticky spacer.
   *
   * Defaults to `null`.
   */
  @Input()
  stickySpacer: HTMLElement | null;

  /**
   * Reference to an element used to determine sticky state.
   *
   * The sticky directive will stick element only when spot
   * isn't visible.
   *
   * Defaults to `null`.
   */
  @Input()
  stickySpot: HTMLElement | null;

  /**
   * Force spot height when calculate sticky spot height.
   */
  @Input()
  stickySpotHeight: number;

  /**
   * Emit sticky computation.
   */
  @Output()
  readonly stickyComputation = new EventEmitter<NgxStickyComputation>();

  /**
   * Emit sticky state.
   */
  @Output()
  readonly stickyState = new EventEmitter<NgxStickyState>();

  @HostBinding('attr.data-sticky-state')
  get attrDataStickyState() { return !this.stickyParent ? this.state : null; }

  @HostBinding('class.ngx-sticky')
  get cssClassSticky() { return !this.stickyParent && this.config.classes; }

  @HostBinding('class.ngx-sticky--normal')
  get cssClassStickyNormal() { return this.cssClassSticky && this.state === 'normal'; }

  @HostBinding('class.ngx-sticky--sticked')
  get cssClassStickySticked() { return this.cssClassSticky && this.state === 'sticked'; }

  @HostBinding('class.ngx-sticky--stucked')
  get cssClassStickyStucked() { return this.cssClassSticky && this.state === 'stucked'; }

  @HostBinding('class.ngx-sticky--disabled')
  get cssClassStickyDisabled() { return this.cssClassSticky && this.disabled; }

  // @HostBinding('class.ngx-sticky--spot')
  // get cssClassStickySpot() { return this.cssClassSticky && !!this.config.spot; }

  // @HostBinding('class.ngx-sticky--position-top')
  // get cssClassStickyPositionTop() { return this.cssClassSticky && !isStickyPositionBottom(this.config.position); }

  // @HostBinding('class.ngx-sticky--position-bottom')
  // get cssClassStickyPositionBottom() { return this.cssClassSticky && isStickyPositionBottom(this.config.position); }

  // @HostBinding('class.ngx-sticky--direction-up')
  // get cssClassStickyDirectionUp() { return this.cssClassSticky && !isStickyDirectionDown(this.config.direction); }

  // @HostBinding('class.ngx-sticky--direction-down')
  // get cssClassStickydirectionDown() { return this.cssClassSticky && isStickyDirectionDown(this.config.direction); }

  get boundary(): NgxStickyBoundaryController {
    return this._boundary;
  }

  get container(): NgxStickyContainerController {
    return this._container;
  }

  get config(): NgxStickyConfig {
    return this.config$.getValue();
  }

  get disabled(): boolean {
    return this.config.disabled;
  }

  /**
   * State of the sticky.
   */
  get state(): NgxStickyState {
    return this._stickyState;
  }

  /** Inputs config */
  readonly config$ = new ConfigSubject<NgxStickyConfig>(NGX_STICKY_BASE_CONFIG_SCHEMA);

  /** Sticky container controller */
  readonly _container: NgxStickyContainerController;

  /** Sticky boundary controller */
  readonly _boundary?: NgxStickyBoundaryController;

  /** Emits when the component is destroyed. */
  readonly _destroyed$ = new Subject<void>();

  /** Sticky element style original */
  _elementOriginStyle: NgxStickyElementStyle;

  /** Monitoring subscription which trigger update stickies and handle refresh */
  _monitoring: Subscription;

  /** Sticky spacer generated */
  _spacerGenerated: HTMLElement;

  /** Sticky which reflect last call of _computeSticky() */
  _sticky: NgxSticky;

  /** Emits when refresh() is called */
  readonly _refresh$ = new Subject<NgxStickyComputation>();

  /** Sticky computation which reflect last call of _refreshSticky()  */
  _stickyComputation: NgxStickyComputation;

  /** Sticky element state which reflect last call of _refreshStickyElement() */
  _stickyElementState: NgxStickyState = null;

  /** Sticky element state which reflect last sticky state output */
  _stickyState: NgxStickyState = null;

  constructor(
    readonly rootContainer: NgxStickyRootContainerController,
    @Optional() @Inject(forwardRef(() => NgxStickyContainerDirective))
    readonly stickyContainer: NgxStickyContainerController,
    @Optional() @Inject(forwardRef(() => NgxStickyBoundaryDirective))
    readonly stickyBoundary: NgxStickyBoundaryController,
    @SkipSelf() @Optional() @Inject(forwardRef(() => NgxStickyDirective))
    readonly stickyParent: NgxStickyController,
    readonly elementRef: ElementRef<HTMLElement>,
    readonly renderer: Renderer2,
    // readonly changeDetectorRef: ChangeDetectorRef,
    readonly ngZone: NgZone,
    @Inject(NGX_STICKY_WINDOW)
    readonly _win: Window,
  ) {
    super();

    // use root container when sticky isn't in container
    this._container = stickyContainer || rootContainer;

    // ensure sticky boundary is in same container
    this._boundary = stickyBoundary && stickyBoundary.container === this._container ? stickyBoundary : null;

    // register sticky in container only if isn't in another sticky
    if (!this.stickyParent) {
      // register in parent container for first update calls
      this.container.registerSticky(this);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.config$.nextChanges(changes);
  }

  ngAfterViewInit(): void {
    // avoid sticky initialization when sticky has a parent
    if (this._preventNestedStickyError()) {
      return;
    }

    this._initMonitoring();
  }

  ngOnDestroy(): void {
    this.container.unregisterSticky(this);

    if (!this._destroyed$.isStopped) {
      this._destroyed$.next();
      this._destroyed$.complete();
    }

    this._destroyMonitoring();
  }

  beforeRefresh(fastUpdate?: boolean): void {
    if (!fastUpdate) {
      this._sticky = null;
    }
  }

  disableSticky(): void {
    this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
  }

  enableSticky(): void {
    this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
  }

  getSticky(): NgxSticky {
    if (!this._sticky) {
      this._sticky = this._computeSticky();
    }

    return this._sticky;
  }

  refresh(computation: NgxStickyComputation): void {
    this._refresh$.next(computation);
  }

  _computeSticky(): NgxSticky {
    // IMPORTANT: refresh sticky element to its normal state is required to compute repainted element height.
    this._refreshStickyElement(null);
    this._refreshStickyElement('normal');

    const config = this.config$.getValue();

    // element and spot rects which reflects last screen repaint
    const elementRect = getElementAbsoluteRect(this.elementRef.nativeElement);
    const spotRect = config.spot ? getElementAbsoluteRect(config.spot) : null;

    if (config.height) {
      elementRect.height = config.height;
    }

    if (spotRect && config.spotHeight) {
      spotRect.height = config.spotHeight;
    }

    return {
      disabled: config.disabled,
      boundary: this.boundary ? this.boundary.getBoundary() : null,
      direction: config.direction,
      height: elementRect.height,
      position: config.position,
      top: elementRect.top,
      spot: spotRect,
    };
  }

  /**
   * Create sticky monitoring observable.
   */
  _createMonitoringObservable(): Observable<boolean> {
    return merge(
      this.config$,
      fromImageEvents(this.elementRef.nativeElement),
      fromImageEvents(this.config.spot),
      animationFrameScheduler,
    ).pipe(
      // throttleTime(0, animationFrameScheduler),
      mapTo(false),
    );
  }

  /**
   * Destroy sticky monitoring subscription.
   */
  _destroyMonitoring(): void {
    if (this._monitoring) {
      this._monitoring.unsubscribe();
      this._monitoring = null;
    }
  }

  /**
   * Returns styles of the given state.
   *
   * `computation` is required when `state` is `"sticked"` or `"stucked"`.
   *
   * @param state Sticky state
   * @param computation Sticky state computation
   * @returns Styles of the sticky state
   */
  _getStickyElementStyle(state: NgxStickyState, computation?: NgxStickyComputation): Partial<NgxStickyElementStyle> {
    const win = this._win;

    if (!win || !state) {
      return null;
    }

    const ghost = this.config.spacer || this._spacerGenerated;
    const ghostParent = ghost.offsetParent as HTMLElement;
    const ghostParentIsRootElement = ghostParent === win.document.body || ghostParent === win.document.documentElement;

    // when state is normal (computation isn't needed)
    if (state === 'normal') {
      const ghostRelativeRect = getElementRelativeRect(win, ghost);
      const ghostStyle = win.getComputedStyle(ghost);
      const ghostBorderBox = ghostStyle.boxSizing === 'border-box';

      let elementWidth = ghostRelativeRect.width;

      if (!ghostBorderBox) {
        elementWidth +=
          - ((parseFloat(ghostStyle.borderLeft) || 0) + (parseFloat(ghostStyle.borderRight) || 0))
          - ((parseFloat(ghostStyle.paddingLeft) || 0) + (parseFloat(ghostStyle.paddingRight) || 0));
      }

      let elementTop = ghostRelativeRect.top;
      let elementLeft = ghostRelativeRect.left;

      if (ghostParentIsRootElement) {
        if (this.container !== this.rootContainer) {
          const ghostRect = getElementAbsoluteRect(ghost);
          const viewportTop = this.container.getViewportTop();

          elementTop = ghostRect.top - viewportTop;
        }

        elementTop += win.document.documentElement.offsetTop;
        elementLeft += win.document.documentElement.offsetLeft;
      }

      const styles = {
        position: 'absolute',
        width: `${elementWidth}px`,
        top: `${elementTop}px`,
        right: '',
        bottom: '',
        left: `${elementLeft}px`,
        float: '',
        margin: '0px',
      };

      return styles;
    }

    const { container, stickyComputed, viewportHeight } = computation.snap;

    // when state is sticked
    if (state === 'sticked') {
      const positionBottom = stickyComputed.positionBottom;

      let elementTop: number;
      let elementLeft: number;

      if (this.container !== this.rootContainer) {
        const ghostRelativeRect = getElementRelativeRect(win, ghost);

        elementLeft = ghostRelativeRect.left;

        if (ghostParentIsRootElement) {
          elementTop = container.top;

          elementTop += win.document.documentElement.offsetTop;
          elementLeft += win.document.documentElement.offsetLeft;
        } else {
          const ghostParentRect = getElementAbsoluteRect(ghostParent);

          elementTop = computation.viewportTop - ghostParentRect.top;
        }

        if (positionBottom) {
          elementTop += viewportHeight - stickyComputed.height - computation.offsetSticked - computation.offsetStucked;
        } else {
          elementTop += computation.offsetSticked + computation.offsetStucked;
        }

        return {
          position: 'absolute',
          top: `${elementTop}px`,
          bottom: '',
          left: `${elementLeft}px`,
        };
      } else {
        const ghostRect = getElementAbsoluteRect(ghost);

        elementTop = computation.offsetSticked + computation.offsetStucked;
        elementLeft = ghostRect.left + win.document.documentElement.offsetLeft;

        return {
          position: 'fixed',
          top: !positionBottom ? `${elementTop}px` : '',
          bottom: positionBottom ? `${elementTop}px` : '',
          left: `${elementLeft}px`,
        };
      }
    }

    // when state is stucked
    if (state === 'stucked') {
      const ghostRect = getElementAbsoluteRect(ghost);

      let elementTop: number;
      let elementLeft: number;

      elementTop = getStuckedPositionTop(computation);

      elementLeft = ghostRect.left;

      if (ghostParentIsRootElement) {
        if (this.container !== this.rootContainer) {
          // we can't use computation.viewportTop because it's absolute viewport top
          const relativeViewportTop = this.container.getViewportTop();

          elementTop -= relativeViewportTop;
        }

        elementTop += win.document.documentElement.offsetTop;
        elementLeft += win.document.documentElement.offsetLeft;
      } else {
        const ghostParentRect = getElementAbsoluteRect(ghostParent);

        elementTop -= ghostParentRect.top;
        elementLeft -= ghostParentRect.left;
      }

      return {
        position: 'absolute',
        top: `${elementTop}px`,
        bottom: '',
        left: `${elementLeft}px`,
      };
    }

    // throw new Error(`Invalid state: ${state}`);
    return null;
  }

  /**
   * Returns sticky ghost style.
   *
   * @returns Styles of the sticky ghost
   */
  _getStickyGhostStyle(): NgxStickyGhostStyle {
    const stickySpacer = this.config.spacer || this._spacerGenerated;

    if (!this._win || !stickySpacer) {
      return null;
    }

    const element = this.elementRef.nativeElement;
    const elementStyle = this._win.getComputedStyle(element);
    const elementnBorderBox = elementStyle.boxSizing === 'border-box';

    let ghostHeight = element.offsetHeight;
    // const ghostWidth = elementStyle.width;

    // substract borders and paddings when element isn't border-boxed
    if (!elementnBorderBox) {
      ghostHeight +=
        // substract vertical borders
        - (parseFloat(elementStyle.borderTopWidth) || 0)
        - (parseFloat(elementStyle.borderBottomWidth) || 0)
        // substract vertical paddings
        - (parseFloat(elementStyle.paddingTop) || 0)
        - (parseFloat(elementStyle.paddingBottom) || 0);
    }

    const styles: NgxStickyGhostStyle = {
      boxSizing: elementStyle.boxSizing,
      position: elementStyle.position,
      top: elementStyle.top,
      right: elementStyle.right,
      bottom: elementStyle.bottom,
      left: elementStyle.left,
      width: element.style.width,
      // width: element.style.width || elementStyle.width,
      // width: `${ghostWidth}px`,
      height: `${ghostHeight}px`,
      maxHeight: `${ghostHeight}px`,
      minHeight: `${ghostHeight}px`,
      borderTop: elementStyle.borderTop,
      borderBottom: elementStyle.borderBottom,
      borderLeft: elementStyle.borderLeft,
      borderRight: elementStyle.borderRight,
      // borderColor: 'transparent',
      cssFloat: elementStyle.cssFloat,
      marginTop: elementStyle.marginTop,
      marginBottom: elementStyle.marginBottom,
      marginLeft: elementStyle.marginLeft,
      marginRight: elementStyle.marginRight,
      paddingTop: elementStyle.paddingTop,
      paddingBottom: elementStyle.paddingBottom,
      paddingLeft: elementStyle.paddingLeft,
      paddingRight: elementStyle.paddingRight,
    };

    // if (this.config.orbit) {
    //   styles.position = 'absolute';
    //   styles.width = element.style.width || elementStyle.width;
    // }

    return styles;
  }

  /**
   * Hides sticky ghost.
   */
  _hideStickyGhost(): void {
    const ghost = this.config.spacer || this._spacerGenerated;

    if (!ghost) {
      return;
    }

    this.renderer.setStyle(ghost, 'display', 'none');
  }

  /**
   * Init sticky monitoring.
   */
  _initMonitoring(): void {
    if (!this._win || this._monitoring) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const handleRefreshSubscription = this._refresh$
        .pipe(
          takeUntil(this._destroyed$),
          distinctUntilChanged(),
          throttleTime(0, animationFrameScheduler, { leading: true, trailing: true }),
          share(),
        )
        .subscribe(computation => {
          this._refreshSticky(computation);
        });

      const triggerUpdateSubscription = this._createMonitoringObservable()
        .pipe(
          takeUntil(this._destroyed$),
          share(),
        )
        .subscribe(fastUpdate => {
          this.update(fastUpdate);
        });

      this._monitoring = new Subscription();
      this._monitoring.add(handleRefreshSubscription);
      this._monitoring.add(triggerUpdateSubscription);
    });
  }

  /**
   * Inserts sticky ghost generated.
   */
  _insertStickyGhostGenerated(): void {
    if (this._spacerGenerated) {
      return;
    }

    const element = this.elementRef.nativeElement;

    const ghost = this.renderer.createElement(element.tagName);
    this.renderer.addClass(ghost, 'ngx-sticky-spacer');
    // this.renderer.setStyle(ghost, 'borderStyle', 'solid');
    // this.renderer.setStyle(ghost, 'borderColor', 'transparent');
    this.renderer.insertBefore(element.parentElement, ghost, element);

    this._spacerGenerated = ghost;
  }

  /**
   * Log nested sticky error and returns `true` when sticky is in another sticky.
   *
   * @returns `true` when sticky is in another sticky
   */
  _preventNestedStickyError(): boolean {
    if (!this.stickyParent) {
      return false;
    }

    const nestedStickyError = new Error('Nested sticky is not support. Sticky will not work.');

    const logLevel = isDevMode() ? 'error' : 'warn';
    const logLevelLogger = console[logLevel];

    logLevelLogger(nestedStickyError);

    return true;
  }

  /**
   * Refresh sticky with given computation.
   *
   * @param computation Sticky state computation
   */
  _refreshSticky(computation: NgxStickyComputation): void {
    if (
      // refresh sticky when state has changed
      computation.state !== this._stickyElementState
      // or when sticky is in container (other than window)
      || this.container !== this.rootContainer
    ) {
      this._refreshStickyElement(computation.state, computation);
    }

    this._stickyComputation = computation;
    this.stickyComputation.next(computation);

    if (computation.state === this._stickyState) {
      return;
    }

    this.ngZone.run(() => {
      this._stickyState = computation.state;
      this.stickyState.next(computation.state);

      // this.changeDetectorRef.detectChanges();
    });
  }

  /**
   * Refreshs sticky element style.
   *
   * @param state Sticky state
   * @param computation Sticky state computation when state is sticked or stucked
   */
  _refreshStickyElement(state: NgxStickyState, computation?: NgxStickyComputation): void {
    if (!this._win) {
      return;
    }

    // hide ghost and refresh original style when state is null
    if (!state) {
      this._stickyElementState = null;

      this._hideStickyGhost();
      this._restoreStickyElementStyle();

      return;
    }

    this._stickyElementState = state;

    this._saveStickyElementStyle();
    this._showStickyGhost();

    const elementStyle = this._getStickyElementStyle(state, computation);

    setElementStyles(this.renderer, this.elementRef.nativeElement, elementStyle);
  }

  /**
   * Refreshs sticky ghost.
   */
  _refreshStickyGhost(): void {
    const ghost = this.config.spacer || this._spacerGenerated;
    const ghostStyle = this._getStickyGhostStyle();

    setElementStyles(this.renderer, ghost, ghostStyle);
  }

  /**
   * Restore original styles of the sticky.
   */
  _restoreStickyElementStyle(): void {
    setElementStyles(this.renderer, this.elementRef.nativeElement, this._elementOriginStyle);
    this._elementOriginStyle = null;
  }

  /**
   * Saves origin styles of the sticky.
   */
  _saveStickyElementStyle(): void {
    if (!this._elementOriginStyle) {
      this._elementOriginStyle = {
        position: this.elementRef.nativeElement.style.position,
        width: this.elementRef.nativeElement.style.width,
        top: this.elementRef.nativeElement.style.top,
        right: this.elementRef.nativeElement.style.right,
        bottom: this.elementRef.nativeElement.style.bottom,
        left: this.elementRef.nativeElement.style.left,
        cssFloat: this.elementRef.nativeElement.style.cssFloat,
        margin: this.elementRef.nativeElement.style.margin,
        marginTop: this.elementRef.nativeElement.style.marginTop,
        marginRight: this.elementRef.nativeElement.style.marginRight,
        marginBottom: this.elementRef.nativeElement.style.marginBottom,
        marginLeft: this.elementRef.nativeElement.style.marginLeft,
      };
    }
  }

  /**
   * Shows sticky ghost.
   */
  _showStickyGhost(): void {
    if (!this.config.spacer && !this._spacerGenerated) {
      this._insertStickyGhostGenerated();
      this._refreshStickyGhost();

      return;
    } else if (this.config.spacer && this._spacerGenerated) {
      this._spacerGenerated.remove();
      this._spacerGenerated = null;
    }

    const ghost = this.config.spacer || this._spacerGenerated;

    if (ghost.style.display === 'none') {
      this.renderer.setStyle(ghost, 'display', 'block');
      this._refreshStickyGhost();
    }
  }
}
