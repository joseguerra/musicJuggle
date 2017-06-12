import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';
import { Login } from '../login/login';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {	
	selectPlan =  SelectPlan;
	login =  Login;	
  email: string;
  pass: string;
  tabs = TabsPage;
  constructor(public navCtrl: NavController,
							public navParams: NavParams,
              public alertCtrl: AlertController,  
							private facebook: Facebook,
              private googlePlus: GooglePlus,
              private aFAuth:AngularFireAuth              
              ) {  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

    showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  async register(){
    try{
        this.aFAuth.createUser({
            email: this.email,
            password: this.pass
        }).then((result)=>{
          this.navCtrl.setRoot(this.tabs);
        }).catch((e)=>{
           this.showAlert(e,"Error");
        });              
    }catch(e){
       this.showAlert(e,"Error");
    }
    
  }


	onSelectPlan(id){
		console.log('onSelectPlan');
		
		this.navCtrl.push(this.selectPlan);
	}

	openLogin(){
		this.navCtrl.push(this.login);
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
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(response.idToken))
      .then((res)=>{
        this.navCtrl.setRoot(this.tabs);
      }).catch((e)=>{
        console.log(e)
      })
    }).catch((e)=>{
      console.log(e)
    })
  }

}
