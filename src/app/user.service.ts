import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class UserService {

  constructor (private http:Http){}

  getUsers() {
    let url = "http://obstest1.herokuapp.com/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }

   getPrimaryTransactionList(username: string) {
     let url = "http://obstest1.herokuapp.com/api/user/primary/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   getSavingsTransactionList(username: string) {
     let url = "http://obstest1.herokuapp.com/api/user/savings/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   enableUser (username: string) {
     let url = "http://obstest1.herokuapp.com/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://obstest1.herokuapp.com/api/user/"+username+"/disable";
     return this.http.get(url, { withCredentials: true });
   }

}
