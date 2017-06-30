import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { HistoryDetail } from '../history-detail/history-detail';
import {FirebaseProvider} from '../../app/firebase.provider';
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
  histories: any;
  constructor(public navCtrl: NavController,
              public firebaseProvider:FirebaseProvider,
				      public loadingCtrl: LoadingController,
				      public alertCtrl: AlertController,  
              public navParams: NavParams) {
        let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
        this.firebaseProvider.getCotizaciones().subscribe(cotizaciones =>{
          this.histories = cotizaciones;
          console.log(this.histories)
          loader.dismiss();  
        },
			  err=>{
			  loader.dismiss();		
			  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }


  onclick(history){
    this.navCtrl.push(this.historyDetail, {'history':history});
  }

}
