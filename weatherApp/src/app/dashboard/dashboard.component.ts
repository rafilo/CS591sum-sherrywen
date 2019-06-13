import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weatherList: Weather[] = [];
  constructor(private WeatherService: WeatherServiceService) { }

  getWeathers(): void{
    this.WeatherService.getWeathers()
        .subscribe(weatherList => this.weatherList = weatherList)
  }
  ngOnInit() {
    this.getWeathers();
  }

}
