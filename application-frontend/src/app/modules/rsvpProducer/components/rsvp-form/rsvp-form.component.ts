import { Component, OnInit } from '@angular/core';
import { Rsvp } from '../../domains/rsvp';
import { RsvpInputService } from '../../services/rsvp-input.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {
  loginToken: AuthToken; 
  baseUrl="https://event-platform.stackroute.in/rsvpresponse/rsvp/invitation";
  url:string;
  today:string=new Date().toString().split("GMT")[0];
  email: string;
  rsvp:Rsvp={
            "id":0,
           "eventName":'',
           "scheduledDate":'', 
           "publishDate":'',
           "eventDescription":'', 
           "eventVenue":'',
           "eventPosterUrl":'',
           "invitations":[], 
           "invitationMessage":'',
           "attending":[],
           "maybeAttending":[],
           "notAttending":[]

  }
  userEmail:string;
  msg:string;
  emailArray=[];
  date:Date;


  constructor(private input:RsvpInputService,
    private router:Router,
    private dialogService:DialogService) { }

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
  }

  addEmail()
  {
    if(this.userEmail!=null)
    this.emailArray.push(this.userEmail);
    this.userEmail=null;
  }
  onSubmit()
  {
    this.dialogService.openConfirmDialog("Confirm RSVP Details!!!!").afterClosed().subscribe(result=>
      {
        if(result)
        {
          this.rsvp.id=Math.floor((Math.random() * 100) + 1)*Math.floor((Math.random() * 100) + 1);
          this.url=`${this.baseUrl}/${this.email}/${this.rsvp.id}`;
          this.emailArray=this.userEmail.split(/[ ,]+/);
          console.log("emails",this.emailArray);
             this.rsvp.invitations=this.emailArray;
             this.rsvp.invitationMessage=this.msg+" "+"\nTo respond please click the link "+this.url;
             this.rsvp.publishDate=this.today;
             
             console.log(this.rsvp);
             this.input.addEvent(this.email,this.rsvp);
      
             setTimeout (() => {
              console.log("Hello from setTimeout");
              window.location.reload();
              this.router.navigate(["rsvpEvent"]);
           }, 1000);
        }
      });
   
      
  }
}
