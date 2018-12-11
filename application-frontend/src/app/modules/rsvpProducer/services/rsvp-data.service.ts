import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RsvpInputService } from './rsvp-input.service';
import { Host } from '../domains/host';

@Injectable({
  providedIn: 'root'
})
export class RsvpDataService {
  hosts=[];
  public hostsSource=new BehaviorSubject<Host[]>([]);
  currentHosts=this.hostsSource.asObservable();
  constructor(private input:RsvpInputService) { }
  changeHosts()
  {
    this.input.getRSVP().subscribe((data)=>{
      this.hosts=data;
      this.hostsSource.next(this.hosts);
    });

  }
}
