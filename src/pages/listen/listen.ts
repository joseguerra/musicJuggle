import * as crypto from 'crypto';
import * as utf8 from 'utf8';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Song } from '../song/song';
import { MediaPlugin} from '@ionic-native/media';
import { ListenProvider } from '../listen/listen.provider';
import { SearchResults } from '../search-results/search-results';
import { Transfer } from '@ionic-native/transfer';
import { File, FileEntry } from '@ionic-native/file';
import { Platform } from 'ionic-angular';




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
	
	fileName = 'audio';
	extension = null;

  	signature: string;
  	timestamp: any; 
  	song =  Song;		
  	searchResults = SearchResults; 
  	base64: any;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public alertCtrl: AlertController, 
				public media: MediaPlugin,
				public listen: ListenProvider,
				public plt: Platform,
				private transfer: Transfer, 
				private file: File) {
	}

	
	ionViewDidEnter() { 			
      this.timestamp = Math.floor(Date.now() / 1000);    
      var stringToSign = this.buildStringToSign(this.listen.post,
																								this.listen.endpoint,
																								this.listen.access_key,
																								this.listen.data_type,
																								this.listen.signature_version,
																								this.timestamp);                  
      this.signature = this.sign(stringToSign,this.listen.accessSecret);                

  }
  

  	recordAudio(){
		var path = null;
		var file_name = "new2";
		var file_extension = null;

	    if(this.plt.is('ios')){

	        file_extension = ".wav";
	        path = this.file.tempDirectory;
	    
	    }else{
	        file_extension = ".aac";
	        path = this.file.externalRootDirectory;
	    }

	    this.file.createFile(path, file_name + file_extension, true).then((fileEntry) => {

	    	console.log(fileEntry);
	    	console.log(fileEntry.toURL());

	    	var audio = this.media.create(fileEntry.toURL()	);

	    	audio.startRecord();

			window.setTimeout(() => {
			  
				audio.stopRecord();


				this.uploadAudio(fileEntry.toURL());

			}, 10000);	    	

	    });
  	}


	private uploadAudio(imageFileUri: any): void {

		this.file.resolveLocalFilesystemUrl(imageFileUri)
		  .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
		  .catch(err => console.log(err));
	}



	private readFile(file: any) {
		const reader = new FileReader();
		reader.onloadend = () => {
		  const formData = new FormData();
		  const imgBlob = new Blob([reader.result], {type: file.type});
		  
		  formData.append('sample', imgBlob, file.name);
		  formData.append('access_key', this.listen.access_key);
		  formData.append('data_type', this.listen.data_type);
		  formData.append('signature_version', this.listen.signature_version);
		  formData.append('signature', this.signature);
		  formData.append('sample_bytes', 100000);
		  formData.append('timestamp', this.timestamp);

		  this.postData(formData);
		};
		reader.readAsArrayBuffer(file);
	}

	private postData(formData: FormData) {
		this.listen.postData(formData).subscribe(
      data => {    				
				this.navCtrl.push(this.song, {'id':null,'data':data}); 				
      },
      err => {        
        console.log(err);        
      }
    );
	}

	showAlert(message,title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



	buildStringToSign(method, uri, accessKey, dataType, signatureVersion, timestamp) {
		return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
	}

  
	sign(signString, accessSecret) {
		return crypto.createHmac('sha1', accessSecret)
		  .update(utf8.encode(signString))
		  .digest().toString('base64');
	}

	search(query){		
		var query = query.srcElement.value;
		this.navCtrl.push(this.searchResults, {'query':query});
	}

}