import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';
import { Login } from '../login/login';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

	selectPlan =  SelectPlan;
	login =  Login;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log("hola");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }


	onSelectPlan(id){
		console.log('onSelectPlan');
		
		this.navCtrl.push(this.selectPlan);
	}

	openLogin(){
		this.navCtrl.push(this.login);
	}

}
