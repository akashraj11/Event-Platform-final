import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDistributor } from '../domains/Distributor';
import { ICity } from '../domains/City';
import { IMovie } from '../domains/Movie';
import { MatSnackBar } from '@angular/material';




@Injectable({
  providedIn: 'root'
})
export class DistributorService {

  private snackbar: MatSnackBar;
  private url = "https://eventplatform-zuul.stackroute.in/distributor-service/api/v1/distributor";
  constructor(private http: HttpClient) { }

  getDistributors(): Observable<IDistributor[]> {;
    return this.http.get<IDistributor[]>(this.url);
  }

  getDistributor(email:string): Observable<IDistributor> {
    const geturl=`${this.url}/${email}`;
    return this.http.get<IDistributor>(geturl);
  }
  addCity(email:string,city:ICity) {
    const puturl=`${this.url}/${email}`;
    this.http.put(puturl,city).subscribe((data)=>{
      console.log(data);
      window.alert("Successfully Added City");
    },
    (error)=>{console.log(error);
      this.snackbar.open('Succesfully submitted!', 'Close', {
        duration: 3000,
      });
  });
  }
  addMovie(email:string,cityName:string,movie:IMovie) {
    console.log("add movie in service");
    const puturl=`${this.url}/${email}/${cityName}`;
    this.http.put(puturl,movie).subscribe((data)=>{
      console.log(data);
      window.alert("Successfully Added Movie");
    },
    (error)=>{console.log(error);
      window.alert(error["error"]);});
  }
  deleteCity(email:string,cityName:string) {
    console.log("delete in service");
    const deleteUrl=`${this.url}/${email}/${cityName}`;
    this.http.delete(deleteUrl).subscribe((data)=>{
      console.log(data);
      window.alert("Successfully Deleted City");
    },
    (error)=>{console.log(error);
      window.alert(error["error"]);});
  }
  deleteMovie(email:string,cityName:string,movieId:number) {
    console.log("delete in service");
    const deleteUrl=`${this.url}/${email}/${cityName}/${movieId}`;
    this.http.delete(deleteUrl).subscribe((data)=>{
      console.log(data);
      window.alert("Successfully Deleted Movie");
    },
    (error)=>{console.log(error);
      window.alert(error["error"]);});
  }
}

