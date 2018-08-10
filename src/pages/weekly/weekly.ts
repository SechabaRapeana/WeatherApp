import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import weatherArr from '../../app/weatherArr'

import { objWeather} from '../../app/objWeather'

import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the WeeklyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly',
  templateUrl: 'weekly.html',
})
export class WeeklyPage {

  
  arr = weatherArr; 
  temp1;
  temperature; 
  place;
  date1;
  date2;
  date3;
  date4;
  date5;
  lat: any;
  lng: any;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, private wether : WeatherProvider, public geo: Geolocation) {
    
    
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad LocationPage');
    weatherArr;

    this.place=weatherArr[0].place;

    this.wether.getForecast(this.place).then((data:any) =>{
      console.log(data);
    this.date1 = data.list[0].dt_txt;
    this.temp1 =data.list[0].main.temp; 
    this.temperature =(this.temp1-273.15).toFixed(0);

    this.date2 = data.list[7].dt_txt;
    this.temp1 =data.list[7].main.temp;
    this.temperature =(this.temp1-273.15).toFixed(0);

    this.date3 = data.list[15].dt_txt;
    this.temp1 =data.list[15].main.temp; 
    this.temperature =(this.temp1-273.15).toFixed(0);



    this.date4 = data.list[23].dt_txt;
    this.temp1 =data.list[23].main.temp 
    this.temperature =(this.temp1-273.15).toFixed(0);

    

    this.date5 = data.list[31].dt_txt;
    this.temp1 =data.list[31].main.temp ;
    this.temperature = (this.temp1-273.15).toFixed(0);

    
  })

    console.log('ionViewDidLoad WeeklyPage');

  }


  

}




