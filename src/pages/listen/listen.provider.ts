import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Clinic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListenProvider {
  post: string = 'POST';
  endpoint: string = '/v1/identify';
  access_key: string = 'deba701c2c72ea868c42f8a1123679e8';
  data_type: string = 'audio';
  signature_version: string = '1';
  accessSecret: string = 'B28eWQZuf3DliA8XwIBAYNIQJOVKMYPUuDabufhv';
  host: string = 'identify-us-west-2.acrcloud.com';
  sample_bytes: string = '100';
  constructor(public http: Http) {
    console.log('Hello Clinic Provider');
  }

   postData(formData: FormData){      
      var url = "http://"+this.host+this.endpoint;
      var response = this.http.post(url,formData).map(res => res.json());
      return response;
  }
  

}
