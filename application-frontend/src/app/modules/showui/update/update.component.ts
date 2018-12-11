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
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { TimingBooking } from '../BookingDomain/timingBooking.modal';
import { CategoryBooking } from '../BookingDomain/categoryBooking.modal';
import { TheatreBooking } from '../BookingDomain/theatreBooking.modal';
import { MovieBooking } from '../BookingDomain/movieBooking.modal';
import { Booking } from '../BookingDomain/booking.modal';
import { ScreenLayout } from '../BookingDomain/screenLayout.modal';

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
  cast: string[];
  director: string;
}


export interface SeatLayout1 {
  seatNumber:string;
  bookingSeatStatus:number;
}
export interface Category1 {
  type:string;
  noOfColumns:number;
  noOfRows:number;
  seatLayout:SeatLayout1[];
}
export interface ScreenLayout1{
  category:Category1[];
}
export interface Theatre1 {
  theatreId:number;
  theatreName: string;
  theatreCity:string;
  theatreAddress:string;
  screenLayout:ScreenLayout1;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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
       category11: new FormControl(''),
       price1 : new FormControl(''),
       price2 : new FormControl(''),
       price3 : new FormControl(''),
       category22: new FormControl(''),
       category33: new FormControl(''),
       date1 : new FormControl(''),
       count:new FormControl(''),
       date2 : new FormControl(''),
       date3 : new FormControl(''),
       date4 : new FormControl(''),
       date : new FormControl('')
    })
  }

  numbers:number[]=[1,2,3,4];

  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" },
    { value: "Kochi" },
    { value: "Pune" },
    { value: "Gurugram" },
    { value: "Ahmedabad" },
    { value: "Goa" },
    { value: "Srinagar" },
    { value: "Gudgoan" },
    { value: "Dehradun" }
  ]

  movies: Movie1[]=[];
  theatres:Theatre1[]=[];

  getMovies(cityName:string){
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
  showId:string;
  setCategory(selectedcategory:string,enteredPrice:number){
    this.category=new Category();
    this.category.Category(selectedcategory,enteredPrice);
    this.categories.push(this.category);
    console.log(this.categories)
  }

  temp:string;
  temp2:string;
  timingBookingList:TimingBooking[]=[];
  timingBooking:TimingBooking;

  getNowDate(date:Date) {
    //return string
    var returnDate = "";
    //split
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //because January is 0! 
    var yyyy = date.getFullYear();
    //Interpolation date
    returnDate = returnDate+yyyy+"-";

    if (mm < 10) {
      returnDate += `0${mm}-`;
    } else {
      returnDate += `${mm}-`;
    }

    if (dd < 10) {
        returnDate += `0${dd}`;
    } else {
        returnDate += `${dd}`;
    }
    // console.log(returnDate);
    return returnDate;
  }
  
  addTiming(time:any,date:any){

    this.temp2=this.getNowDate(date);
    this.temp=this.temp2+" "+time;
    console.log(this.temp);
    this.showId=Math.floor((Math.random()*10000)+(Math.random()*10000)+(Math.random()*10000)).toString();
    this.timing=new Timing();
    this.timingBooking=new TimingBooking();

    this.timingBooking.showTime=this.temp;
    this.timingBooking.bookings=null;
    this.timingBooking.screenLayout=null;
    this.timingBooking.showId=this.showId;

    this.timing.Timing(this.temp,this.showId,this.categories);
    this.timings.push(this.timing);
    this.timingBookingList.push(this.timingBooking);
  }

  setTheatre(theatre:Theatre1){
    this.categories1=theatre.screenLayout.category;
    this.size=this.categories1.length;
  }

  categoryBookingList:CategoryBooking[]=[];
  categoryBooking:CategoryBooking;
  screenLayout:ScreenLayout;
  theatreBookings:TheatreBooking[]=[];
  theatreBooking:TheatreBooking;
  movieBookings:MovieBooking[]=[];
  movieBooking:MovieBooking;
  bookings:Booking;

  setShowJsonUpdate(city:string,selectedMovie:Movie1,theatre:Theatre1){
    
    this.theatre=new Theatre();
    this.theatre.Theatre(theatre.theatreId,theatre.theatreName,null,null,this.timings);
    this.theatresList.push(this.theatre);

    this.movie=new Movie();
    this.movie.Movie(selectedMovie.movieId,
      selectedMovie.movieTitle,
      selectedMovie.yearOfRelease,
      selectedMovie.posterUrl,
      selectedMovie.ratingArray,
      selectedMovie.averageRating,
      selectedMovie.language,
      selectedMovie.certificate,
      selectedMovie.genre,
      selectedMovie.cast,
      selectedMovie.director,
      this.theatresList);
    this.movieList.push(this.movie);
    var i=0;
    for(i=0;i<theatre.screenLayout.category.length;i++){
      this.categoryBooking=new CategoryBooking();
      this.categoryBooking.type=theatre.screenLayout.category[i].type;
      this.categoryBooking.price=this.timings[0].categories[i].price;
      this.categoryBooking.noOfColums=theatre.screenLayout.category[i].noOfColumns;
      this.categoryBooking.noOfRows=theatre.screenLayout.category[i].noOfRows;
      this.categoryBooking.seatLayoutList=theatre.screenLayout.category[i].seatLayout;
      this.categoryBookingList.push(this.categoryBooking);
    }

    this.screenLayout=new ScreenLayout();
    this.screenLayout.categoryBookingList=this.categoryBookingList;
    
    for(i=0;i<this.timingBookingList.length;i++){
      this.timingBookingList[i].screenLayout=this.screenLayout;

    }


    this.theatreBooking=new TheatreBooking();

    this.theatreBooking.TheatreBooking(theatre.theatreId,theatre.theatreName,null,null,this.timingBookingList);
    this.theatreBookings.push(this.theatreBooking);

    this.movieBooking=new MovieBooking();

    this.movieBooking.MovieBooking(selectedMovie.movieId,
      selectedMovie.movieTitle,
      selectedMovie.yearOfRelease,
      selectedMovie.posterUrl,
      selectedMovie.ratingArray,
      selectedMovie.averageRating,
      selectedMovie.language,
      selectedMovie.certificate,
      selectedMovie.genre,
      selectedMovie.cast,
      selectedMovie.director,
      this.theatreBookings);
    this.movieBookings.push(this.movieBooking);

    this.bookings=new Booking();
    this.bookings.Booking(this.selectedLocation,this.movieBookings);

    console.log(this.bookings);

    this.show=new Show();
    this.show.Show(city,this.movieList);
    console.log(this.show);

    this.showService.updateShow(theatre.theatreId,this.show).subscribe(data =>{
      this.alerts.setMessage("Updated Successfully!",'success');
      this.showService.updateBooking(this.bookings).subscribe(data =>{
        console.log("added to bookings successfully");
        this.router.navigate(['show',"update"]);
        setTimeout (() => {
          console.log("Hello from setTimeout");
          window.location.reload();
       }, 1000);
      })
      
    },error=>{
      this.alerts.setMessage("Show Not Exists to update",'error');
      this.router.navigate(['show',"add"]);
    })


  }


}


