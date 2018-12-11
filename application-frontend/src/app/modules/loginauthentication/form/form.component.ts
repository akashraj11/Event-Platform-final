import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationserviceService} from '../services/authenticationservice.service'
import { User } from '../user';
import { CoreDataService } from 'src/app/services/data.service';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSnackBar } from '@angular/material';
import { DataService1 } from '../../landingpage/services/data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userData:User;
  cityName:string;
  public snackbar: MatSnackBar;
  email: string ="Unauthorized User";
  loginToken: AuthToken; 
  constructor(private router:Router,
    private authservice: AuthenticationserviceService,
    private coreService: CoreDataService,
    private cityData:DataService1,
    private sharedMail: SharedModule) { }

  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      this.sharedMail.changeMail(this.email);
      }
      catch(error){
        console.log(error);
      }
    console.log('email is',this.email);
    if(this.email != "Unauthorized User"){
      console.log("inside",this.email);
      this.authservice.getLoginUser(this.email).subscribe((data: User) => {
        this.userData= data;
        //console.log("username is",username);
        console.log("authUserData",this.userData);
  
        
        if(this.userData.role == "producer"){
          this.router.navigate([
            'theatre'
          ] );
        }
        if(this.userData.role == "distributor"){
          this.router.navigate([
            'distributors','distributors',this.email
          ] );
        }
        if(this.userData.role == "consumer"){
          this.cityData.currentCity.subscribe((data)=>
          {this.cityName=data});
          console.log('routing depending on consumer');
          this.router.navigate([
            'landing/show',this.cityName
          ] );      
        }
       });

    }
    
  }
  loginUser(e)
  {
    e.preventDefault();
    console.log("check",e);

    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username+" "+password);
    this.authservice.login(username,password);
    
    this.authservice.getLoginUser(username).subscribe((data: User) => {
      this.userData= data;
      //console.log("username is",username);
      console.log("authUserData",this.userData);
      
      if(this.userData.role == "producer"){
        this.router.navigate([
          'theatre'
        ] );
        window.location.reload();
      }
      if(this.userData.role == "distributor"){
        this.router.navigate([
          'distributors','distributors',username
        ] );
        window.location.reload();
      }
      if(this.userData.role == "consumer"){
        this.cityData.currentCity.subscribe((data)=>
        {this.cityName=data});
        console.log('routing depending on consumer');
        this.router.navigate([
          'landing/show',this.cityName
        ] );
        window.location.reload();
      }
      // if(this.userData.role == "consumer" || this.userData.role == "distributor" || this.userData.role == "producer"){
      //   this.snackbar.open('Please Check Your Credentials!', 'Close', {
      //     duration: 3000,
      //   });
      // } 
     },
     (error)=>{
        this.snackbar.open('Please Check Your Credentials!', 'Close', {
          duration: 3000,
        });
     });
     console.log('routing depending on role');
  }

}
