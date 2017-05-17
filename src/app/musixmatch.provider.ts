import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Clinic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MusixmatchProvider {
  apiKey:string = "e7be56a0b0efa43a994299f3adaea733";

  constructor(public http: Http) {    
  }
  
  getSong(artist,song){
    var url = "http://api.musixmatch.com/ws/1.1/track.search?apikey="+this.apiKey+"&q_artist="+artist+"&page=1&q_track="+song;
      var response = this.http.get(url).map(res => res.json());
      return response;
   
  }

  getLyrics(track_id){
    var url = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey="+this.apiKey+"&track_id="+track_id;
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

   
  

}
