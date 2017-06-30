import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {Listen} from '../listen/listen';
import { SearchResults } from '../search-results/search-results';
import {FirebaseProvider} from '../../app/firebase.provider';
/**
 * Generated class for the NoResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-no-results',
  templateUrl: 'no-results.html',
})
export class NoResults {
  listen = Listen;
  searchResults = SearchResults; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, 
              public firebaseProvider:FirebaseProvider) {
  }

  showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['LISTO']
    });
    alert.present();
  }

  openListen(){
    this.navCtrl.setRoot(this.listen);
  }

  enviarAudio(){
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();

    this.firebaseProvider.saveSong(this.navParams.get('audio'));
    loader.dismiss();
    this.showAlert("En las próximas horas vamos a estar contactandote.","Buenisimo!");
  }


  

  search(query){		
		var query = query.srcElement.value;
		this.navCtrl.push(this.searchResults, {'query':query});
	}

  

}
