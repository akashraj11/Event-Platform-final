import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IDistributor } from '../../domains/Distributor';
import { ICity } from '../../domains/City';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  distributors=[];
  cities=[];
  distributor: IDistributor = {
    "email": "default",
    "cities": []
  };
  city: ICity = { "cityName": "default", "movies": [] };
  email: string;
  cityName: string;
  xyz="hello mister"
  public movies = [];
  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) {
    console.log("city constructor loaded");

  }
  addMovie()
  {
    this.router.navigate(["addMovie"],{relativeTo:this.route});
  
  }

  ngOnInit() {
    console.log("city ngoninit loaded");
    console.log(this.xyz);
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId = params.get('mailId');
      let cityName = params.get('cityName');
      this.email = emailId;
      this.cityName = cityName;
      this.data.currentDistributors.subscribe((data)=>{
        this.distributors=data;
        for(let i of this.distributors)
        {
           if(i.email==this.email)
             {this.distributor=i;}
       }
       this.cities = this.distributor.cities;
       for(let i of this.cities)
        {
           if(i.cityName==this.cityName)
             {this.city=i;}
       }
       this.movies=this.city.movies;
      
      });

    });

  }

}
