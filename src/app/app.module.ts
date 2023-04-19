import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WiazaniaSchwurtzComponent } from './wiazania-schwurtz/wiazania-schwurtz.component';

@NgModule({
  declarations: [
    AppComponent,
    WiazaniaSchwurtzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
