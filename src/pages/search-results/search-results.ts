import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Song } from '../song/song';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResults {

	song =  Song;
	songs: any;
	loader: any;
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public http: Http,
				public loadingCtrl: LoadingController) {

		let loader = this.loadingCtrl.create({
			content: 'Please wait...'			
		})
		
		loader.present();

		console.log( navParams.get('query') );

		this.http.get('https://api.spotify.com/v1/search?type=track&q='+navParams.get('query')).map(res => res.json()).subscribe(data => {
		    this.songs = data.tracks.items;
			loader.dismissAll();
		    console.log(this.songs);

		});

	}

	presentLoading() {
		
	}

 	openSong(id){
 		this.navCtrl.push(this.song, {'id':id});
 	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchResults');
	}

}
