import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BookingArena } from "../domain/BookingArena";
import { Details } from "../domain/details";
import { throwError, Observable } from "rxjs";
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  //private layouturl = "https://eventplatform-zuul.stackroute.in/booking-service/api/v1/booking/bookingArena";
  //private layouturl1 = "https://eventplatform-zuul.stackroute.in/booking-service/api/v1/booking/bookingArena";
  private layouturl = "http://13.127.170.181:10000/api/v1/booking/bookingArena";
  private layouturl1 = "http://13.127.170.181:10000/api/v1/booking/bookingArena";

  constructor(private http: HttpClient) {
    // this.initializeWebSocketConnection();
  }

  getLayout(showId:string) {
    //console.log(sho)
    console.log('in get Layout method');
    return this.http.get<BookingArena>(this.layouturl+"/"+showId);
  }
  getStatus(details: Details ):Observable<any>{
    return this.http.post(this.layouturl1,details).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"Server error");
  }
}
