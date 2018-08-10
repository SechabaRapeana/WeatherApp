import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DisplayWhen } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import weatherArr from '../../app/weatherArr'

import { objWeather} from '../../app/objWeather'

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  winds;
  Dwind
  rain;
  maxtemp;
  mintemp
  clouds;
  humility;
  pressure;
  place;
  date;
  arr = weatherArr;  
 lat: any;
 lng: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private wether : WeatherProvider, public geo: Geolocation) {
  }

  ionViewDidLoad() {
    weatherArr.splice(0,1);
    console.log(weatherArr);
    
    this.geo.getCurrentPosition().then( pos => {
      this.lat= (pos.coords.latitude).toFixed(4);
      this.lng = (pos.coords.longitude).toFixed(4);
     this.getGeolocation(this.lat,this.lng);
      
    }).catch( err => console.log(err));

    console.log('ionViewDidLoad LocationPage');

    
  }

  displayWind(cityname)
  {
    this.wether.getForecast(cityname).then((data:any) =>{
      this.winds = data.wind.speed;
      this.Dwind = data.wind.deg;
    

      console.log(data);
      
    })
  }

  displaytemp(cityname)
  {
    this.wether.getForecast(cityname).then((data:any) =>{

      console.log(data);
      this.maxtemp = data.main.temp_max;
      this.mintemp = data.main.temp_min;

    })
  }

  displayhum()
  {
    this.wether.getForecast(this.humility).then((data:any) =>{

      console.log(data);
      this.humility = data.main.humility;
      

    })
  }

  displaypres(cityname)
  {
    this.wether.getForecast(cityname).then((data:any) =>{

      console.log(data);
      this.pressure = data.main.pressure;
      

    })
  }
//check if this works
  forecast(cityname)
    {
      this.wether.getForecast(cityname).then((data:any) =>{

        console.log(data);
        console.log(this.arr);


        this.date = data.list[0].dt_txt;
      })
      }

  getGeolocation(a,b)
  {

   a=this.lat;
   b=this.lng;
  
      this.wether.getLocation(a,b).then((data:any) =>{

        console.log(data);
        this.place = data.name;
        console.log(this.place)
      })
  }


}
