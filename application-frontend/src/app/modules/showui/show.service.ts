import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show.modal';
import { Booking } from './BookingDomain/booking.modal';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  public private_url="https://eventplatform-zuul.stackroute.in/show-service/api/v1/show";

  public private_url2="https://eventplatform-zuul.stackroute.in/producer-service/api/v1/producer/getTheatreByCity";

  public private_url3="https://eventplatform-zuul.stackroute.in/distributor-service/api/v1/distributor";

  public private_url4="https://eventplatform-zuul.stackroute.in/booking-service/api/v1/booking";

  //public private_url4="http://13.27.170.181:10000/api/v1/booking";

   //public private_url4="http://172.23.239.169:8022/api/v1/booking";
 
  constructor(private http:HttpClient) { }

  addShow(show:Show):Observable<any>{
    return this.http.post(this.private_url,show);
  }

  updateBooking(booking:Booking):Observable<any>{
    return this.http.put(this.private_url4,booking);
  }

  addBooking(booking:Booking):Observable<any>{
    return this.http.post(this.private_url4,booking);
  }

  updateShow(id:number,show:Show):Observable<any>{
    return this.http.put(this.private_url+"/"+id,show);
  }
  deleteShow(city:string,movieId:number,id:number):Observable<any>{
    return this.http.delete(this.private_url+"/"+city+"/"+movieId+"/"+id);
  }
  getAllShows():Observable<any>{
    return this.http.get(this.private_url);
  }

  getAllTheatres(email:string,location:string):Observable<any>{
    return this.http.get(this.private_url2+"/"+email+"/"+location);
  }
  getMoviesByCity(city:string):Observable<any>{
    return this.http.get(this.private_url3+"/"+city+"/getMovies");
  }
}
