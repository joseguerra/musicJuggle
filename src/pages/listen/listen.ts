import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../song/song';

/**
 * Generated class for the Listen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listen',
  templateUrl: 'listen.html',
})
export class Listen {

	song =  Song;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Listen');
	}


  openSong(id){
    this.navCtrl.push(this.song);
  }

}
