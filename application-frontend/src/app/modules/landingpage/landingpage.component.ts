import { Component } from '@angular/core';
import { DataService1 } from './services/data.service';

@Component({
  selector: 'landing-app-root',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingComponent {
  constructor(private dataservice:DataService1){
    this.dataservice.changeShows();
  }
  title = 'showFirstPage';
}
