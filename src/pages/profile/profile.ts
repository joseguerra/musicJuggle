import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';


/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

	selectPlan =  SelectPlan;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Profile');
	}


	onSelectPlan(id){
		console.log('onSelectPlan');
		
		this.navCtrl.push(this.selectPlan, {'id':id});
	}

}