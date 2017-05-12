import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the Song page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-song',
  templateUrl: 'song.html',
})
export class Song {

	song: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

		this.http.get('https://api.spotify.com/v1/tracks/'+navParams.get('id')).map(res => res.json()).subscribe(data => {
		    
		    this.song = data;

		    console.log(this.song); 

		});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Song');
  }


	goBack(){
		this.navCtrl.pop();
	}

}
