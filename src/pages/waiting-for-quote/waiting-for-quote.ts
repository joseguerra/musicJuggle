import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Comentary } from '../comentary/comentary';
/**
 * Generated class for the HistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-waiting-for-quote',
	templateUrl: 'waiting-for-quote.html',
})
export class WaitingForQuote {
	cotizacion: any;
	comentary = Comentary;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

		console.log(navParams.get('history'));
		this.cotizacion = navParams.get('history');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HistoryDetail');
	}

	goComentary() {
		console.log("entre");

		this.navCtrl.push(this.comentary, { 'cotizacion': this.cotizacion, 'origen': 'Cotización' });
	}



}
