import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Platform } from 'ionic-angular';

import {DomSanitizer} from '@angular/platform-browser';
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
		}],
		id:'',
		deezer:'',
		itunes:'',
		youtube:''
	};

  constructor(public navCtrl: NavController,
							public navParams: NavParams, 
							public http: Http,
							private appAvailability: AppAvailability,
							public plt: Platform,
							private iab: InAppBrowser,
							public alertCtrl: AlertController,
							public loadingCtrl: LoadingController,
							public sanitizer:DomSanitizer) {		

		let loader = this.loadingCtrl.create({
			content: 'Please wait...'			
		})
		
											

		if(navParams.get('id')){
			loader.present();
			this.http.get('https://api.spotify.com/v1/tracks/'+navParams.get('id')).map(res => res.json()).subscribe(data => {		    
		    this.song = data;					
				loader.dismissAll();					
			});
		}else{					
			this.song.album.images[0].url = 'url';
			this.song.name = navParams.get('data').metadata.music[0].title;
			this.song.artists[0].name = navParams.get('data').metadata.music[0].artists[0].name;
			this.song.album.name = navParams.get('data').metadata.music[0].album.name;
			this.song.id =  navParams.get('data').metadata.music[0].external_metadata.spotify.track.id;
			this.song.deezer =  navParams.get('data').metadata.music[0].external_metadata.deezer.track.id;
			this.song.youtube =   this.sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/"+navParams.get('data').metadata.music[0].external_metadata.youtube.vid);
			
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Song');
  }

	goBack(){
		this.navCtrl.pop();
	}

	launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, track:string) {
		let app: string;
		if (this.plt.is('ios')) {
			app = iosSchemaName;		
		} else if (this.plt.is('android')) {
			app = androidPackageName;			
		} else {				
			window.open(httpUrl+track, '_system', 'location=no');				
			return;
		}

		this.appAvailability.check(app).then(
			() => { // success callback
				window.open(appUrl+track, '_system', 'location=no');				
				//const browser = this.iab.create(appUrl);				
			},
			() => { // error callback					
				window.open(httpUrl+track, '_system', 'location=no');				
				//const browser = this.iab.create(httpUrl);			
			}
		);
	}

	openSpotify() {
		this.launchExternalApp('instagram://', 'com.spotify.music', 'spotify:track:', 'http://open.spotify.com/artist/',this.song.id);
	}

	openDeezer() {
		this.launchExternalApp('instagram://', 'deezer.android.app', 'deezer://www.deezer.com/track/', 'http://www.deezer.com/track/',this.song.deezer);
	}

	openItunes() {
		this.launchExternalApp('instagram://', 'deezer.android.app', 'deezer://www.deezer.com/track/', 'http://www.deezer.com/track/',this.song.deezer);
	}

	showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



}
