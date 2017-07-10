import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { HistoryDetail } from '../history-detail/history-detail';
import {WaitingForQuote} from '../waiting-for-quote/waiting-for-quote';
import {FirebaseProvider} from '../../app/firebase.provider';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the History page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {

	historyDetail =  HistoryDetail;
  waitingForQuote = WaitingForQuote;
  histories: any;
  constructor(public navCtrl: NavController,
              public firebaseProvider:FirebaseProvider,
				      public loadingCtrl: LoadingController,
				      public alertCtrl: AlertController,
              public storage: Storage,  
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
        this.storage.get('email').then((email) => {
          this.firebaseProvider.getCotizaciones(email).subscribe(cotizaciones =>{
            this.histories = cotizaciones.reverse();;
            console.log("--" + this.histories.length);
            loader.dismiss();  
          },
          err=>{
          loader.dismiss();		
          });
        })
  }


  onclick(history){

    if(history.precio)
      this.navCtrl.push(this.historyDetail, {'history':history});
    else
      this.navCtrl.push(this.waitingForQuote, {'history':history});
  }

  onclickWaiting(history){
    this.navCtrl.push(this.waitingForQuote, {'history':history});
  }

}
