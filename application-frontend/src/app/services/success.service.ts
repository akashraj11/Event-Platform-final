import { Injectable } from '@angular/core';
import{BookingDetails} from '../modules/payment/bookingDetails.modal'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  details:BookingDetails
  public Detailsource = new BehaviorSubject<BookingDetails>(this.details);
  public currentDetail = this.Detailsource.asObservable();

  constructor() { }
  public changeDetail(message: BookingDetails) {
    this.Detailsource.next(message);
  }
}
