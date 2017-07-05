import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Register} from '../register/register'; 
import {Facebook} from '@ionic-native/facebook';
import {AngularFireAuth,AuthProviders,AuthMethods} from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import {FirebaseProvider} from '../../app/firebase.provider';

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
              public firebaseProvider:FirebaseProvider,
              public loadingCtrl: LoadingController,
              private facebook: Facebook,              
              private googlePlus: GooglePlus,
              private aFAuth:AngularFireAuth,
              public storage: Storage,
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
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();

    try{
      this.aFAuth.login({
            email: this.email,
            password: this.pass
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then((fino)=>{
          this.storage.set('email', this.email);
          loader.dismiss();
          this.navCtrl.setRoot(this.tabs);
        }).catch((e)=>{
          loader.dismiss();
          this.showAlert(e,"Error");                
        })                
    }catch(e){
      loader.dismiss();
      this.showAlert(e,"Error");       
    }
  }

  goToRegister(){
    this.navCtrl.setRoot(this.register);
  }


  facebookLogin(){
    this.facebook.login(['email']).then((response)=>{
      this.facebook.getLoginStatus().then((response) => {
        if(response.status == "connected") {
          this.facebook.api('/' + response.authResponse.userID + '?fields=id,name,email',[]).then((response) => {                                                    
            this.firebaseProvider.getProfile(response.email).subscribe(profile =>{
              console.log(profile);	
              if(profile.length>0){
                console.log("ya esta creado");
                this.storage.set('email', response.email);
                this.navCtrl.setRoot(this.tabs);
              }
              else{
                console.log("no esta creado");
                this.facebookRegister();
              }       
			      },
			      err=>{
              console.log(err);	
			      });
          })
        }
      })
    }).catch((e)=>{
      console.log(e)
    })
  }


    facebookRegister(){
    this.facebook.login(['email']).then((response)=>{
      const fc = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      this.facebook.getLoginStatus().then((response) => {
        if(response.status == "connected") {
          this.facebook.api('/' + response.authResponse.userID + '?fields=id,name,email',[]).then((response) => {                        
              console.log(response.email)
              this.storage.set('email', response.email);
              firebase.auth().signInWithCredential(fc).then((fs)=>{
                this.navCtrl.setRoot(this.tabs);
              }).catch((e)=>{
                this.showAlert("Intentelo luego ","Error de auth"); 
                console.log("1");
              })
          })
        }
      })      
    }).catch((e)=>{
      this.showAlert("Intentelo luego","Error de auth"); 
      console.log("2")
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
