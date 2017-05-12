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
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { Ionic2RatingModule } from 'ionic2-rating';

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

import {ListenProvider} from '../pages/listen/listen.provider';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    SearchResults
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ionic2RatingModule,  

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
    SearchResults
  ],
  providers: [
  ListenProvider,
    StatusBar,
    SplashScreen,
    MediaPlugin, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}

