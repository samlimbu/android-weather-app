import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class WeatherProvider {
    api = 'c9898f40a038fa87';
    url = '';
  constructor(public http: Http) {
    console.log('weatherprovider instantiated');
    this.url = 'http://api.wunderground.com/api/'+ this.api+'/conditions/q/';
    
  }
  getWeather(city, state){
    return this.http.get(this.url + '/' + state + '/' + city + '.json') //return observable
        .map(
            result => result.json()
        );

  }
}
