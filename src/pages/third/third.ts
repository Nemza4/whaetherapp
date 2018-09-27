import { PopoverComponent } from './../../components/popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {
  tempChange: any;
  weatherData;
  temp: number;
  currentTemp: any;
  create(arg0: any): any {}
  city: string;
  info;
  infoList;
  conditionCode;
  iconCode : string;
  display = 0;
  popoverCtrl: any;
  Celcius:string;
  Fahrenheit:string;
  Kelvin:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DataProvider) {
    this.currentTemp="Celcius";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }
  onInput(){
    this.data.getData(this.city).subscribe(data=>{
      this.weatherData = data;
    
      console.log(this.info);
      this.infoList=this.weatherData.data;
      

      this.iconCode = this.weatherData.weather[0].icon;
      this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
    }) 
  }
  ref(){
    this.city = null;
    }
    
    doRefresh(refresher) {
      this.data.getData(this.city).subscribe(data=>{
        this.weatherData= null;
        console.log(this.weatherData);
      });
      console.log('Begin async operation', refresher);
  
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }
    presentPopover() {
      let popover = this.popoverCtrl.create(PopoverComponent);
      popover.present({
     
      });
    }
    temperatureChange(){
      console.log('oooooooo'+this.tempChange)
      
      switch(this.tempChange){
        case 'Kelvin':
            if(this.currentTemp=='Celcius'){
              this.temp = this.weatherData.main.temp;

            }else if(this.currentTemp=='Fahrenheit'){
             // F = 9/5 (K - 273) + 32
             this.temp = ((9/5*Math.floor(this.weatherData.main.temp-273)+32)-32) + 273;
            }
            this.currentTemp = this.tempChange;
          break;
        case 'Celcius':
        if(this.currentTemp=='Kelvin'){
          this.temp = Math.floor(this.weatherData.main.temp-273.15);
        }else if(this.currentTemp=='Fahrenheit'){
          // F = 9/5 ( ° C) + 32  Fahrenheit to Celsius C = 5/9 (° F - 32)
          this.temp = 5/9*((9/5*Math.floor(this.weatherData.main.temp-273.15) +32) - 32);
        }
        this.currentTemp = this.tempChange;
          break;
        case 'Fahrenheit':
        if(this.currentTemp=='Celcius'){
          //  F = 9/5 (K - 273) + 32   5/9 (° F - 32)  F = 9/5 ( ° C) + 32
          this.temp = 9/5*Math.floor(this.weatherData.main.temp-273)+32;
        }else if(this.currentTemp=='Kelvin'){
          //K = 5/9 (° F - 32) + 273   9/5 (K - 273) + 32
          //this.temp = ((9/5*Math.floor(this.weatherData.main.temp-273)+32)-32) + 273;
          this.temp = 1.8*Math.floor(this.weatherData.main.temp-273.15) + 32;
        }
        this.currentTemp = this.tempChange;
          break;
      }

    }
}
