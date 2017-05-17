import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
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
      console.log(err);  
    });
  }

 	openSong(recomendation){     
 		this.navCtrl.push(this.song, {'id':1,'recomendation':recomendation});
 	}

}
