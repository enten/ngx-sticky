import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxStickyModule } from '@enten/ngx-sticky';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStickyModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
