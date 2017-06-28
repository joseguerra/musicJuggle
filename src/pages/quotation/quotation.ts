import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {FirebaseProvider} from '../../app/firebase.provider';
import { Listen } from '../listen/listen';
/**
 * Generated class for the QuotationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class Quotation {
  listen = Listen;
  email: string;
  nombre: string;
  empresa: string;
  cliente: string = "";
  campania: string = "";

  medio: any = [];
  tv: boolean = false;
  radio: boolean = false;
  cine: boolean = false;
  internet: boolean = false;
  todos: boolean = false;
  otros: boolean = false;

  licencia: any = [];
  tres: boolean = false;
  seis: boolean = false;
  doce: boolean = false;
  otrosLicencia: boolean = false;

  territorios: any = [];
  todoMundo: boolean = false;
  latinoAmerica: boolean = false;
  argentina: boolean = false;
  bolivia: boolean = false;
  brasil: boolean = false;
  chile: boolean = false;
  ecuador: boolean = false;
  paraguay: boolean = false;
  peru: boolean = false;
  uruguay: boolean = false;
  centroAmerica: boolean = false;
  americaNorte: boolean = false;
  europa: boolean = false;
  europaEste: boolean = false;
  europaNorte: boolean = false;
  europaOeste: boolean = false;
  asia: boolean = false;
  oriente: boolean = false;
  oceania: boolean = false;
  africa: boolean = false;
  africaSur: boolean = false;
  africaNorte: boolean = false;  

  cantidad: string ="";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public firebaseProvider:FirebaseProvider,
							public alertCtrl: AlertController,  
              public loadingCtrl: LoadingController) {
    storage.get('email').then((email) => {	
      this.email= email; 
    })
    storage.get('nombre').then((nombre) => {	
      this.nombre= nombre;
    })
    storage.get('empresa').then((empresa) => {	
      this.empresa = empresa;
    })
  }

	showAlert(message,title) {
		let alert = this.alertCtrl.create({
		title: title,
		subTitle: message,
		buttons: ['OK']
		});
		alert.present();
	}

  save(){
		console.log(this.medio);

		let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
		  this.email = this.email.toLowerCase();
		this.firebaseProvider.setCotizacion(
			this.email,
      this.nombre,
      this.empresa,
      this.cliente,
      this.campania,
      this.medio,
      this.licencia,
      this.territorios,
      this.cantidad
		)

		loader.dismiss();
		this.showAlert("Sus datos se enviaron con exito","Perfecto");
    this.navCtrl.setRoot(this.listen);
	}

  removeItemFromArr ( arr, item ) {
 	   var i = arr.indexOf( item );		
     arr.splice( i, 1 );
	}

  territorio(pro){
    if(pro=="Todo el mundo"){
			if(!this.todoMundo){
				this.territorios.push(pro);				
				this.todoMundo = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.todoMundo = false;				
			}
		}
    if(pro=="LatinoAmerica"){
			if(!this.latinoAmerica){
				this.territorios.push(pro);				
				this.latinoAmerica = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.latinoAmerica = false;				
			}
		}
    if(pro=="Argentina"){
			if(!this.argentina){
				this.territorios.push(pro);				
				this.argentina = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.argentina = false;				
			}
		}
    if(pro=="Bolivia"){
			if(!this.bolivia){
				this.territorios.push(pro);				
				this.bolivia = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.bolivia = false;				
			}
		}
    if(pro=="Brasil"){
			if(!this.brasil){
				this.territorios.push(pro);				
				this.brasil = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.brasil = false;				
			}
		}
    if(pro=="Chile"){
			if(!this.chile){
				this.territorios.push(pro);				
				this.chile = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.chile = false;				
			}
		}
    if(pro=="Ecuador"){
			if(!this.ecuador){
				this.territorios.push(pro);				
				this.ecuador = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.ecuador = false;				
			}
		}
    if(pro=="Paraguay"){
			if(!this.paraguay){
				this.territorios.push(pro);				
				this.paraguay = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.paraguay = false;				
			}
		}
    if(pro=="Peru"){
			if(!this.peru){
				this.territorios.push(pro);				
				this.peru = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.peru = false;				
			}
		}
    if(pro=="Uruguay"){
			if(!this.uruguay){
				this.territorios.push(pro);				
				this.uruguay = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.uruguay = false;				
			}
		}
    if(pro=="Centro America y el Caribe"){
			if(!this.centroAmerica){
				this.territorios.push(pro);				
				this.centroAmerica = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.centroAmerica = false;				
			}
		}
    if(pro=="America del Norte"){
			if(!this.americaNorte){
				this.territorios.push(pro);				
				this.americaNorte = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.americaNorte = false;				
			}
		}
    if(pro=="Toda Europa"){
			if(!this.europa){
				this.territorios.push(pro);				
				this.europa = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.europa = false;				
			}
		}
    if(pro=="Europa del este"){
			if(!this.europaEste){
				this.territorios.push(pro);				
				this.europaEste = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.europaEste = false;				
			}
		}
    if(pro=="Europa del Norte"){
			if(!this.europaNorte){
				this.territorios.push(pro);				
				this.europaNorte = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.europaNorte = false;				
			}
		}
    if(pro=="Europa del Oeste"){
			if(!this.europaOeste){
				this.territorios.push(pro);				
				this.europaOeste = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.europaOeste = false;				
			}
		}
    if(pro=="Asia"){
			if(!this.asia){
				this.territorios.push(pro);				
				this.asia = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.asia = false;				
			}
		}
    if(pro=="Medio Oriente Peninsula Arabiga"){
			if(!this.oriente){
				this.territorios.push(pro);				
				this.oriente = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.oriente = false;				
			}
		}
    if(pro=="Oceania"){
			if(!this.oceania){
				this.territorios.push(pro);				
				this.oceania = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.oceania = false;				
			}
		}
    if(pro=="Todo Africa"){
			if(!this.africa){
				this.territorios.push(pro);				
				this.africa = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.africa = false;				
			}
		}
    if(pro=="Africa del Sur"){
			if(!this.africaSur){
				this.territorios.push(pro);				
				this.africaSur = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.africaSur = false;				
			}
		}
    if(pro=="Africa del Norte"){
			if(!this.africaNorte){
				this.territorios.push(pro);				
				this.africaNorte = true;				
			}else{								
				this.removeItemFromArr( this.territorios, pro );	
				this.africaNorte = false;				
			}
		}
  }

  licencias(pro){
    if(pro=="Tres meses"){
			if(!this.tres){
				this.licencia.push(pro);				
				this.tres = true;				
			}else{								
				this.removeItemFromArr( this.licencia, pro );	
				this.tres = false;				
			}
		}
    if(pro=="Seis meses"){
			if(!this.seis){
				this.licencia.push(pro);				
				this.seis = true;				
			}else{								
				this.removeItemFromArr( this.licencia, pro );	
				this.seis = false;				
			}
		}
    if(pro=="Doce meses"){
			if(!this.doce){
				this.licencia.push(pro);				
				this.doce = true;				
			}else{								
				this.removeItemFromArr( this.licencia, pro );	
				this.doce = false;				
			}
		}
    if(pro=="Otros"){
			if(!this.otrosLicencia){
				this.licencia.push(pro);				
				this.otrosLicencia = true;				
			}else{								
				this.removeItemFromArr( this.licencia, pro );	
				this.otrosLicencia = false;				
			}
		}
  }

  medios(pro){
    if(pro=="TV"){
			if(!this.tv){
				this.medio.push(pro);				
				this.tv = true;				
			}else{								
				this.removeItemFromArr( this.medio, pro );	
				this.tv = false;				
			}
		}
		if(pro=="Radio"){
			if(!this.radio){
				this.medio.push(pro);
				this.radio = true;
			}
			else{				
				this.removeItemFromArr( this.medio, pro );	
				this.radio = false;	
			}
		}	
		if(pro=="Cine"){
			if(!this.cine){
				this.medio.push(pro);
				this.cine = true;
			}else{
				this.removeItemFromArr( this.medio, pro );
				this.cine = false;
			}
		}	
		if(pro=="Internet"){
			if(!this.internet){
				this.medio.push(pro);
				this.internet = true;
			}else{
				this.removeItemFromArr( this.medio, pro );	
				this.internet = false;
			}
		}		
    if(pro=="Todos los medios"){
			if(!this.todos){
				this.medio.push(pro);
				this.todos = true;
			}else{
				this.removeItemFromArr( this.medio, pro );	
				this.todos = false;
			}
		}		
    if(pro=="Otros"){
			if(!this.otros){
				this.medio.push(pro);
				this.otros = true;
			}else{
				this.removeItemFromArr( this.medio, pro );	
				this.otros = false;
			}
		}		
  }

}
