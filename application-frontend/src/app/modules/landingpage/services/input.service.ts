import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../domains/Show';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private url="https://eventplatform-zuul.stackroute.in/show-service/api/v1/show"
  constructor(private  http:HttpClient) { }
   
  getShows(): Observable<Show[]>
  {
    return this.http.get<Show[]>(this.url);
  }
}
