import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';

import {Listen} from '../listen/listen';

import {TabsPage} from '../tabs/tabs';
import {Register} from '../register/register'; 
import {Facebook} from '@ionic-native/facebook';
import {AngularFire,AngularFireAuth,AuthProviders,AuthMethods} from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: string;
  pass: string;	
  register = Register;
  tabs = TabsPage;
  userProfile: any = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,  
              public loadingCtrl: LoadingController,
              private facebook: Facebook,
              public angularFire: AngularFire,
              private googlePlus: GooglePlus,
              private aFAuth:AngularFireAuth
              ) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    try{
      this.aFAuth.login({
            email: this.email,
            password: this.pass
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then((fino)=>{
          this.navCtrl.setRoot(this.tabs);
        }).catch((e)=>{
          this.showAlert(e,"Error");                
        })                
    }catch(e){
      this.showAlert(e,"Error");       
    }
  }

  goToRegister(){
    this.navCtrl.setRoot(this.register);
  }

    facebookLogin(){
    this.facebook.login(['email']).then((response)=>{
      const fc = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(fc).then((fs)=>{
        this.navCtrl.setRoot(this.tabs);
      }).catch((e)=>{
        console.log(e);
      })
    }).catch((e)=>{
      console.log(e)
    })
  }


  googlePlusLogin()
  {
    this.googlePlus.login({
      'webClientId': '700740323265-cuphchhljbf39psl634mrsh4irfgm12c.apps.googleusercontent.com',
      'offline': true
    }).then((response)=>{
      console.log(response.idToken);
      const go = firebase.auth.GoogleAuthProvider.credential(response.idToken);
      firebase.auth().signInWithCredential(go)
      .then((res)=>{
        this.navCtrl.setRoot(this.tabs);
      }).catch((e)=>{
        console.log("prueba1 "+e)
      })
    }).catch((e)=>{
      console.log("prueba2 "+e)
    })
  }



}
