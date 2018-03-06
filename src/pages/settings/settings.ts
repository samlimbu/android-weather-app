import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'; 
import { Geolocation } from'ionic-native';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
    city: string;
    state: string;
    location1: {lat: number, lng:number};
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
    private storage: Storage,
    private weatherProvider: WeatherProvider
) {
        this.storage.get('location')
            .then((val)=>{
                if(val !=null){
                    let location = JSON.parse(val);
                    this.city = location.city;
                    this.state = location.state;
                } 
                else{
                    this.city = 'Miami';
                    this.state = 'FL';
                }
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
      let location ={
          city: this.city,
          state: this.state
      }
      console.log(location);
      this.storage.set('location', JSON.stringify(location));
      this.navCtrl.push(HomePage);
    }

    onLocateUser(){
        console.log('locate presed');
      Geolocation.getCurrentPosition()
      .then(location=>{
          console.log(location);
         // this.location1.lat = location.coords.latitude;
          //this.location1.lng = location.coords.longitude;
          this.weatherProvider.getCity(location.coords.latitude, location.coords.longitude)
          .subscribe(
              data=>[
                  this.city = data.location.city,
                  this.state = data.location.country_name,    
              ],
              err=> console.log(err),
              ()=>[
                 
              ]
            
          );
      })
      .catch(error => console.log(error));

     
    }
}    
