import { TestBed } from '@angular/core/testing';

import { NgxStickyService } from './sticky.service';

describe('NgxStickyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStickyService = TestBed.get(NgxStickyService);

    expect(service).toBeTruthy();
  });
});
