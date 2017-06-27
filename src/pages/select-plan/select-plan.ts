import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from '../profile/profile';
/**
 * Generated class for the SelectPlan page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-plan',
  templateUrl: 'select-plan.html',
})
export class SelectPlan {
  profile =  Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPlan');
  }

  openModal(plan){
    this.navCtrl.push(this.profile, {'plan':plan});
  }

}
