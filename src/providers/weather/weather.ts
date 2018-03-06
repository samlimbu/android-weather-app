import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class WeatherProvider {
    api = 'c9898f40a038fa87';
    url = '';
    geolookupUrl='';
  constructor(public http: Http) {
    console.log('weatherprovider instantiated');
    this.url = 'http://api.wunderground.com/api/'+ this.api+'/conditions/q/';
    this.geolookupUrl = 'http://api.wunderground.com/api/'+ this.api+'/geolookup/q/';
    
  }
  getWeather(city, state){
    return this.http.get(this.url + '/' + state + '/' + city + '.json') //return observable
        .map(
            result => result.json()
        );

  }
  getCity(lat, lng){
    return this.http.get(this.geolookupUrl + lat +',' + lng+'.json' )
    //return this.http.get(this.geolookupUrl + lat +',' + lng+'.json' )
    .map(
        res=>res.json()
    );
  }
}
