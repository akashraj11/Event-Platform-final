import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './modules/distributorFrontend/services/data.service';
import { DataService1 } from './modules/landingpage/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
  constructor(private router:Router,
    private route:ActivatedRoute,
    private data:DataService,
    private dataService: DataService1){}

  ngOnInit() {
    this.data.changeDistributors();
    this.dataService.changeShows();
  
  }

}