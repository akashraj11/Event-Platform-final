import { Injectable } from '@angular/core';
import { Show } from '../domains/Show';
import { BehaviorSubject } from 'rxjs';
import { InputService } from './input.service';

@Injectable({
  providedIn: 'root'
})
export class DataService1 {

  show:Show={
    "cityName":"default",
    "movies":[]
  }
  private citySource=new BehaviorSubject("default City");
  currentCity=this.citySource.asObservable();
  public shows:Show[];
  private showArraySource=new BehaviorSubject<Show[]>([]);
  currentShowArray=this.showArraySource.asObservable();

  private showSource=new BehaviorSubject<Show>(this.show);
  currentShow=this.showSource.asObservable();
  constructor(private input:InputService) { }

  changeShows()
  {
    console.log("changedistributor");
    this.input.getShows().subscribe((data)=>{
      this.shows=data;
      this.showArraySource.next(this.shows);
    });

    
  }
  changeShow(show:Show)
  {
     this.showSource.next(show);
     console.log("show in service.........2")
  }
  changeCity(city:string)
  {
    this.citySource.next(city);
  }

}

