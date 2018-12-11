import { Component, OnInit } from '@angular/core';
import { SuccessService } from 'src/app/services/success.service';
import { BookingDetails } from '../bookingDetails.modal';
import { Router } from '@angular/router';
import { SharedserviceService } from '../../seatLayout/services/sharedservice.service';
import { Details } from '../../seatLayout/domain/details';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  bookingDetails:Details;
  bookingId ;
  email;
  showDate:string;
  showTiming:string;
  theatreCity;
  showId;


  constructor(private shared:SharedserviceService,
    private router:Router) { }

  ngOnInit() {
    this.shared.currentDetail.subscribe((message) => {
     console.log(message);
      this.bookingDetails = message;
      this.showId=this.bookingDetails.showId;
      console.log('booking',this.bookingDetails);
      console.log('showId',this.showId);
      
     } );
    
  }
  GoTo(){
    this.router.navigate(['booking',this.showId]);
   }

}
