import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor (private http: Http) {}

  sendCredential(username: string, password: string) {
    let url = "http://obstest1.herokuapp.com/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  logout() {
     let url = "http://obstest1.herokuapp.com/logout";
     return this.http.get(url, { withCredentials: true });
   }

}
