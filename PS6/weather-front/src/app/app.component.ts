import { Component } from '@angular/core';
import { Weather } from'./model/weather';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private weatherService: WeatherService){}
  title = 'weather-front';
  private selectedWeather: Weather = null;
  weathers = [];

  getWeathers(): void{
    this.weatherService.getWeathers()
      .subscribe(weathers => {
        this.weathers = weathers;
        console.log('current weathers in database is:' + weathers);
      });
  }

  displayWeatherDetail(weather: Weather){
    this.selectedWeather = weather;
  }

  ngOnInit(){
    this.getWeathers();
  }

}
