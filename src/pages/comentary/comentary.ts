import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import {ModalComentary} from '../modal-comentary/modal-comentary';
import {FirebaseProvider} from '../../app/firebase.provider';
import { Storage } from '@ionic/storage';
import {History} from '../history/history';
import {HistoryDetail}from '../history-detail/history-detail';
/**
 * Generated class for the HistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comentary',
  templateUrl: 'comentary.html',
})
export class Comentary {
  history: any;
  comentarios: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public firebaseProvider:FirebaseProvider,
              public storage: Storage, 
              public modalCtrl: ModalController) {
    let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
        this.storage.get('email').then((email) => {
          this.firebaseProvider.getComentary(email).subscribe(comentarios =>{
            this.comentarios = comentarios.reverse();;
            console.log(this.comentarios)
            loader.dismiss();  
          },
          err=>{
          loader.dismiss();		
          });
        })


    console.log(navParams.get('history'));
    this.history = navParams.get('song');
  }

  openModal() {
    console.log("abri modal")
    let modal = this.modalCtrl.create(ModalComentary);
    modal.present();
        modal.onDidDismiss((data)=>{
          if(data)
            this.navCtrl.setRoot(History);
    }) 

  }

  back(){    
    this.navCtrl.setRoot(History)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryDetail');
  }



}
