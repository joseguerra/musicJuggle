import * as crypto from 'crypto';
import * as utf8 from 'utf8';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../song/song';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { ListenProvider } from '../listen/listen.provider';
import { SearchResults } from '../search-results/search-results';


/**
 * Generated class for the Listen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listen',
  templateUrl: 'listen.html',
})
export class Listen {
	
	file: MediaObject = this.media.create("myrecording.mp3");
  	signature: string;
  	timestamp: any; 
  	song =  Song;		
  	searchResults = SearchResults; 
	
	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public media: MediaPlugin,
				public listen: ListenProvider) {
	}

	
	ionViewDidEnter() {    
      var current_data = new Date();
      this.timestamp = current_data.getTime()/1000;    

      var stringToSign = this.buildStringToSign('POST','/v1/identify',
      '3291ad69822f88e477bd738467abb585',
      'audio',
      '1',
      this.timestamp);
      console.log(this.timestamp)
      this.signature = this.sign(stringToSign,'YC4WKh844XDjbZutXsvvmiNDqW81ZVTIHspLYdxB');    
      console.log(this.signature)
  }
  

   buildStringToSign(method, uri, accessKey, dataType, signatureVersion, timestamp) {
    return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
  }

  
  sign(signString, accessSecret) {
    return crypto.createHmac('sha1', accessSecret)
      .update(utf8.encode(signString))
      .digest().toString('base64');
  }
  

  openSong(){
  	   this.file.startRecord();
	    window.setTimeout(() => {
	      this.file.stopRecord();

	      var formData = {    
		      sample:this.file,
		      access_key:'3291ad69822f88e477bd738467abb585',
		      data_type:'audio',
		      signature_version:1,
		      signature:this.signature,
		      sample_bytes:1,
		      timestamp:this.timestamp,
		    }

		    this.listen.register(formData).subscribe(
		      data => {                        
						console.log(data);
		      },
		      err => {        
		        console.log(err);     
		      }
		    );

	  }, 10000);
  }


	search(query){

		var query = query.srcElement.value;

		this.navCtrl.push(this.searchResults, {'query':query});
	}

}