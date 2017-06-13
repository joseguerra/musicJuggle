import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Platform } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
import { MusixmatchProvider } from '../../app/musixmatch.provider';


/**
 * Generated class for the Song page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-song',
  templateUrl: 'song.html'
})
export class Song {
	track: string;
	loader:any
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
		genres:[{
			name:''
		}],
		external_ids:{
			isrc:''
		},
		release_date:'',
		id:'',
		deezer:'',
		itunes:'',
		youtube:'',
		lyric:''
	};

  constructor(public navCtrl: NavController,
							public navParams: NavParams,
							public http: Http,
							private appAvailability: AppAvailability,
							public plt: Platform,
							private iab: InAppBrowser,
							public loadingCtrl: LoadingController,
							public sanitizer:DomSanitizer,
							public musixmatchProvider:MusixmatchProvider,
              ) {

    console.log('class song');
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...'
		})

		if(navParams.get('id')){

      console.log('viene por id');

			if(navParams.get('recomendation')){
				this.loader.present();
				this.song = navParams.get('recomendation');
				this.getLyrics(navParams.get('recomendation').artists[0].name,navParams.get('recomendation').name);

      }else if(navParams.get('song')){
				this.loader.present();
				this.song = navParams.get('song');
				this.getLyrics(navParams.get('song').artists[0].name,navParams.get('song').name);

      }else{
				this.loader.present();

				this.http.get('http://54.214.246.7/track.php?q='+navParams.get('id')).map(res => res.json()).subscribe(data => {
					this.song = data;
					this.getLyrics(this.song.artists[0].name,this.song.name);
				});
			}

		}else{

      console.log('NO viene por id -->>>>');

			this.loader.present();

      console.log(navParams.get('data'));

      console.log('<<<<<----');

      if(typeof navParams.get('data').metadata.music[0].external_metadata.spotify.track.id !== 'undefined'){

  			this.http.get('http://54.214.246.7/track.php?q='+navParams.get('data').metadata.music[0].external_metadata.spotify.track.id).map(res => res.json()).subscribe(data => {

          console.log('data de spotify: ');
          console.log(data);
          console.log('end data de spotify: ');
  				this.song.album.images[0].url = data.album.images[0].url;

          console.log('punto - 0');

          console.log('punto - 1');

          this.song.name = navParams.get('data').metadata.music[0].title;
          console.log('punto - 2');
          this.song.artists[0].name = navParams.get('data').metadata.music[0].artists[0].name;
          console.log('punto - 3');
          this.song.album.name = navParams.get('data').metadata.music[0].album.name;
          console.log('punto - 4');
          this.song.id =  navParams.get('data').metadata.music[0].external_metadata.spotify.track.id;
          console.log('punto - 5');

          this.loader.dismiss();
          if(typeof navParams.get('data').metadata.music[0].external_metadata.deezer !== 'undefined')
            this.song.deezer =  navParams.get('data').metadata.music[0].external_metadata.deezer.track.id;

          console.log('punto - 6');
          if(typeof navParams.get('data').metadata.music[0].external_metadata.youtube !== 'undefined')
            this.song.youtube =   this.sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/"+navParams.get('data').metadata.music[0].external_metadata.youtube.vid);

          console.log('punto - 7');
          this.getLyrics(navParams.get('data').metadata.music[0].artists[0].name,navParams.get('data').metadata.music[0].title);


          console.log('punto - 8');
		  this.song.genres[0].name = navParams.get('data').metadata.music[0].genres[0].name;

		  console.log('punto - 9');
		  this.song.release_date = navParams.get('data').metadata.music[0].release_date;

		  console.log('punto - 10');
		  this.song.external_ids.isrc = navParams.get('data').metadata.music[0].external_ids.isrc;
  			},err=>{
          console.log('errorrrr --->');
  				console.log(err)
  			});

      }


		}
  }

	getLyrics(artistName,songName){
		this.musixmatchProvider.getSong(artistName,songName)
		.subscribe(response =>{
			if(response.message.header.available!=0){
				this.track =  response.message.body.track_list[0].track.track_id;
				this.musixmatchProvider.getLyrics(this.track)
				.subscribe(response =>{
					if(response.message.header.status_code==200){
						this.song.lyric =  response.message.body.lyrics.lyrics_body;
						this.loader.dismiss();
					}
					this.loader.dismiss();
				},err=>{
					this.loader.dismiss();
				});
			}
			this.loader.dismiss();
		},err=>{
			this.loader.dismiss();
		});
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

}
