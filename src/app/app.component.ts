import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Login} from '../pages/login/login'
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  rootPage:any = Login;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService,  public loadingCtrl: LoadingController, public storage: Storage) {

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.storage.get('introShown').then((result) => {

        if(result){
          this.rootPage = Login;
        } else {
          this.rootPage = 'Intro';
          this.storage.set('introShown', true);
        }
 
      });
      
      statusBar.styleDefault();
      setTimeout(() => {
        splashScreen.hide();
      }, 100);
      translate.setDefaultLang('es');
      translate.use('es');
    });

    
  }
}
