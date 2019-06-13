import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WeatherServiceService } from '../weather-service.service';
@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  weather: Weather;
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherServiceService,
    private location: Location
  ) { }

  getWeather(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weatherService.getWeather(id)
      .subscribe(weather => this.weather = weather);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getWeather();
  }

}
