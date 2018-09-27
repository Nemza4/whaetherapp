webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__second__["a" /* SecondPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__second__["a" /* SecondPage */]),
            ],
        })
    ], SecondPageModule);
    return SecondPageModule;
}());

//# sourceMappingURL=second.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(197);
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
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.display = 0;
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecondPage');
    };
    SecondPage.prototype.getResults = function () {
        var _this = this;
        this.data.getData(this.city).subscribe(function (data) {
            _this.info = data;
            console.log(_this.info);
            _this.infoList = _this.info.data;
            //  this.display = 1;
            _this.iconCode = _this.info.weather[0].icon;
            _this.conditionCode = "http://openweathermap.org/img/w/" + _this.iconCode + ".png";
        });
    };
    SecondPage.prototype.ref = function () {
        //  this.display = 0;
        this.city = null;
    };
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second',template:/*ion-inline-start:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\second\second.html"*/'<!--\n  Generated template for the SecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-title>WEATHER APP</ion-title>\n\n   \n      <ion-searchbar placeholder="enter your city"\n        [(ngModel)]="city" name="search"  >\n      \n           \n          \n\n        </ion-searchbar>\n   \n  \n\n</ion-header>\n\n\n<ion-content>\n \n  <div class="ma">\n \n    <img class="bb" src={{conditionCode}}>\n\n\n<h1 style="text-align: center"> TODAY</h1>\n<h1 style="text-align: center"> {{city}}</h1>\n\n<br>\n\n<div style="text-align: center; bottom: 60%;" class="centered">\n    \n   <p > {{(info?.main.temp-273.15).toFixed(2)}}°C</p>\n\n</div>\n\n<div class="split left">\n   <h1 style="position: absolute; left: 0; bottom: 40%;height: 5%">Min Temp<br> {{(info?.main.temp_min-273.15).toFixed(2)}} °C </h1>\n  \n  </div>\n\n  <div class="split left">\n    <h1 style="position: absolute; right: 0; bottom: 40%; height: 5%">Max Temp<br>{{(info?.main.temp_max-273.15).toFixed(2)}} °C</h1>\n \n</div>\n\n<div id="button1" style="text-align:center">\n    <button ion-button  style="text-align: center"  (click)="getResults()">Submit</button>\n  </div>\n\n  <div id="button2" style="text-align:center">\n  <button ion-button style="position: absolute;bottom: 30%; text-align:center; ; margin-left: 29%;" (click)="ref()">  <ion-icon ios="ios-refresh-circle" md="md-refresh-circle"></ion-icon></button>\n </div>\n\n <!-- <div *ngIf = "display== 1">\n    {{info?.weather[0].description}}\n    <img src={{conditionCode}}>\n    </div> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Code-Tribe\Desktop\whaetherapp\src\pages\second\second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], SecondPage);
    return SecondPage;
}());

//# sourceMappingURL=second.js.map

/***/ })

});
//# sourceMappingURL=1.js.map