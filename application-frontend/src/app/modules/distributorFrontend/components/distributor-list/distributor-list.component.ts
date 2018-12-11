import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DistributorService } from '../../services/distributor.service';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.css']
})
export class DistributorListComponent implements OnInit {

  distributors=[];


  constructor(private router:Router,private route:ActivatedRoute,private data:DataService,private distributorService:DistributorService){}

  getDistributor(serach:string)
  {
    // this.data.changeDistributor(serach);
    // this.data.changeDistributors();
    this.router.navigate([serach],{relativeTo:this.route});
     
  }
  ngOnInit() {
    this.distributorService.getDistributors().subscribe((data)=>{
      this.distributors=data;
    });

  }

}
