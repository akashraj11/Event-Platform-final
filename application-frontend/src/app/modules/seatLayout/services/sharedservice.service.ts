import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Details } from '../domain/details'
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  message: string[];
  category: string[];
  detail: Details;
  public messagesource = new BehaviorSubject<string[]>(this.message);
  public categorysource = new BehaviorSubject<string[]>(this.category);
  public Detailsource = new BehaviorSubject<Details>(this.detail);
  public currentMessage = this.messagesource.asObservable();
  public currentcategory = this.categorysource.asObservable();
  public currentDetail = this.Detailsource.asObservable();
  
  constructor() { }

  public changeMessage(message: string[]) {
    this.messagesource.next(message);
  }
  public changeCategory(message: string[]) {
    this.categorysource.next(message);
  }

  public changeDetail(message: Details) {
    this.Detailsource.next(message);
  }

}
