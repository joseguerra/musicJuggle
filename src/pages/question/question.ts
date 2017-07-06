import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from '../../app/firebase.provider';
import { Storage } from '@ionic/storage';
import {ModalQuestion} from '../modal-question/modal-question';
import {Listen} from '../listen/listen';
import{Song} from '../song/song';
/**
 * Generated class for the HistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class Question {
  song: any;
  preguntas: any;

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
          this.firebaseProvider.getQuestion(email).subscribe(preguntas =>{
            this.preguntas = preguntas.reverse();;
            console.log(this.preguntas)
            loader.dismiss();  
          },
          err=>{
          loader.dismiss();		
          });
        })
    console.log(navParams.get('song'));
    this.song = navParams.get('song');
  }

  openModal() {
    console.log("abri modal")
    let modal = this.modalCtrl.create(ModalQuestion);
    modal.present();
        modal.onDidDismiss((data)=>{
          if(data)            
            this.navCtrl.setRoot(Listen);
    }) 

  }

  back(){    
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryDetail');
  }



}
