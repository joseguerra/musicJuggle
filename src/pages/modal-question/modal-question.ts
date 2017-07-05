import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, ViewController } from 'ionic-angular';
import {FirebaseProvider} from '../../app/firebase.provider';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ModalOutBudget page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-question',
  templateUrl: 'modal-question.html',
})
export class ModalQuestion {
  comentario: string = ""; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
				      public alertCtrl: AlertController,
              public storage: Storage,  
              public firebaseProvider:FirebaseProvider,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalOutBudget');
  }

  dismiss() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...'			
    })
    loader.present();
    this.storage.get('email').then((email) => {
      this.firebaseProvider.setQuestion(email,this.comentario)
    })
    loader.dismiss();
    this.showAlert("Gracias te responderemos al email con el que creaste tu cuenta","Perfecto");
    this.viewCtrl.dismiss();
  }

  showAlert(message,title) {
		let alert = this.alertCtrl.create({
		title: title,
		subTitle: message,
		buttons: ['OK']
		});
		alert.present();
	}

}
