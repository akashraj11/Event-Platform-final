import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'angular-alert-module';
import { BookingDetails } from '../bookingDetails.modal';
import { Seat } from '../seat.modal';
import { SuccessService } from 'src/app/services/success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  bookingDetails:BookingDetails;
  
  bookingId ;
  email;
  totalPrice;
  movieTitle;
  theatreName;
  showDate:string;
  showTiming:string;
  theatreCity;
  showTime;
  seats :Seat[]=[];
  seatString :string[]=[];
  selectedSeats;

  

  constructor(private alerts:AlertsService,private shared:SuccessService) { }

  ngOnInit() {
    this.alerts.setMessage('Payment Success','success');
    this.shared.currentDetail.subscribe((message) => {
      this.bookingDetails = message;
      this.email= this.bookingDetails.email;
      this.bookingId = this.bookingDetails.bookingId
      this.totalPrice= this.bookingDetails.totalPrice;
      // this.bookingDetails.movieId
      this.movieTitle= this.bookingDetails.movieTitle;
      //          this.bookingDetails.theatreId
      this.theatreName= this.bookingDetails.theatreName;
      this.showTime=this.bookingDetails.showTime;
      this.showDate =this.showTime.slice(0,11);
      this.showTiming =this.showTime.slice(11,16);
      console.log(this.showTiming+'time' );
      this.seats = this.bookingDetails.seats;
      for(var i=0;i<this.seats.length;i++)
      {
        this.seatString[i] = this.seats[i].seatNumber;
        console.log(this.seats[i].seatNumber);
        
      }
      console.log(this.seatString);
      this.selectedSeats = this.seatString.toString;
     } );
     
      
    
    console.log(this.bookingDetails);
    console.log(this.selectedSeats)



   
  }

}
