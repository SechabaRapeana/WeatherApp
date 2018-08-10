import { Component } from '@angular/core';

//import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

import { WeatherProvider } from '../../providers/weather/weather';

import { NavController, Img } from 'ionic-angular';

import weatherArr from '../../app/weatherArr'

import { objWeather} from '../../app/objWeather'

import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 arr = weatherArr;  
 lat: any;
 lng: any;

  temp1  ;
  temperature;
  wind;
  humidity;
  place;
  name;
  date;
  img;
  cloud;
  icon1;
  

  ionViewDidLoad() {
    weatherArr.splice(0,1);
    console.log(weatherArr);
    
    this.geo.getCurrentPosition().then( pos => {
      this.lat= (pos.coords.latitude).toFixed(4);
      this.lng = (pos.coords.longitude).toFixed(4);
     this.getGeolocation(this.lat,this.lng);
      
    }).catch( err => console.log(err));

 
    
  }

 

    constructor(public navCtrl: NavController , private wether : WeatherProvider,public geo: Geolocation
     ) {

    }




    getGeolocation(a,b)
    {

     a=this.lat;
     b=this.lng;
    
        this.wether.getLocation(a,b).then((data:any) =>{

          console.log(data);
          this.place = data.name;
          this.temp1 =data.main.temp ;
          this.wind = data.wind.speed;
          this.humidity = data.main.humidity ;
          this.temperature=(this.temp1-273.15).toFixed(0);

          let obj = new objWeather(this.place,this.temp1,this.wind,this.humidity);

          weatherArr.push(obj);
          
          console.log(weatherArr)
        })
    }

    
    search(cityname){

      this.wether.getMessages(cityname).then((data:any) =>{

        console.log(data);
        console.log(this.arr);

        this.temp1 =data.main.temp + '';
        this.wind = data.wind.speed;
        this.humidity = data.main.humidity ;
        this.place = data.name;
        this.temperature =(this.temp1-273.15).toFixed(0);
       

        let obj = new objWeather(this.place,this.temp1,this.wind,this.humidity);

        weatherArr.splice(0,1,obj);

      

      })

    }

    forecast(cityname)
    {
      this.wether.getForecast(cityname).then((data:any) =>{

        console.log(data);
        console.log(this.arr);


        this.date = data.list[0].dt_txt;
       
 

        // if (data.weather[0].icon = '03d'){
        //  this.icon1 = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '10d.png';
        //  console.log( this.icon1);
        // } else if(data.weather[0].icon = '04d'){
        //   this.icon1 = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '10d.png';
        //  console.log( this.icon1);
        // } 
        // else if (data.weather[0].icon ='01d'){
        //   this.icon1 = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '10d.png';
        //  console.log( this.icon1);
        // } else if (data.weather[0].icon = '10d'){
        //   this.icon1 = 'http://openweathermap.org/img/w/'+ data.weather[0].icon + '10d.png';
        //  console.log( this.icon1);
        // }
      })
    }

}
