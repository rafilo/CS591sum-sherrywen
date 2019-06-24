import { Component } from '@angular/core';
import { Weather } from './model/weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-front';
  selectedWeather: Weather = null;
  weathers = [];
  information = 'current weather fetched from: ' + this.weatherService.endpoint;
  getWeathers(): void{
    this.weatherService.getWeathers()
      .subscribe(weathers =>{
        this.weathers = weathers;
        console.log('current weather fetched from: ' + this.weatherService.endpoint);
        console.log(`current weather fetched ${JSON.stringify(this.weathers)}`)
      })
  }

  displayWeatherDetail(weather: Weather){
    this.selectedWeather = weather;
  }


  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.getWeathers();
  }
}