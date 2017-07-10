import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController } from 'ionic-angular';

/*
	Generated class for the Clinic provider.

	See https://angular.io/docs/ts/latest/guide/dependency-injection.html
	for more info on providers and Angular 2 DI.
*/
@Injectable()

export class FirebaseProvider {

	fireStorage = firebase.storage()
	song: FirebaseListObservable<any[]>;
	profile: FirebaseListObservable<any[]>;
	cotizaciones: FirebaseListObservable<any[]>;
	constructor(private af: AngularFire,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public storage: Storage) {
	}

	showAlert(message, title) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}

	getTopTen() {

		this.song = this.af.database.list('/top10') as FirebaseListObservable<any[]>;
		return this.song;
	}

	getRecomendations() {
		this.song = this.af.database.list('/recomendadas') as FirebaseListObservable<any[]>;
		return this.song;
	}

	getProfile(email) {

		this.profile = this.af.database.list('/cuentas', {
			query: {
				orderByChild: 'email',
				equalTo: email
			}
		}) as FirebaseListObservable<any[]>;
		return this.profile;
	}

	setProfile(nombre, email, empresa) {
		const itemObservable = this.af.database.list('/cuentas');
		itemObservable.push({
			apellido: "",
			email: email,
			empresa: empresa,
			nombre: nombre,
			otros: "",
			pais: "",
			plan: "Free",
			producciones: "",
			puesto: "",
			reproducciones: "",
			telefono: "",
			uso: "",
			plan_solicitado: ""
		})
	}

	updatePlan(email, plan) {

		this.getProfile(email).subscribe(profile => {

			const itemObservable = this.af.database.list('/cuentas');
			itemObservable.update(profile[0].$key, {
				plan_solicitado: plan
			}).then(data => {
				return data;
			})
		});
	}

	updateProfile(apellido, email, empresa, nombre, otros, pais, plan, producciones, puesto, reproducciones, telefono, uso, key) {

		const itemObservable = this.af.database.list('/cuentas');
		itemObservable.update(key, {
			apellido: apellido,
			email: email,
			empresa: empresa,
			nombre: nombre,
			otros: otros,
			pais: pais,
			plan: 'Free',
			producciones: producciones,
			puesto: puesto,
			reproducciones: reproducciones,
			telefono: telefono,
			uso: uso,
		}).then(data => {
			return data;
		})
	}



	setCotizacion(email, nombre, empresa, cliente, campania, medio, licencia, territorios, cantidad, imagen, cancion, artista, album) {
		const itemObservable = this.af.database.list('/cotizaciones');
		itemObservable.push({
			email: email,
			nombre: nombre,
			empresa: empresa,
			cliente: cliente,
			campania: campania,
			medio: medio,
			licencia: licencia,
			territorios: territorios,
			cantidad: cantidad,
			imagen: imagen,
			cancion: cancion,
			artista: artista,
			album: album
		})
	}

	setUnrecognizables(date, nombre, file) {
		const itemObservable = this.af.database.list('/unrecognizables');
		itemObservable.push({
			date: date,
			nombre: nombre,
			file: file,
		})
	}

	saveSong(song) {
		let loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loader.present();
		var f = new Date();

		var songStorage = this.fireStorage.ref().child('new_' + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + "/" + f.getHours() + "/" + f.getMinutes() + "/" + f.getSeconds());

		songStorage.put(song).then((res) => {

			this.storage.get('nombre').then((nombre) => {
				this.setUnrecognizables(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear(), nombre, 'new_' + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + "/" + f.getHours() + "/" + f.getMinutes() + "/" + f.getSeconds())
			})

			loader.dismiss();
			this.showAlert("Su cancion ha sido enviada", "Perfecto");
			console.log("todo fino");
		}).catch((err) => {
			loader.dismiss();
			this.showAlert("Su cancion no ha sido enviada", "Error");
			console.log(err);
		})
	}

	getCotizaciones(email) {
		this.cotizaciones = this.af.database.list('/cotizaciones', {
			query: {
				orderByChild: 'email',
				equalTo: email
			}
		}) as FirebaseListObservable<any[]>;
		return this.cotizaciones;
	}

	setConsulta(email, consulta, origen, song) {
		const itemObservable = this.af.database.list('/consultas');
		itemObservable.push({
			song: song,
			email: email,
			consulta: consulta,
			origen: origen
		})
	}

	setQuestion(email, pregunta) {
		const itemObservable = this.af.database.list('/preguntas');
		itemObservable.push({
			email: email,
			pregunta: pregunta
		})
	}

	getConsulta(email) {
		this.cotizaciones = this.af.database.list('/consultas', {
			query: {
				orderByChild: 'email',
				equalTo: email
			}
		}) as FirebaseListObservable<any[]>;
		return this.cotizaciones;
	}

	getQuestion(email) {
		this.cotizaciones = this.af.database.list('/preguntas', {
			query: {
				orderByChild: 'email',
				equalTo: email
			}
		}) as FirebaseListObservable<any[]>;
		return this.cotizaciones;
	}




}
