import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Song } from '../song/song';
import {FirebaseProvider} from '../../app/firebase.provider';
/**
 * Generated class for the TopTen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-top-ten',
  templateUrl: 'top-ten.html',
})
export class TopTen {
  song =  Song;
  songs: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController, 
              public firebaseProvider:FirebaseProvider,
              public loadingCtrl: LoadingController) {
                
    let loader = this.loadingCtrl.create({
      content: 'Please wait...'			
    })
    loader.present();

    this.firebaseProvider.getTopTen().subscribe(songs =>{        
      this.songs = songs
      loader.dismiss();                             
    },
    err=>{
      loader.dismiss();
      this.showAlert(err,"Error");          
    }
    );
  }

  showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  openSong(song){     
 		this.navCtrl.push(this.song, {'id':1,'song':song});
 	}
}
