import { Injectable } from '@angular/core';
import { ChargeRequest } from './chargeRequest.modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Details } from './details.modal';
import { PaymentDetails } from './paymentDetails.modal';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  private_url="https://eventplatform-zuul.stackroute.in/payment-service/api/v1/charge";
  private_url2="https://eventplatform-zuul.stackroute.in/booking-service/api/v1/booking/bookingArena/freeSeats";
  private_url3="https://eventplatform-zuul.stackroute.in/booking-service/api/v1/booking/bookingArena/blockSeats";
  private_url4="https://eventplatform-zuul.stackroute.in/payment-service/api/v1/paymentDetails";

  makePayment(chargeRequest:ChargeRequest):Observable<any>{
    return this.http.post(this.private_url,chargeRequest).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"Server error");
  }

  freeSeats(details:Details):Observable<any>{
    return this.http.put(this.private_url2,details);
  }

  blockSeats(details:Details):Observable<any>{
    return this.http.put(this.private_url3,details);
  }

  save(paymentDetails:PaymentDetails):Observable<any>{
    return this.http.post(this.private_url4,paymentDetails);
  }

}
