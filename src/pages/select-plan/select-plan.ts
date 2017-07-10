import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { FirebaseProvider } from '../../app/firebase.provider';
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

	profile = Profile;

	constructor(
							public navCtrl: NavController, 
							public navParams: NavParams, 
							public alertCtrl: AlertController,
							public firebaseProvider:FirebaseProvider,
							public storage: Storage) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SelectPlan');
	}

	openModal(plan) {
		
		if(plan != 'Free'){

			this.showAlert("En breve un representante se comunicará contigo para gestionar el cambio de plan", "Excelente!");

			this.storage.get('email').then((email) => {

				this.firebaseProvider.updatePlan(
					email,
					plan
				)
			});
		}
		
		this.navCtrl.popTo(this.profile, {'plan' : plan });
	}

	showAlert(message, title) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}

}