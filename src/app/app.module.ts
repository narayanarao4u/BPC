import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pg1Component } from './frm/pg1/pg1.component';
import { Pg2Component } from './frm/pg2/pg2.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg1Component,
    Pg2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
