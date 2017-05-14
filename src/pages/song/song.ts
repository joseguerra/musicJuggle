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

	song: any = {
		album:{
			name,
			images:[{
					url:''
			}]
		},
		name,
		artists:[{
			name:''
		}]
	};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {		
		if(navParams.get('id')){
			this.http.get('https://api.spotify.com/v1/tracks/'+navParams.get('id')).map(res => res.json()).subscribe(data => {		    
		    this.song = data;		    
			});
		}else{
			console.log("llegue aqui");
			this.song.album.images[0].url = 'url';
			this.song.name = navParams.get('data').metadata.music[0].title;
			this.song.artists[0].name = navParams.get('data').metadata.music[0].artists[0].name;
			this.song.album.name = navParams.get('data').metadata.music[0].album.name;
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Song');
  }

	goBack(){
		this.navCtrl.pop();
	}

}
