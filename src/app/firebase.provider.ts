import { Injectable } from '@angular/core';
import {  AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Clinic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseProvider {
  song: FirebaseListObservable<any[]>;
  profile: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire ) {    
  }
  
  getTopTen(){
    
    this.song = this.af.database.list('/top10') as FirebaseListObservable<any[]>;            
    return this.song;
  }

  getRecomendations(){
      this.song = this.af.database.list('/recomendadas') as FirebaseListObservable<any[]>;
      return this.song;  
  }

  getProfile(email){
    
      this.profile = this.af.database.list('/cuentas',{
        query: {
          orderByChild: 'email',
          equalTo: email        
        }
      }) as FirebaseListObservable<any[]>;      
      return this.profile;  
  }

  setProfile(nombre,email,empresa){
      const itemObservable = this.af.database.list('/cuentas');
      itemObservable.push({ 
        apellido: "",
        email: email,
        empresa: empresa,
        nombre: nombre,
        otros: "",
        pais: "",
        plan: "",
        producciones:"",
        puesto: "",
        reproducciones: "",
        telefono: "",                
        uso: "", 
      })
  }

  updateProfile(apellido,email,empresa,nombre,otros,pais,plan,producciones,puesto,reproducciones,telefono,uso,key){


      const itemObservable = this.af.database.list('/cuentas');
      itemObservable.update(key,{ 
        apellido: apellido,
        email: email,
        empresa: empresa,
        nombre: nombre,
        otros: otros,
        pais: pais,
        plan: plan,
        producciones:producciones,
        puesto: puesto,
        reproducciones: reproducciones,
        telefono: telefono,                
        uso: uso,              
      }).then(data=>{
        return data;
      })
  }
}
