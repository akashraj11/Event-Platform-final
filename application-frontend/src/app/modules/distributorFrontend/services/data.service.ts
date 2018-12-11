import { Injectable } from '@angular/core';
import { IDistributor } from '../domains/Distributor';
import { BehaviorSubject } from 'rxjs';
import { DistributorService } from './distributor.service';;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public idSource=new BehaviorSubject<number>(1);
  currentId=this.idSource.asObservable();

  public distributors:IDistributor[];
  private distributorsSource=new BehaviorSubject<IDistributor[]>([]);
  currentDistributors=this.distributorsSource.asObservable();






  constructor(private distributorService:DistributorService) { }
  changeDistributors()
  {
    console.log("changedistributor");
    this.distributorService.getDistributors().subscribe((data)=>{
      this.distributors=data;
      this.distributorsSource.next(this.distributors);
    });
    
  }
  changeId(id:number)
  {
    this.idSource.next(id);
  }
}
