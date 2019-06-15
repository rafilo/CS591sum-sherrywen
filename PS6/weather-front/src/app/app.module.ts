import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CreateWeatherComponent } from './create-weather/create-weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from './weather.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateWeatherComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
