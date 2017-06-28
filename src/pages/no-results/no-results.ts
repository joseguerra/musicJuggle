import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              public firebaseProvider:FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoResults');
  }

  openListen(){
    this.navCtrl.setRoot(this.listen);
  }

  enviarAudio(){
    this.firebaseProvider.saveSong(this.navParams.get('audio'));
  }


  

  search(query){		
		var query = query.srcElement.value;
		this.navCtrl.push(this.searchResults, {'query':query});
	}

  

}
