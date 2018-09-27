import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  info;
  infoList;
  display = 0;
  city: string;

  conditionCode;
iconCode : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DataProvider) {
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getResults(){
    this.data.getData(this.city).subscribe(data=>{
      this.info = data;
    
      console.log(this.info);
      this.infoList=this.info.data;
      this.display = 1;

      this.iconCode = this.info.weather[0].icon;
      this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
    }) 
  }
  ref(){
  this.display = 0;
  this.city = null;
  }

}


