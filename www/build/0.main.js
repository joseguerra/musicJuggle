webpackJsonp([0],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(1047);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroModule = (function () {
    function IntroModule() {
    }
    return IntroModule;
}());
IntroModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]
        ]
    })
], IntroModule);

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
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
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Intro = (function () {
    function Intro(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */];
    }
    Intro.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Intro');
    };
    Intro.prototype.goToHome = function () {
        this.storage.set('introShown', true);
        this.navCtrl.setRoot(this.login);
    };
    Intro.prototype.goToSlide = function (number) {
        this.slides.slideTo(number, 500);
    };
    return Intro;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], Intro.prototype, "slides", void 0);
Intro = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"C:\ionic2\musicJuggle\src\pages\intro\intro.html"*/'<ion-slides pager="true">\n\n\n\n  <ion-slide class="slide-1" text-center>\n\n\n\n  	<div text-right padding-top padding-right class="omitir" (click)="goToHome()">\n\n  		<a>Omitir</a>\n\n  	</div>\n\n  	<img src="assets/img/custom/tutorial_screen/svg/MusicJuggle.svg" class="mj-logo"/>\n\n\n\n  	<br>\n\n    <img src="assets/img/custom/tutorial_screen/1-on boarding 1@3x.png" class="mj-fondo" />\n\n\n\n    <br>\n\n    Escuchá las canciones que quieras\n\n\n\n\n\n	<ion-fab right bottom>\n\n		<button ion-fab (click)="goToSlide(1)"><ion-icon name="arrow-forward"></ion-icon></button>\n\n	</ion-fab>\n\n\n\n  </ion-slide>\n\n\n\n  <ion-slide class="slide-2" text-center>\n\n\n\n  	<div text-right padding-top padding-right class="omitir" (click)="goToHome()">\n\n  		<a>Omitir</a>\n\n  	</div>\n\n  	<img src="assets/img/custom/tutorial_screen/svg/MusicJuggle.svg" class="mj-logo"/>\n\n\n\n    <img src="assets/img/custom/tutorial_screen/fondo_tutorial_2@3x.png" class="mj-fondo2" />\n\n\n\n    <div class="text-slide-2">\n\n	    Obtené toda la información que estás buscando.<br>\n\n	    También podes escribirnos.<br>\n\n	    Nos encanta hablar de música\n\n	 </div>\n\n\n\n	<ion-fab right bottom>\n\n		<button ion-fab (click)="goToSlide(2)"><ion-icon name="arrow-forward"></ion-icon></button>\n\n	</ion-fab>\n\n\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n\n\n  	<img src="assets/img/custom/tutorial_screen/svg/MusicJuggle.svg" class="mj-logo"/>\n\n\n\n    <img src="assets/img/custom/tutorial_screen/fondo_tutorial_3@3x.png" class="mj-fondo3" />\n\n\n\n    <div class="text-slide-3" padding-right padding-left>\n\n	    Conseguí la licencia.\n\n	    <br><br>\n\n	    <button ion-button block class=\'default-button\' full icon-right (click)="goToHome()">\n\n	    	Empezar <ion-icon name="arrow-forward"></ion-icon>\n\n	    </button>\n\n	 </div>\n\n\n\n\n\n\n\n\n\n\n\n  </ion-slide>\n\n\n\n\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\ionic2\musicJuggle\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], Intro);

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map