import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective, NgForm, Validators, FormControl } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { CoreDataService } from 'src/app/services/data.service';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";
import { ReccomendationService } from 'src/app/services/reccomendation.service';
import { User } from '../../loginauthentication/user';
import { AuthenticationserviceService } from '../../loginauthentication/services/authenticationservice.service';
import { DataService1 } from '../../landingpage/services/data.service';
import { generate } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export interface Location {
  value: string;
}
export interface Language {
  value:string;
}
export interface Genre {
  id: boolean;
  name: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [RegistrationService]
})
export class PersonalComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  userData:User;
  cityName:string;
  email: string ="Unauthorized User";
  loginToken: AuthToken; 
  isLinear = true;
  selectedLocation
  userName
  userEmail
  userPassword
  password
  confirmPassword
  userPhone_number
  genderOfUser
  userDateOfBirth = "";
  completeDetails = []
  selectGenre;
  genString;
  genStrings =[];
  gen =[];

  languages =[]
  public userDetails: FormGroup
  public stepDetails: FormGroup
  Msg;
  selectedLanguages;
  constructor(private formBuilder: FormBuilder,
    private userService: RegistrationService,
    private alerts:AlertsService,
    private router: Router,
    private authservice: AuthenticationserviceService,
    private coreService: CoreDataService,
    private cityData:DataService1,
    private recommendation:ReccomendationService) { }

  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }
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
       });
  }

    this.userDetails = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern("^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$")
      ])),
      password: new FormControl('', Validators.minLength(6)),
     
      email: new FormControl("", Validators.email),
      passwordConfirm: new FormControl('', Validators.minLength(6))
    }, {validators:passwordMatchValidator});


    function passwordMatchValidator(group: FormGroup) {

      let pass = group.controls.password.value;
      let confirmPass = group.controls.passwordConfirm.value;
  
      return pass === confirmPass ? null : { mismatch: true }


    }
//    working code 
    this.stepDetails = this.formBuilder.group(
      {
        city: new FormControl(""),
        dob: new FormControl(""),
        gender: new FormControl(""),
        phone_number: new FormControl("", Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(10),
         Validators.pattern("^[0-9]*$")

        ])),
        preferred_Languages: new FormControl("")
    
      }
    )

  }
  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" },
    { value:"Kochi"},
    { value: "Pune"},
    { value: "Gurugram"},
    { value: "Ahmedabad"} , 
    { value:"Goa" },
    { value: "Srinagar"} ,
    { value: "Gudgoan"},
    { value: "Dehradun"} 
  ]

langList :Language[]=[
{value:"English"},
{value:"Telugu"},
{value:"Hindi"},
{value:"Tamil"},
{value:"Malayalam"},
{value:"Urdu"},

  ]
  saveDetails() {
    

    var m = {
      'email': this.completeDetails[0].email,
      'name': this.completeDetails[0].name,
      'password': this.completeDetails[0].passwordConfirm,
      'city': this.completeDetails[1].city,
      'phoneNumber': this.completeDetails[1].phone_number,
      'gender': this.completeDetails[1].gender,
      'genre': this.gen,
      'language':this.selectedLanguages,
      'wishList': null
    }
    
    this.recommendation.saveUser(m).subscribe((data)=>{
      console.log('recommendation service save user');
    }
    );

    this.userService.saveUserDetails(m).subscribe(com => {
      console.log("saved");
      this.alerts.setMessage("Saved succesfully",'success');
      this.Msg = "saved successfully";
      this.router.navigate([
        'login'
      ] );
    },error=>{
      this.alerts.setMessage("User Already Exists",'error');
      this.Msg ="user already exists";
    })

    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }
    
      if(this.userEmail && this.userPassword && this.userPhone_number){
        this.router.navigate([
            'login'
        ] );
      } 

} 

  onSubmitUserDetails(value) {
    console.log(value)
    this.completeDetails.push(value)
  }
  onSubmitStepDetails(value) {
    this.completeDetails.push(value)
    console.log(this.completeDetails[1])

  }
  k
  onSubmitStep2Details(value) {
    console.log(value)
    this.gen.push(value)

    // for(this.k in this.gen)
    // {
    //   this.genStrings.push(this.k);
    //   console.log("this sd",this.k);
    // }
    // console.log(this.genStrings);
    // console.log(this.gen)

  }
  
  validation_messages = {
    'name': [
      { type: 'required', message: 'Your First name is required' },
      { type: 'pattern', message: 'First name should start with a letter and no spaces' }
    ]
  }



}

