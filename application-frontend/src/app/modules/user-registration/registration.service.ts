import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { UserType } from './user';

const httpOptions = {
  headers: new HttpHeaders (
    {
      'Content-Type':'application/json'
    }
  )
}


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url ="https://eventplatform-zuul.stackroute.in/user-registration-service/api/v1/saveuser";
  urluser ="https://eventplatform-zuul.stackroute.in/user-registration-service/api/v1/user/";
 updateuser ="https://eventplatform-zuul.stackroute.in/user-registration-service/api/v1/update/";

  constructor(private httpClient:HttpClient) { }
  saveUserDetails( user): Observable<any>
  {
    return this.httpClient.post(this.url,user,httpOptions)
  }

  getUserDetails(email: string): Observable<any>
  {
    return this.httpClient.get(this.urluser + email);
  }

  updateUserDetails(email: string, user): Observable<any>
  {
    return this.httpClient.put(this.updateuser+email,user);
  }
}
