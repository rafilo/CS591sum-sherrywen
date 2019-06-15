import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from './model/weather';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  endpoint = 'localhost:3000/weather';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT"
      })
  }

  getWeathers(): Observable<Weather[]>{
    return this.http.get<Weather[]>(this.endpoint);
  }

  addWeather(newWeather: Weather): Observable<any>{
    return this.http.post<any>(this.endpoint, newWeather)
  }

  } 
