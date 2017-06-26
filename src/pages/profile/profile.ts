import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SelectPlan } from '../select-plan/select-plan';
import {FirebaseProvider} from '../../app/firebase.provider';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

	selectPlan =  SelectPlan;
	
	av: boolean = false;
	tv: boolean = false;
	films: boolean = false;
	radio: boolean = false;

	apellido: string;
	email:string;
	empresa: string;	
	nombre: string;	
	otros: string;
	pais: string;	
	plan: string;
	producciones: any;
	puesto: string;	
	reproducciones: string;
	telefono: string;
	uso: string;				
	key: string;
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public firebaseProvider:FirebaseProvider,
				public loadingCtrl: LoadingController,
				public storage: Storage) {		
		
		let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();

		storage.get('email').then((email) => {			
			email = email.toLowerCase();
			console.log(email)
			this.firebaseProvider.getProfile(email).subscribe(profile =>{
				console.log(profile);	
				this.storage.set('email', profile[0].email);			  				
				this.storage.set('nombre', profile[0].nombre);			  				
				this.storage.set('empresa', profile[0].empresa);			  				
				this.apellido = profile[0].apellido;
				this.email = profile[0].email;
				this.empresa = profile[0].empresa;
				this.nombre = profile[0].nombre;
				this.otros = profile[0].otros;
				this.pais = profile[0].pais;
				if(navParams.get("plan"))
					this.plan  = navParams.get("plan");
				else					
					this.plan = profile[0].plan;
				if(!profile[0].producciones)
					this.producciones = [];
				else{
					this.producciones = profile[0].producciones;
					for(var i = 0;i<this.producciones.length;i++){
						for(var j = 0;j<this.producciones.length;j++){
							if(this.producciones[i]=="AV producciones"){
								this.av = true;
								console.log(this.av)
							}
							if(this.producciones[i]=="TV producciones"){
								this.tv = true;
							}
							if(this.producciones[i]=="Films"){
								this.films = true;
							}
							if(this.producciones[i]=="Radio"){
								this.radio = true;
							}
						}						
					}
				}
				
				this.puesto = profile[0].puesto;				
				this.reproducciones = profile[0].reproducciones;								
				this.telefono = profile[0].telefono;
				this.uso = profile[0].uso;
				this.key = profile[0].$key;
				loader.dismiss();                
				console.log(profile)  
			},
			err=>{
			loader.dismiss();		
			});
		})

		
		console.log("plan: ", this.plan)




	}

	ionViewDidLoad() {

	}

	removeItemFromArr ( arr, item ) {
 	   var i = arr.indexOf( item );		
    	arr.splice( i, 1 );
	}

	cambio(pro){		
		if(pro=="AV producciones"){
			if(!this.av){
				this.producciones.push(pro);				
				this.av = true;				
			}else{								
				this.removeItemFromArr( this.producciones, pro );	
				this.av = false;				
			}
		}
		if(pro=="TV producciones"){
			if(!this.tv){
				this.producciones.push(pro);
				this.tv = true;
			}
			else{				
				this.removeItemFromArr( this.producciones, pro );	
				this.tv = false;	
			}
		}	
		if(pro=="Films"){
			if(!this.films){
				this.producciones.push(pro);
				this.films = true;
			}else{
				this.removeItemFromArr( this.producciones, pro );
				this.films = false;
			}
		}	
		if(pro=="Radio"){
			if(!this.radio){
				this.producciones.push(pro);
				this.radio = true;
			}else{
				this.removeItemFromArr( this.producciones, pro );	
				this.radio = false;
			}
		}						
	}

	save(){
		console.log(this.producciones);

		let loader = this.loadingCtrl.create({
        	content: 'Please wait...'			
      	})
      	loader.present();
		  this.email = this.email.toLowerCase();
		this.firebaseProvider.updateProfile(
			this.apellido,
			this.email,
			this.empresa,
			this.nombre,	
			this.otros,
			this.pais,	
			this.plan,
			this.producciones,
			this.puesto,	
			this.reproducciones,
			this.telefono,
			this.uso,			
			this.key
		)

		loader.dismiss();
	}



	onSelectPlan(id){
		console.log('onSelectPlan');
		
		this.navCtrl.push(this.selectPlan, {'id':id});
	}

}