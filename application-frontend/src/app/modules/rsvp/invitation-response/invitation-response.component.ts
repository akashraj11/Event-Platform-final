import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { RsvpDataService } from '../../rsvpProducer/services/rsvp-data.service';
import { RsvpInputService } from '../../rsvpProducer/services/rsvp-input.service';
import { error } from 'protractor';
import { Host } from '../../rsvpProducer/domains/host';
import { Rsvp } from '../../rsvpProducer/domains/rsvp';

@Component({
  selector: 'app-invitation-response',
  templateUrl: './invitation-response.component.html',
  styleUrls: ['./invitation-response.component.css']
})
export class InvitationResponseComponent implements OnInit {
  userEmail: string;
 host:Host={"email":"a","events":[]};
  hidden = true;
  disable=false;
  events=[];
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
  response: string;
  rsvpID: string;
  producerEmail:string;
  options: string[] = ['Accept with pleasure', 'Thanks, But Not Sure', 'Regretfully Decline'];

  constructor(private route: ActivatedRoute,
    private router:Router,
    private rsvpService:RsvpInputService) { }

  ngOnInit() {

  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    const email=params.get('email');
    this.rsvpID = id;
    this.producerEmail=email;
    this.rsvpService.getProducer(this.producerEmail).subscribe(
      (data)=>{
        this.host=data;
        console.log("rsvp response",this.host);
        this.events=this.host["events"];
        for(var event of this.events)
      {
        if(event.id==this.rsvpID)
        {
           this.event=event;
        }
      }
      },
      (error)=>{console.log(error)}
    )
    console.log(id);
  });

  }
  onSubmit(email: string) {
    this.userEmail=email;
   if (this.event.invitations.includes(email)&&
   (this.event.attending.includes(email)==false)&&
   (this.event.notAttending.includes(email)==false)&&
   (this.event.maybeAttending.includes(email)==false))
   {
     this.hidden=false;
   }
   else{
     window.alert("Check your email");
   }
  }

  responseFn()
  {
      for(let event of this.events)
      {
        if(event.id==this.rsvpID)
        {
             
          if(this.response=="Accept with pleasure")
          {
            event.attending.push(this.userEmail);
          }
          if(this.response=="Thanks, But Not Sure")
          {
            event.maybeAttending.push(this.userEmail);
          }
          if(this.response=="Regretfully Decline")
          {
            event.notAttending.push(this.userEmail);
          } 
        }
      }
     this.host["events"]=this.events;
     console.log("after update",this.host);
     this.rsvpService.rsvpResponse(this.producerEmail,this.host);
     this.disable=true;

    
  }

}
