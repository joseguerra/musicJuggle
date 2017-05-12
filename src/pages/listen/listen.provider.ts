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

  constructor(public http: Http) {
    console.log('Hello Clinic Provider');
  }

   register(params){      

    var formData = new FormData();
    formData.append("sample", params.sample);
    formData.append("access_key", params.access_key);
    formData.append("data_type", 'audio');
    formData.append("signature_version", 1);
    formData.append("signature", params.signature);
    formData.append("sample_bytes", 100000);
    formData.append("timestamp",params.timestamp);

      var url = "http://identify-us-west-2.acrcloud.com/v1/identify";
      var response = this.http.post(url,formData).map(res => res.json());
      return response;
  }

}
