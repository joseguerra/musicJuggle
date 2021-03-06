import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';
import { Login } from '../login/login';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import {TabsPage} from '../tabs/tabs';
import {FirebaseProvider} from '../../app/firebase.provider';

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
  email: string = "";
  pass: string;
  name:string;
  company:string;  
  tabs = TabsPage;
  tabBarElement:any = document.querySelector('.tabbar.show-tabbar');
  constructor(public navCtrl: NavController,
							public navParams: NavParams,
              public alertCtrl: AlertController,  
							private facebook: Facebook,
              public loadingCtrl: LoadingController,
              private googlePlus: GooglePlus,
              private aFAuth:AngularFireAuth,
              public storage: Storage,
              public firebaseProvider:FirebaseProvider,              
              ) {  	
  }

  /*
  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }
  */


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
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.email = this.email.toLowerCase();
    try{
        this.aFAuth.createUser({
            email: this.email,
            password: this.pass
        }).then((result)=>{
          this.storage.set('email', this.email);
          this.firebaseProvider.setProfile(this.name,this.email,this.company)


          loader.dismiss();
          this.navCtrl.setRoot(this.tabs);
        }).catch((e)=>{
          loader.dismiss();
          this.showAlert(e,"Error");
        });              
    }catch(e){
      loader.dismiss();
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
        this.facebook.getLoginStatus().then((response) => {
          if(response.status == "connected") {
            this.facebook.api('/' + response.authResponse.userID + '?fields=id,name,email',[]).then((response) => {                        
              this.firebaseProvider.getProfile(response.email).subscribe(profile =>{
                console.log(profile);	
                if(profile.length>0){
                  console.log("ya esta creado");
                  this.showAlert("Este usuario ya esta registrado","Error"); 
                }
                else{
                  console.log(response.email)
                  this.storage.set('email', response.email);
                  firebase.auth().signInWithCredential(fc).then((fs)=>{
                    this.firebaseProvider.setProfile(response.name,response.email,"")
                    this.navCtrl.setRoot(this.tabs);
                  }).catch((e)=>{
                    this.showAlert("Intentelo luego ","Error de auth"); 
                    console.log("1");
                  })
                }       
              },
              err=>{
                console.log(err);	
              });                                
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
