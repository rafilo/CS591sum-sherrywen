import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/weather';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-create-weather',
  templateUrl: './create-weather.component.html',
  styleUrls: ['./create-weather.component.css']
})
export class CreateWeatherComponent implements OnInit {
  myweather: Weather;


  addWeather(): void{
    const newWeather: Weather ={
      timezone: this.myweather.timezone,
      minute: this.myweather.minute,
      hours: this.myweather.hours,
      days: this.myweather.days
    };
    this.weatherService.addWeather(newWeather)
      .subscribe();
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
