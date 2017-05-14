import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
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
  access_key: string = '3291ad69822f88e477bd738467abb585';
  data_type: string = 'audio';
  signature_version: string = '1';
  accessSecret: string = 'YC4WKh844XDjbZutXsvvmiNDqW81ZVTIHspLYdxB';
  host: string = 'identify-us-west-2.acrcloud.com';
  constructor(public http: Http) {
    console.log('Hello Clinic Provider');
  }

   postData(formData: FormData){      
      var url = "http://"+this.host+this.endpoint;
      var response = this.http.post(url,formData).map(res => res.json());
      return response;
  }
  

}
