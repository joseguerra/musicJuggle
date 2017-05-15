import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Listen} from '../listen/listen';
import { SearchResults } from '../search-results/search-results';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoResults');
  }

  openListen(){
    this.navCtrl.push(this.listen);
  }

  search(query){		
		var query = query.srcElement.value;
		this.navCtrl.push(this.searchResults, {'query':query});
	}

  

}
