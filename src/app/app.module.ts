
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { MediaPlugin } from '@ionic-native/media';
import { Ionic2RatingModule } from 'ionic2-rating';

import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/*Firebase*/
import { AngularFireModule } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';
import {Facebook} from '@ionic-native/facebook';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { Register } from '../pages/register/register';
import { More } from '../pages/more/more';
import { Profile } from '../pages/profile/profile';
import { History } from '../pages/history/history';
import { HistoryDetail } from '../pages/history-detail/history-detail';
import { Listen } from '../pages/listen/listen';
import { SelectPlan } from '../pages/select-plan/select-plan';
import { Glosary } from '../pages/glosary/glosary';
import { TopTen } from '../pages/top-ten/top-ten';
import { WorkWithUs } from '../pages/work-with-us/work-with-us';
import { Terms } from '../pages/terms/terms';
import { Recomendations } from '../pages/recomendations/recomendations';
import { ModalOutBudget } from '../pages/modal-out-budget/modal-out-budget';
import { Login } from '../pages/login/login';
import { Song } from '../pages/song/song';
import { SearchResults } from '../pages/search-results/search-results';
import { NoResults } from '../pages/no-results/no-results';

import { ListenProvider } from '../pages/listen/listen.provider';

import {FirebaseProvider} from '../app/firebase.provider';
import {MusixmatchProvider} from '../app/musixmatch.provider';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {TruncatePipe} from './truncate.pipe';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '326163c5'
  },
  'auth':{
    'facebook':{
      'scope': []
    }
  }
};
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/img/i18n/', '.json');
}

  export const firebaseConfig = {
    apiKey: "AIzaSyBzuLO7pTPLvrQ3_gMTTqrfyaMnOMZ_sjw",
    authDomain: "angulafire.firebaseapp.com",
    databaseURL: "https://angulafire.firebaseio.com",
    projectId: "angulafire",
    storageBucket: "angulafire.appspot.com",
    messagingSenderId: "700740323265"
  };


@NgModule({
  declarations: [
    MyApp,
    Profile,
    History,
    HistoryDetail,
    Listen,
    ContactPage,
    More,
    TabsPage,
    SelectPlan,
    Glosary,
    TopTen,
    WorkWithUs,
    Terms,
    Recomendations,
    ModalOutBudget,
    Register,
    Login,
    Song,
    SearchResults,
    NoResults,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ionic2RatingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      //tabsPlacement: 'bottom',
      pageTransition: 'ios'
      }
    ),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  exports: [
    TruncatePipe
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Profile,
    History,
    HistoryDetail,
    Listen,
    ContactPage,
    More,
    TabsPage,
    SelectPlan,
    Glosary,
    TopTen,
    WorkWithUs,
    Terms,
    Recomendations,
    ModalOutBudget,
    Register,
    Login,
    Song,
    SearchResults,
    NoResults
  ],
  providers: [
    GooglePlus,
    Facebook,
    ListenProvider,
    FirebaseProvider,
    MusixmatchProvider,
    StatusBar,
    SplashScreen,
    MediaPlugin,
    Transfer,
    AppAvailability,
    InAppBrowser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
