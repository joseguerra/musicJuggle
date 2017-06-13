import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { Song } from '../song/song';
import {FirebaseProvider} from '../../app/firebase.provider';
/**
 * Generated class for the Recomendations page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recomendations',
  templateUrl: 'recomendations.html',
})
export class Recomendations {
  song =  Song;
  recomendations: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public firebaseProvider:FirebaseProvider,
              public alertCtrl: AlertController, 
              public loadingCtrl: LoadingController) {
      let loader = this.loadingCtrl.create({
        content: 'Please wait...'			
      })
      loader.present();
      
    this.firebaseProvider.getRecomendations().subscribe(recomendations =>{  
      loader.dismiss();                
      this.recomendations = recomendations      
    },
    err=>{
      loader.dismiss();
      this.showAlert(err,"Error"); 
    });
  }

   showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

 	openSong(recomendation){     
 		this.navCtrl.push(this.song, {'id':1,'recomendation':recomendation});
 	}

}
