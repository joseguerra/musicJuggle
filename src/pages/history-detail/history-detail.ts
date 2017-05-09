import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalOutBudget } from '../modal-out-budget/modal-out-budget';

/**
 * Generated class for the HistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history-detail',
  templateUrl: 'history-detail.html',
})
export class HistoryDetail {

	modalOutBudget =  ModalOutBudget;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryDetail');
  }


  openOutBudget() {

    let modal = this.modalCtrl.create(this.modalOutBudget);
    modal.present();
  }


}
