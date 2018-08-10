
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {


  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getLocation(a,b)
  {
    console.log('i have arrived');
    console.log(a);
    console.log(b);
  
   // let apikey = 'http://api.openweathermap.org/data/2.5/weather?lat='+ a +'&long=' +b +','+'southafrica&APPID=efe266db60c305230e50211be2a29ed9' ;
 
   
   let apikey = 'http://api.openweathermap.org/data/2.5/weather?lat='+a+'&lon='+b+'&appid=efe266db60c305230e50211be2a29ed9' ;
    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }

  getMessages(cityname){

    let apikey = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname + ',' +'southafrica&APPID=e742bf04b8c9372f55c248f5143ad4a2' ;

    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }

  getForecast(cityname)
  {

    let apikey = 'http://api.openweathermap.org/data/2.5/forecast?q='+ cityname + ',' +'southafrica&APPID=e742bf04b8c9372f55c248f5143ad4a2' ;

    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }
  getdays(cityname){
    let apikey = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ cityname + ',' +'southafrica&APPID=e742bf04b8c9372f55c248f5143ad4a2' ;

    return new Promise ((resolve, reject) => {
      this.http.get(apikey ).subscribe(data =>{
         resolve(data);
      })
    
    
   });
  }
}