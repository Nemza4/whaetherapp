webpackJsonp([2],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.display = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.getResults = function () {
        var _this = this;
        this.data.getData(this.city).subscribe(function (data) {
            _this.info = data;
            console.log(_this.info);
            _this.infoList = _this.info.data;
            _this.display = 1;
            _this.iconCode = _this.info.weather[0].icon;
            _this.conditionCode = "http://openweathermap.org/img/w/" + _this.iconCode + ".png";
        });
    };
    HomePage.prototype.ref = function () {
        this.display = 0;
        this.city = null;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\home\home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Weather App</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   \n    <ion-item>\n      <ion-label>Choose Your City</ion-label>\n      <ion-select [(ngModel)] ="city">\n        <ion-option value = "Johannesburg">Johannesburg</ion-option>\n        <ion-option value = "Pretoria">Pretoria</ion-option> \n        <ion-option value = "Thohoyandou">Thohoyandou</ion-option> \n        <ion-option value = "Sibasa">Sibasa</ion-option> \n        <ion-option value = "musina">Musina</ion-option> \n      </ion-select> \n    </ion-item> \n    \n    <div id="button" style="text-align:center">\n    <button ion-button  style="text-align: center"  (click)="getResults()">View Results</button>\n  </div>\n  \n\n\n    <div *ngIf = "display== 1">\n\n      <ion-grid>\n          <p font-size="7"><strong>Weather For Today In {{city}} Look As Follows</strong></p>\n          <ion-row>\n            <ion-col>\n           <strong>WEATHER</strong>\n            </ion-col>\n            <ion-col>\n              <strong>RESULTS</strong>\n            </ion-col>\n          </ion-row>\n          <img class="bb" src="http://openweathermap.org/img/w/01d.png">\n          <ion-row>\n              <ion-col>\n                Humidity\n              </ion-col>\n              <ion-col>\n               \n                {{info?.main.humidity}} \n                <img src={{conditionCode}}>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n              <ion-col>\n                Pressure\n              </ion-col>\n              <ion-col>\n                  {{info?.main.pressure}}\n                  <img src={{conditionCode}}>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col>\n              Description\n            </ion-col>\n            <ion-col>\n                {{info?.weather[0].description}}\n                <img src={{conditionCode}}>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              Temperature\n            </ion-col>\n            <ion-col>\n                {{info?.main.temp)}} °C\n                <img src={{conditionCode}}>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col>\n              Max Temperature\n              </ion-col>\n              <ion-col>\n                  {{info?.main.temp_max}} °C\n                  <img src={{conditionCode}}>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                 Min Temperature\n                </ion-col>\n                <ion-col>\n                    {{info?.main.temp_min}} °C\n                    <img src={{conditionCode}}>\n                </ion-col>\n              </ion-row>\n\n    \n          \n          \n        </ion-grid>\n        <div  style="text-align:center">\n          <button ion-button style="text-align: center" (click)="ref()">REFRESH</button>\n        </div>\n      </div>\n    \n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map