import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
