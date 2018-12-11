import { Component, OnInit, Host } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Rsvp } from '../../domains/rsvp';
import { RsvpDataService } from '../../services/rsvp-data.service';
import { RsvpInputService } from '../../services/rsvp-input.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-rsvp-details',
  templateUrl: './rsvp-details.component.html',
  styleUrls: ['./rsvp-details.component.css']
})
export class RsvpDetailsComponent implements OnInit {
id:string;
hosts=[];
host:Host;
events=[];
loginToken: AuthToken; 
email: string;
event:Rsvp={
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
};
  constructor(private route:ActivatedRoute,
    private data:RsvpDataService,
    private input:RsvpInputService,
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
   this.route.paramMap.subscribe((params:ParamMap)=>
   {
     this.id=params.get('id');
     this.route.paramMap.subscribe((params:ParamMap)=>
     {
       this.data.currentHosts.subscribe((data)=>{
         this.hosts=data;
         console.log("hosts",this.hosts);
         for(let i of this.hosts)
         {
            if(i.email==this.email)
              {this.host=i;
               this.events=this.host["events"];
             }
        }
        console.log("events",this.events);
        for(let i of this.events)
        {
           if(i.id==this.id)
             {
              this.event=i;
            }
       }
       },
       (error)=>{
         console.log("error");
       })
 
     });
   })
  
  }
  
  deleteEvent()
  {
    this.dialogService.openConfirmDialog("Are you sure you want to delete this Event??").afterClosed()
    .subscribe(result=>{
      if(result)
      {
        this.input.deleteEvent(this.email, this.event.id);
        setTimeout (() => {
          console.log("Hello from setTimeout");
          window.location.reload();
          this.router.navigate(["rsvpEvent"]);
       }, 1000);

      }
    })
   
    }





}
