import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable() 
export class SharedService {

 genre: string[];
 public genreSource = new BehaviorSubject<string[]>(this.genre);
 public currentGenre = this.genreSource.asObservable();

 public changeGenre(message: string[]) {
    this.genreSource.next(message);
  }
}