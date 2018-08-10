import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { LocationPage } from '../pages/location/location';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { WeeklyPage } from '../pages/weekly/weekly';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LocationPage,
    WeeklyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LocationPage,
    WeeklyPage
  ],
  providers: [WeatherProvider,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
 
  ]
})
export class AppModule {}
