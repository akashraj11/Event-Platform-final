import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rsvp } from '../domains/rsvp';
import { Host } from '../domains/host';

@Injectable({
  providedIn: 'root'
})
export class RsvpInputService {

  private url="https://eventplatform-zuul.stackroute.in/rsvp-service/api/v1/rsvpProducer";
  constructor(private http:HttpClient) { }
  getRSVP():Observable<Host[]>
  {
    return this.http.get<Host[]>(this.url);
  }
  
  getProducer(email:string)
  {
    let getUrl=`${this.url}/${email}`;
    return this.http.get<Host>(getUrl);
  }

  addHost(host:Host)
  {
    console.log("Add Host")
     this.http.post(this.url,host).subscribe((data)=>
     {console.log("host",data)},
     (error)=>{
       console.log("host error",error);
     });
  }

  addEvent(email:string,event:Rsvp)
  {
    let add="event";
    const putUrl=`${this.url}/${add}/${email}`;
    this.http.put(putUrl,event).subscribe((data)=>
    {
      console.log(data);
    },
    (error)=>{
      console.log(error);
    });
  }

  deleteEvent(email:string,id:number)
  {
    const deleteUrl=`${this.url}/${email}/${id}`;
    this.http.delete(deleteUrl).subscribe((data)=>
    {
      console.log(data);
      
    },
    (error)=>{
      console.log(error);
    });
  }

  rsvpResponse(email:string,producer:Host)
  {
    const updateUrl=`${this.url}/${email}`;
    this.http.put(updateUrl,producer).subscribe((data)=>
    {
      console.log(data);
      
    },
    (error)=>{
      console.log(error);
    });
  }
}
