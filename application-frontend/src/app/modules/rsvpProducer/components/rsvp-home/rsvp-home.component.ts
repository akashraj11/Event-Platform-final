import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Host } from '../../domains/host';
import { RsvpInputService } from '../../services/rsvp-input.service';
import { RsvpDataService } from '../../services/rsvp-data.service';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-rsvp-home',
  templateUrl: './rsvp-home.component.html',
  styleUrls: ['./rsvp-home.component.css']
})
export class RsvpHomeComponent implements OnInit {
  emailtest:string ="rsvpuser";
  tokenObtained = localStorage.getItem('currentUser');
  loginToken: AuthToken; 
  hosts=[];
  host:Host;
  events=[];
  hostFlag=0;
  hostTemp:Host={
    "email":'',
    "events":[]
  }
  email="rsvpEventProducer15@gmail.com";
  constructor(private route:ActivatedRoute,private router:Router,private input:RsvpInputService,private data:RsvpDataService) { }

  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.emailtest=this.loginToken.sub;
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }

        
    if(this.emailtest =="rsvpuser"){
        this.router.navigate([
          'login'
        ] );
    }

    this.route.paramMap.subscribe((params:ParamMap)=>
    {
     
      this.data.changeHosts();
      this.data.currentHosts.subscribe((data)=>{
        this.hosts=data;
        console.log("hosts",this.hosts);
        for(let i of this.hosts)
        {
           if(i.email==this.email)
             {this.host=i;
              this.events=this.host["events"];
              this.hostFlag=1;
            }     
       }
       if(this.hostFlag==0)
       {
        console.log("host flag"+this.hostFlag);
        this.hostTemp.email=this.email;
        this.input.addHost(this.hostTemp);
       }
       console.log("events",this.events);
      },
      (error)=>{
        console.log("error");
      })

    });
  }
getDetails(id:string)
{
this.router.navigate(['rsvpEvent',id]);
}
addRsvp()
{
  this.router.navigate(['rsvpEvent','rsvp','addNewRsvp']);
}
}
