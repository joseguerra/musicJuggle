import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { ModalComentary } from '../modal-comentary/modal-comentary';
import { FirebaseProvider } from '../../app/firebase.provider';
import { Storage } from '@ionic/storage';
import { History } from '../history/history';
import { HistoryDetail } from '../history-detail/history-detail';
/**
 * Generated class for the HistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-comentary',
	templateUrl: 'comentary.html',
})
export class Comentary {
	cotizacion: any;
	comentarios: any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public firebaseProvider: FirebaseProvider,
		public storage: Storage,
		public modalCtrl: ModalController) {

		this.cotizacion = navParams.get('cotizacion');
		console.log(this.cotizacion);

		let loader = this.loadingCtrl.create({
			content: 'Please wait...'
		})

		loader.present();

		this.storage.get('email').then((email) => {
			this.firebaseProvider.getConsulta(email).subscribe(comentarios => {
				this.comentarios = comentarios.reverse();;
				console.log(this.comentarios)
				loader.dismiss();
			},
				err => {
					loader.dismiss();
				});
		})
	}

	openModal() {
		console.log("abri modal")
		let modal = this.modalCtrl.create(ModalComentary, { 'origen': this.navParams.get('origen'), 'song': this.cotizacion.artista + ' - ' + this.cotizacion.cancion });
		modal.present();
		modal.onDidDismiss((data) => {
			if (data)
				this.navCtrl.setRoot(History);
		})

	}

	back() {
		this.navCtrl.setRoot(History)
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HistoryDetail');
	}

}