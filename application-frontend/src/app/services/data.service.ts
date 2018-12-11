import { Injectable } from '@angular/core';
import { User } from '../modules/loginauthentication/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CoreDataService {
  private user: User;
  private emailSource=new BehaviorSubject("default");
  currentemail=this.emailSource.asObservable();

  constructor() { }

changeEmail(email:string)
{
  this.emailSource.next(email);
}
    



}
