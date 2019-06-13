import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeathersComponent } from './weathers/weathers.component';

import { FormsModule } from '@angular/forms';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    WeathersComponent,
    WeatherDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
