import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Glosary } from '../glosary/glosary';
import { TopTen } from '../top-ten/top-ten';
import { WorkWithUs } from '../work-with-us/work-with-us';
import { SelectPlan } from '../select-plan/select-plan';
import { Terms } from '../terms/terms';
import { Recomendations } from '../recomendations/recomendations';
import { Register } from '../register/register';

import { NoResults } from '../no-results/no-results';


/**
 * Generated class for the More page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})

export class More {

	glosary =  Glosary;
	terms 	=  Terms;
	topTen 	=  TopTen;
	selectPlan 	=  SelectPlan;
	recomendations 	=  Recomendations;
  register   =  Register;
  noResults   =  NoResults;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad More');
  }

  openGlosary(id){
    this.navCtrl.push(this.glosary);
  }

  openTopTen(id){
    this.navCtrl.push(this.topTen);
  }

  openSelectPlan(id){
    this.navCtrl.push(this.selectPlan);
  }

  openTerms(){
    this.navCtrl.push(this.terms);
  }

  openRegister(){
    this.navCtrl.setRoot(this.register);
  }

  openNoResults(){
    this.navCtrl.setRoot(this.noResults);
  }

  openRecomendations(id){
    this.navCtrl.push(this.recomendations);
  }

}
