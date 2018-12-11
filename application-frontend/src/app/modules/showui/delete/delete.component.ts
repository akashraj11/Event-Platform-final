import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";
import { Category } from '../category.modal';
import { Timing } from '../timing.modal';
import { Theatre } from '../theatre.modal';
import { Movie } from '../movie.modal';
import { Show } from '../show.modal';
import { ShowService } from '../show.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";
export interface Location {
  value: string;
}
export interface Movie1 {
  movieId:number;
  movieTitle: string;
  yearOfRelease:string;
  posterUrl:string;
  ratingArray:number[];
  averageRating:number;
  language:string;
  certificate:string;
  genre:string[];
}

export interface SeatLayout {
  seatNumber:number;
}
export interface Category1 {
  type:string;
  noOfColumns:number;
  noOfRows:number;
  seatLayout:SeatLayout[];
}
export interface ScreenLayout{
  category:Category1[];
}
export interface Theatre1 {
  theatreId:number;
  theatreName: string;
  theatreCity:string;
  theatreAddress:string;
  screenLayout:ScreenLayout;
}

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  loginToken: AuthToken; 
  email: string;
  selectedLocation
  showDetails:FormGroup


  constructor(private showService:ShowService,private alerts: AlertsService,private router:Router) { }

  ngOnInit() {
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }
    this.showDetails = new FormGroup({
       city : new FormControl(''),
       movie: new FormControl(''),
       theatre: new FormControl(''),
       category1: new FormControl(''),
       price1 : new FormControl(''),
       price2 : new FormControl(''),
       price3 : new FormControl(''),
       category2: new FormControl(''),
       category3: new FormControl(''),
       date1 : new FormControl(''),
       count:new FormControl(''),
       date2 : new FormControl(''),
       date3 : new FormControl(''),
       date4 : new FormControl('')
    })
  }

  numbers:number[]=[1,2,3,4];

  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" }
  ]

  movies: Movie1[]=[];
  theatres:Theatre1[]=[];

  getMovies(cityName:string){
    console.log(cityName);
    this.showService.getMoviesByCity(cityName).subscribe(data =>{
      this.movies=data;
    })
  }

  getTheatres(selectedLocation){
    this.showService.getAllTheatres(this.email,selectedLocation).subscribe(data => {
      this.theatres=data;
      console.log(this.theatres);
    })
  }

  categories1=[];
  size:number;

  categories=[];
  category:Category;

  timings:Timing[]=[];
  timing:Timing;

  theatresList:Theatre[]=[];
  theatre:Theatre;

  movieList:Movie[]=[];
  movie:Movie;

  show:Show;
  shows:Show[]=[];
  flag=0;

  Msg;
  setShowJson(city:string,selectedMovie:Movie1,theatre:Theatre1){
    
    this.showService.deleteShow(city,selectedMovie.movieId,theatre.theatreId).subscribe(data =>{
      this.alerts.setMessage('Deleted Successfully!','success');
      this.router.navigate(['show','delete']);
      setTimeout (() => {
        console.log("Hello from setTimeout");
        window.location.reload();
     }, 1000);
    },error=>{
      this.alerts.setMessage('Show not found to delete','error');
      this.router.navigate(['show','add']);
    })
  }


}
