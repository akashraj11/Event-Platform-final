import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private data:DataService){}

  // getMovies(serach:string)
  // {
  //   this.data.changeDistributor(serach);
  //   this.data.changeDistributors();
  //   this.router.navigate([serach],{relativeTo:this.route});
     
  // }

  ngOnInit() {
    this.data.changeDistributors();
  }

}
