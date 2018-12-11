import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {default as jwt_decode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
  
})
export class AuthenticationserviceService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string)
  {
 
    console.log(username);
    return this.http.post<any>('https://eventplatform-zuul.stackroute.in/user-authentication-service/user/login',{"userId":username,"password":password})
    .subscribe((data)=>{
      console.log('data in service: token obtained',data);
      localStorage.clear();
      localStorage.setItem('currentUser',data.token);
      try{
      const tokenObtained = localStorage.getItem('currentUser');
      jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      }
      catch(error){
        console.log(error);
      }
    },
    (error)=>{console.log(error)});
  }
  logout()
  {
    localStorage.removeItem('currentUser');
  }

  getLoginUser(email: string) {
    console.log('login details');
    const geturl = `https://eventplatform-zuul.stackroute.in/user-authentication-service/user/userId/${email}`;
    this.http.get(geturl).subscribe(
      data => {
        console.log('authenticated and got user',data);
      },
      error => {
        console.log('Error', error);
      });
    return this.http.get(geturl);
  }
}
 