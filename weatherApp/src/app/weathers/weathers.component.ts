import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
//import { Weathers } from '../mock-weather';
import { WeatherServiceService  } from '../weather-service.service';
@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {
  constructor(private weatherService: WeatherServiceService ) { }

  weatherList: Weather[];
  // implement get weather
  getWeather(): void{
    this.weatherService.getWeathers()
        .subscribe(weatherList => this.weatherList = weatherList);
  }

  ngOnInit() {
    this.getWeather();
  }

}
