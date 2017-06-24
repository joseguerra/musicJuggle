import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';
import {FirebaseProvider} from '../../app/firebase.provider';

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
	email:string;
	fullName: string;
	name: string;	
	phone: string;	
	country: string;	
	company: string;	
	work: string;	
	key: string;
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public firebaseProvider:FirebaseProvider,
				public loadingCtrl: LoadingController,
				public storage: Storage) {
		let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();

		storage.get('email').then((email) => {			
			email = email.toLowerCase();
			console.log(email)
			this.firebaseProvider.getProfile(email).subscribe(profile =>{
				console.log(profile);				  				
				this.name = profile[0].name;
				this.fullName = profile[0].fullName;
				this.email = profile[0].email;
				this.phone = profile[0].phone;
				this.country = profile[0].country;
				this.company = profile[0].company;
				this.work = profile[0].work;
				this.key = profile[0].$key;
				loader.dismiss();                
				console.log(profile)  
			},
			err=>{
			loader.dismiss();		
			});
		})





	}

	ionViewDidLoad() {

	}

	save(){
		let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
		  this.email = this.email.toLowerCase();
		this.firebaseProvider.updateProfile(
			this.name,
			this.fullName,
			this.email,
			this.phone,
			this.country,
			this.company,
			this.work,
			this.key
		)

		loader.dismiss();
	}



	onSelectPlan(id){
		console.log('onSelectPlan');
		
		this.navCtrl.push(this.selectPlan, {'id':id});
	}

}