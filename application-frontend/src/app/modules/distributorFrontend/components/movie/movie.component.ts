import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IDistributor } from '../../domains/Distributor';
import { IMovie } from '../../domains/Movie';
import { DataService } from '../../services/data.service';
import { ICity } from '../../domains/City';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  city: ICity = { "cityName": "n", "movies": [] };
  distributors=[];
  cities=[];
  email:string;
  cityName:string;
  movieId:number;
  distributor: IDistributor = {
    "email": "arsh",
    "cities": []
  };
  movie:IMovie= {
    "movieId": 1,
    "movieTitle": "default",
    "yearOfRelease": "2018",
    "posterUrl": "N/A",
    "ratingArray": [
        1,
        2,
        3
    ],
    "averageRating": 3,
    "language": "english",
    "certificate": "UA",
    "genre": [],
    "director":"director",
    "cast":[]
};
public movies=[];
  constructor(private data:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId= params.get('mailId');
      let cityName=params.get('cityName');
      let movieId=params.get('movieId');
      this.email=emailId;
      this.cityName=cityName;
      this.movieId=parseInt(movieId);
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
       for(let i of this.movies)
        {
           if(i.movieId==this.movieId)
             {this.movie=i;}
       }
      
      });    

    });
     
  }

}
