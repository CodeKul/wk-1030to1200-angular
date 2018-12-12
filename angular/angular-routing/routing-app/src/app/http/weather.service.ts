import { Student } from './student';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http : HttpClient
  ) { }

  weatherInfo(city : string) : Observable<Object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7406c21bb1cb9f59d936a59c4e890279`)
  }

  postInfo( stu : Student) : Observable<Object> {
    return this.http.post('link', stu , {
      headers :  {
        'Accept' : 'application/json',
        'Content-Type' :'application/json'
      }
    })
  }
}
