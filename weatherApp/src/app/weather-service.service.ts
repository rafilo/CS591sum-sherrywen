import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Weathers } from './mock-weather';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'key' : '78aa9644b58037543b33e38991978d35',
      'cache-control': 'no-cache'
    })
  }
  contactsEndpoint = 'https://api.darksky.net/forecast/78aa9644b58037543b33e38991978d35/42.361145,-71.057083';


  getWeathers(): Observable<Weather[]>{
    this.messageService.add('WeatherService: fetched Weather');
    return of(Weathers);
  }

  getWeather(id: number): Observable<Weather>{
    this.messageService.add(`WeatherService: fetched weather id=${id}`)
    return of(Weathers.find(Weather => Weather.id === id));
  }

  private log(message: string) {
    this.messageService.add(`WeatherService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
