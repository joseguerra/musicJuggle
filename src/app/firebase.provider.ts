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

  constructor(private af: AngularFire) {    
  }
  
  getTopTen(){
    
    this.song = this.af.database.list('/top10') as FirebaseListObservable<any[]>;            
    return this.song;
  }

  getRecomendations(){
      this.song = this.af.database.list('/recomendadas') as FirebaseListObservable<any[]>;
      return this.song;  
  }

   
  

}
