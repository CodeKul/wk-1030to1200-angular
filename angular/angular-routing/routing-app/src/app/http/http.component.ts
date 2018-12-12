import { WeatherService } from './weather.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherMain } from './weather';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  weather : WeatherMain

  cnt : number = 0
  private chatSub : Subscription
  private intSub : Subscription

  constructor(
    private weatherService : WeatherService
  ) { }

  ngOnInit() {
   this.chatSub = this.chatObs().subscribe(
     num => console.log(num),
     err => console.log(err),
     () => console.log(`completed`),
   )

   this.intSub = interval(2000).subscribe(
     cnt => this.cnt++
   )
  }

  chatObs() {
    return Observable.create(
      sub => {
        for(let i = 0; i < 100 ;i++) {
          sub.next(i)
        }
        sub.complete()
      }
    )
  }

  ngOnDestroy() {
    this.chatSub.unsubscribe()
    this.intSub.unsubscribe()
  }

  onWeather(city : string) {
    this.weatherService.weatherInfo(city).subscribe(
      res => this.weather = res as WeatherMain
    )
  }
}
