import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Weather } from './weather';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const Weathers = [
      {
        id: 1,
        latitude: 42.361145,
        longitude: -71.057083,
        timezone: "America/New_York",
        time: 1560274260,
        summary: "Mostly Cloudy",
        icon: "partly-cloudy-day",
        nearestStormDistance: 47,
        nearestStormBearing: 115,
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 71.62,
        apparentTemperature: 72.03,
        dewPoint: 63.51,
        humidity: 0.76,
        pressure: 1008.94,
        windSpeed: 10.87,
        windGust: 10.87,
        windBearing: 332,
        cloudCover: 0.89,
        uvIndex: 5,
        visibility: 10,
        ozone: 322.1
        },
    
        {
            id: 2,
            latitude: 51.509865,
            longitude: -0.118092,
            timezone: "Europe/London",
            time: 1560276005,
            summary: "Mostly Cloudy",
            icon: "partly-cloudy-day",
            nearestStormDistance: 2,
            nearestStormBearing: 166,
            precipIntensity: 0,
            precipProbability: 0,
            temperature: 58.38,
            apparentTemperature: 58.38,
            dewPoint: 50.88,
            humidity: 0.76,
            pressure: 1012.35,
            windSpeed: 13.14,
            windGust: 13.92,
            windBearing: 8,
            cloudCover: 0.77,
            uvIndex: 0,
            visibility: 8.97,
            ozone: 375.16
            }
    ];
    return {Weathers};
  }

  // always ensure a weather has an id
  genId(Weathers: Weather[]): number{
    return Weathers.length > 0 ? Math.max(...Weathers.map(Weather => Weather.id)) + 1 : Weathers.length + 1;
  }
  constructor() { }
}
