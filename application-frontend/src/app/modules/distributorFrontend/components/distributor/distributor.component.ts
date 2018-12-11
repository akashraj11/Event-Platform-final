import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IDistributor } from '../../domains/Distributor';
import { ICity } from '../../domains/City';
import { DistributorService } from '../../services/distributor.service';
import { DataService } from '../../services/data.service';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken'

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');
  producerToken: AuthToken; 
  distributors=[];
  email: string;
  distributor: IDistributor = {
    "email": "default",
    "cities": []
  };
  public cities = [];
  city: ICity = { "cityName": "default", "movies": [] };
  cityList=[  
    "Bangalore","Delhi" , "Hyderabad" , "Mumbai" ,"Chennai" , 
   "Guwahati" , "Kochi", "Pune", "Gurugram", "Ahmedabad" , 
   "Goa" , "Srinagar" , "Gudgoan", "Dehradun" ];
   cityVal:string;
  @Input('parentData') public search;

  constructor(private router: Router, 
    private route: ActivatedRoute,
     private distributorService: DistributorService, 
     private data: DataService,
    private coreService: CoreDataService) {
    console.log("constructor loaded");

  }

  ngOnInit() {
    
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.producerToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.producerToken.sub;
      }
      catch(error){
        console.log(error);
      }
    console.log("distributor component loaded");

    this.route.paramMap.subscribe((params: ParamMap) => {
      // let emailId = params.get('mailId');
      this.data.currentDistributors.subscribe((data) => {
        this.distributors = data;
        for(let i of this.distributors)
        {
           if(i.email==this.email)
             {this.distributor=i;}
       }
      this.cities = this.distributor.cities;
      });
    });
    


  }

  addCity(cityName) {
    console.log("add city in component");
    this.city.cityName = this.cityVal;
    this.distributorService.addCity(this.email, this.city);
    // location.reload(true);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      window.location.reload();
   }, 1000);
  }


  getCity(search: string) {
 
    this.router.navigate([search], { relativeTo: this.route });
  }

}

