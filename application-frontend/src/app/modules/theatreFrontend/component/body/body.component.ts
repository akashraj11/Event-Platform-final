import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theatre } from '../../domain/theatre';
import { Router } from '@angular/router';
import { ProducerService } from '../../services/producer-service';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Producer } from '../../domain/producer';
import { User } from 'src/app/modules/loginauthentication/user';
import { AuthenticationserviceService } from 'src/app/modules/loginauthentication/services/authenticationservice.service';
import { DataService1 } from 'src/app/modules/landingpage/services/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyTheatreComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');
  producerToken: AuthToken; 
  email1: string;
  producer: Producer;
  email: string ="Unauthorized User";
  loginToken: AuthToken; 
  userData:User;
  cityName:string;
  tempTheatre: Theatre ={
    theatreId: 123,
    theatreCity: "city",
    theatreAddress:"address",
    theatreName:"name",
    screenLayout: null
  };
  public value = 0;
  theatreArr;

  constructor(
    private http: HttpClient,
    private router: Router,
    private producerService: ProducerService,
    private coreService: CoreDataService,
    private authservice: AuthenticationserviceService,
    private cityData:DataService1) { }

  ngOnInit() {
    console.log('body oninit started');
      try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }

      if(this.email == "Unauthorized User"){ 
        console.log('in owner checking');
        this.cityData.currentCity.subscribe((data)=>
        {this.cityName=data});
        this.authservice.getLoginUser(this.email).subscribe((data: User) => {
          this.userData= data;
          console.log('not a theatre Owner');
          this.router.navigate([
            'landing/show',this.cityName
            ] );
         });
      }


      if(this.email != "Unauthorized User"){ 
          console.log('in owner checking');
          this.cityData.currentCity.subscribe((data)=>
          {this.cityName=data});
          this.authservice.getLoginUser(this.email).subscribe((data: User) => {
            this.userData= data;
            console.log('not a theatre Owner');
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

      this.defaultLoad();
  
  }


  defaultLoad() {
    this.producerService.getTheatreByProducerEmail(this.email).subscribe((data: Theatre[]) => {
       this.theatreArr = data;
       this.tempTheatre = this.theatreArr;
       console.log('body data', this.tempTheatre);
      });
        
  }

  onClick() {
    this.value = 1;
     console.log('getting mail successfully',this.email);
    this.router.navigate([
      'theatre/registrationform'
    ] );
  }

}
