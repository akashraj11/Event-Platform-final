import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from '../loginauthentication/services/authenticationservice.service';
import { DataService1 } from '../landingpage/services/data.service';

@Component({
  selector: 'app-theatreFrontend-root',
  templateUrl: './theatreFrontend.component.html',
  styleUrls: ['./theatreFrontend.component.css']
})



export class TheatreFrontendComponent {
  title = 'TheatreFrontend';
  public value = 0;
  constructor( private router: Router,private authservice: AuthenticationserviceService,private cityData:DataService1) { }
  

    
}
