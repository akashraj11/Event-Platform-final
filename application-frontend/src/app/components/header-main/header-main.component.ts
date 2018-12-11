import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Router } from '@angular/router';
import { DataService1 } from '../../modules/landingpage/services/data.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationserviceService } from '../../modules/loginauthentication/services/authenticationservice.service';
import { User } from '../../modules/loginauthentication/user';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');
  tokenLogin: AuthToken; 
  userData:User;
  email :string= this.sharedMaill.getDataSharedMail();
  role: string = "consumer";
  constructor(private router:Router,
    private cityData:DataService1,
    private sharedMaill:SharedModule,
    private authservice: AuthenticationserviceService) { }
  cityName: string;
  ngOnInit() {
    try{
      console.log('user status',this.email);
      const tokenObtained = localStorage.getItem('currentUser');
      this.tokenLogin=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      console.log('tokenlogin',this.tokenLogin);
      this.email=this.tokenLogin.sub;
      console.log('user status 2',this.email);
      }
      catch(error){
        console.log(error);
      }
  }


  logoutClicked(){
    try{
      console.log('user status',this.email);
      const tokenObtained = localStorage.getItem('currentUser');
      this.tokenLogin=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      console.log('tokenlogin',this.tokenLogin);
      this.role=this.tokenLogin.role;
      console.log('user status 2',this.email);
      }
      catch(error){
        console.log(error);
      }
    localStorage.removeItem('currentUser');
    console.log('LoggedOut'); 

      if(this.role == "consumer"){
        this.cityData.currentCity.subscribe((data)=>
        {this.cityName=data;
        console.log(this.cityName);
        });   
      this.router.navigate([
          'landing/show',this.cityName
      ] );
      window.location.reload();    
      }  
      if(this.role == "producer"){
      this.router.navigate([
          'landing/show','Bangalore'
      ] );
      window.location.reload();    
      } 
      if(this.role == "distributor"){
      this.router.navigate([
          'landing/show','Bangalore'
      ] );
      window.location.reload();    
      } 
  }


  home()
  {
    this.cityData.currentCity.subscribe((data)=>
    {this.cityName=data});
    this.router.navigate([
      'landing/show',this.cityName
    ] );

    if(this.email != "Unauthorized User"){
      
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
        // else{
        //   window.alert('PLEASE CHECH YOUR CREDENTIALS');
        // } 
       });

    }
  }

}
