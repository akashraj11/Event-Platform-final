import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective, NgForm, Validators, FormControl } from "@angular/forms";
import { ChargeRequest } from '../chargeRequest.modal';
import { PaymentService } from '../payment.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';
import { Details } from '../details.modal';
import { PaymentDetails } from '../paymentDetails.modal';
import { BookingDetails } from '../bookingDetails.modal';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";
import { SharedserviceService } from '../../seatLayout/services/sharedservice.service';
import { SuccessService } from 'src/app/services/success.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  tokenObtained = localStorage.getItem('currentUser');

  constructor(private paymentService:PaymentService,
    private alerts:AlertsService,
    private router:Router,
    private sharedService: SharedserviceService,
    private success:SuccessService) { }

  loginToken: AuthToken;
  email :string = "guest@gmail.com";
  timeLeft: number = 600;
  min:number=0;
  sec:number=0;
  interval;
  details:Details;
  bookingDetails:BookingDetails;

  ngOnInit() {

    try{
      this.loginToken=jwt_decode(this.tokenObtained);
      console.log('Profile component Token',this.loginToken);
      this.email=this.loginToken.sub;
      console.log('profile component email is',this.email);
      }
      catch(error){
      console.log(error);
      }
console.log('ssss');
      this.sharedService.currentDetail.subscribe(details=>this.details=details);

    this.startTimer();
    
    
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.min=Math.floor(this.timeLeft/60);
        this.sec=this.timeLeft%60;
      } else {
          this.pauseTimer();
          this.paymentService.freeSeats(this.details).subscribe(data =>{
            console.log(data);
            this.router.navigate(['fail']);
            
        })
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;

  message: string;

  chargeRequest:ChargeRequest;
  paymentDetails:PaymentDetails;

  getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {
      if (status === 200) {
        console.log(response.id);
        this.message = `Success! Card token ${response.card.id}.`;
        this.chargeRequest=new ChargeRequest();
        this.chargeRequest.amount=540;
        this.chargeRequest.stripeToken=response.id;
        this.paymentService.makePayment(this.chargeRequest).subscribe(data =>{
          console.log(data);
          const id=data.id;
          console.log(id);
          this.pauseTimer();
          console.log(this.details);
          this.paymentService.blockSeats(this.details).subscribe(data1 =>{
            console.log(data1);
            this.bookingDetails=data1;
            console.log('booking',this.bookingDetails);
            this.success.changeDetail(this.bookingDetails)
            this.paymentDetails=new PaymentDetails();
            this.paymentDetails.PaymentDetails(id,true,this.bookingDetails.bookingId,this.bookingDetails.email,
              this.bookingDetails.totalPrice,this.bookingDetails.movieId,this.bookingDetails.movieTitle,
              this.bookingDetails.theatreId,this.bookingDetails.theatreName,this.bookingDetails.showTime,this.bookingDetails.showId);
            this.paymentService.save(this.paymentDetails).subscribe(data2 =>{
              console.log(data2);
              this.router.navigate(['card','success']);
            })
          })
        },error=>{
          this.pauseTimer();
          this.alerts.setMessage("Payment Failed",'error');
          console.log("Payment Failed");
          this.paymentService.freeSeats(this.details).subscribe(data =>{
            console.log(data);
            this.router.navigate(['card','fail']);
          })
        })
        
      } else {
        console.log("inside the erroe response");
          this.pauseTimer();
          this.alerts.setMessage("Payment Failed",'error');
          console.log("Payment Failed");
          this.paymentService.freeSeats(this.details).subscribe(data =>{
            console.log(data);
            this.router.navigate(['card','fail']);
          })
      }
    });
  }



}

