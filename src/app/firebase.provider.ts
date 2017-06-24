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
    
      this.profile = this.af.database.list('/user',{
        query: {
          orderByChild: 'email',
          equalTo: email        
        }
      }) as FirebaseListObservable<any[]>;      
      return this.profile;  
  }

  setProfile(name,email,company){
      const itemObservable = this.af.database.list('/user');
      itemObservable.push({ 
        name: name,
        fullName: "",
        email: email,
        phone: "",
        country: "",
        company: company,
        work: "", 
      })
  }

  updateProfile(name,fullName,email,phone,country,company,work,key){


      const itemObservable = this.af.database.list('/user');
      itemObservable.update(key,{ 
        name: name,
        fullName: fullName,
        email: email,
        phone: phone,
        country: country,
        company: company,
        work: work,                
      }).then(data=>{
        return data;
      })
  }
}
