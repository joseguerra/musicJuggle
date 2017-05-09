import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Register } from '../register/register';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

	@ViewChild(Slides) slides: Slides;

	register =  Register;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

  goToHome(){
  	this.storage.set('introShown', true);
    this.navCtrl.setRoot(this.register);
  }

  goToSlide(number) {
    this.slides.slideTo(number, 500);
  }


}
