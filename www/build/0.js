webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageModule", function() { return ThirdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__third__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThirdPageModule = /** @class */ (function () {
    function ThirdPageModule() {
    }
    ThirdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__third__["a" /* ThirdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__third__["a" /* ThirdPage */]),
            ],
        })
    ], ThirdPageModule);
    return ThirdPageModule;
}());

//# sourceMappingURL=third.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_popover_popover__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThirdPage = /** @class */ (function () {
    function ThirdPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.display = 0;
        this.currentTemp = "Celcius";
    }
    ThirdPage.prototype.create = function (arg0) { };
    ThirdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThirdPage');
    };
    ThirdPage.prototype.onInput = function () {
        var _this = this;
        this.data.getData(this.city).subscribe(function (data) {
            _this.weatherData = data;
            console.log(_this.info);
            _this.infoList = _this.weatherData.data;
            _this.iconCode = _this.weatherData.weather[0].icon;
            _this.conditionCode = "http://openweathermap.org/img/w/" + _this.iconCode + ".png";
        });
    };
    ThirdPage.prototype.ref = function () {
        this.city = null;
    };
    ThirdPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.data.getData(this.city).subscribe(function (data) {
            _this.weatherData = null;
            console.log(_this.weatherData);
        });
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ThirdPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({});
    };
    ThirdPage.prototype.temperatureChange = function () {
        console.log('oooooooo' + this.tempChange);
        switch (this.tempChange) {
            case 'Kelvin':
                if (this.currentTemp == 'Celcius') {
                    this.temp = this.weatherData.main.temp;
                }
                else if (this.currentTemp == 'Fahrenheit') {
                    // F = 9/5 (K - 273) + 32
                    this.temp = ((9 / 5 * Math.floor(this.weatherData.main.temp - 273) + 32) - 32) + 273;
                }
                this.currentTemp = this.tempChange;
                break;
            case 'Celcius':
                if (this.currentTemp == 'Kelvin') {
                    this.temp = Math.floor(this.weatherData.main.temp - 273.15);
                }
                else if (this.currentTemp == 'Fahrenheit') {
                    // F = 9/5 ( ° C) + 32  Fahrenheit to Celsius C = 5/9 (° F - 32)
                    this.temp = 5 / 9 * ((9 / 5 * Math.floor(this.weatherData.main.temp - 273.15) + 32) - 32);
                }
                this.currentTemp = this.tempChange;
                break;
            case 'Fahrenheit':
                if (this.currentTemp == 'Celcius') {
                    //  F = 9/5 (K - 273) + 32   5/9 (° F - 32)  F = 9/5 ( ° C) + 32
                    this.temp = 9 / 5 * Math.floor(this.weatherData.main.temp - 273) + 32;
                }
                else if (this.currentTemp == 'Kelvin') {
                    //K = 5/9 (° F - 32) + 273   9/5 (K - 273) + 32
                    //this.temp = ((9/5*Math.floor(this.weatherData.main.temp-273)+32)-32) + 273;
                    this.temp = 1.8 * Math.floor(this.weatherData.main.temp - 273.15) + 32;
                }
                this.currentTemp = this.tempChange;
                break;
        }
    };
    ThirdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-third',template:/*ion-inline-start:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\third\third.html"*/'<!--\n  Generated template for the ThirdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n    \n  <ion-navbar>\n      \n          <ion-item name="menu"></ion-item>\n        \n    <ion-title>third</ion-title>\n    \n<ion-searchbar placeholder="enter your city"  [(ngModel)]="city" name="search"  >\n</ion-searchbar>\n<ion-buttons end>    \n      <ion-icon name="options" ></ion-icon> \n        \n      <ion-select >\n          <ion-option value = "Johannesburg">Johannesburg</ion-option>\n          <ion-option value = "Pretoria">Pretoria</ion-option> \n          <ion-option value = "Thohoyandou">Thohoyandou</ion-option> \n          <ion-option value = "Sibasa">Sibasa</ion-option> \n          <ion-option value = "musina">Musina</ion-option> \n        </ion-select>\n    \n  </ion-buttons>\n  <img class="bb" src={{conditionCode}}>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n    <div class="ma">\n        <h1 style="text-align: center"> TODAY</h1>\n        <h1 style="text-align: center"> {{city}}</h1>\n     \n\n\n      <div style="text-align: center; bottom: 60%;" class="centered">\n\n          <p > {{(info?.main.temp-273.15).toFixed(2)}}°C</p>\n       \n       </div>\n\n       <div class="split left">\n          <h1 style="position: absolute; left: 0; bottom: 40%;height: 5%">Min Temp<br> {{(info?.main.temp_min-273.15).toFixed(2)}} °C </h1>\n         \n         </div>\n\n         <div class="split left">\n            <h1 style="position: absolute; right: 0; bottom: 40%; height: 5%">Max Temp<br>{{(info?.main.temp_max-273.15).toFixed(2)}} °C</h1>\n         \n        </div>\n\n\n        <div style="text-align: center; bottom: 60%;" class="centeredbuttom">\n\n            <p >iiioo {{info?.main.humidity}}°C</p>\n         \n         </div>\n      </div>\n</ion-content> -->\n<!--\n  Generated template for the SecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-title>Weather App</ion-title>\n\n  <ion-navbar>\n      \n      <ion-searchbar placeholder="enter your city"\n        [(ngModel)]="city" name="search"  \n       \n           \n        [showCancelButton]="shouldShowCancel"\n        (ionInput)="onInput()"\n      (ionCancel)="onCancel()">\n   \n        </ion-searchbar>\n<ion-item>\n          <ion-label>{{currentTemp}} to</ion-label>\n          <ion-select [(ngModel)]="tempChange" (ionChange)="temperatureChange($event)">\n            \n              <ion-option value="Celcius">Celcius</ion-option>\n              <ion-option value="Fahrenheit">Fahrenheit</ion-option>\n            </ion-select>\n\n          </ion-item>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content >\n  \n   <div class="ma"> \n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n  \n   \n\n    <img class="bb" src={{conditionCode}}>\n\n\n<h1 style="text-align: center"> TODAY</h1>\n<h1 style="text-align: center"> {{city}}</h1>\n\n\n<br>\n\n<div style="text-align: center; bottom: 80%;" class="centered">\n        <p class="ragraph">{{info?.name}} <img src="http://openweathermap.org/img/w/{{info?.weather[0].icon}}.png"> </p>\n        <p>{{weatherData?.weather[0].description }}</p>\n   <p > {{(temp)}}°C</p>\n\n</div>\n\n\n   <h1 style="position: absolute; left: 0; bottom: 40%;height: 5%">{{(weatherData?.main.temp_min-273.15).toFixed(0)}} °C </h1>\n  \n\n\n  \n    <h1 style="position: absolute; right: 0; bottom: 40%; height: 5%">{{(info?.main.temp_max-273.15).toFixed(0)}} °C</h1> \n \n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\third\third.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], ThirdPage);
    return ThirdPage;
}());

//# sourceMappingURL=third.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        console.log('Hello PopoverComponent Component');
        this.text = 'Hello World';
    }
    PopoverComponent_1 = PopoverComponent;
    PopoverComponent.prototype.create = function (arg0) {
        throw new Error("Method not implemented.");
    };
    PopoverComponent.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(PopoverComponent_1);
        popover.present({
            ev: myEvent
        });
    };
    PopoverComponent = PopoverComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\components\popover\popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<div>\n  {{text}}\n \n</div>\n'/*ion-inline-end:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\components\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
    var PopoverComponent_1;
}());

//# sourceMappingURL=popover.js.map

/***/ })

});
//# sourceMappingURL=0.js.map