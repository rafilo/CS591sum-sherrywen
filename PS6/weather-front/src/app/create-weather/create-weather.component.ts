import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/weather';
import { WeatherService } from '../service/weather.service';


@Component({
  selector: 'app-create-weather',
  templateUrl: './create-weather.component.html',
  styleUrls: ['./create-weather.component.css']
})
export class CreateWeatherComponent implements OnInit {

  myWeather: Weather;

  addWeather(): void{
    const newWeather: Weather = {
      timezone: this.myWeather.timezone,
      minute: this.myWeather.minute,
      hour: this.myWeather.hour,
      day: this.myWeather.day
    };

    this.weatherService.addWeather(newWeather)
      .subscribe();
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
