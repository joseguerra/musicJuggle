import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Glosary page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-glosary',
  templateUrl: 'glosary.html',
})
export class Glosary {

	  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	for(let i = 0; i < 10; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'arrow-forward',
          showDetails: false
        });
    }

  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'arrow-forward';
    } else {
        data.showDetails = true;
        data.icon = 'arrow-down';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Glosary');
  }

}
