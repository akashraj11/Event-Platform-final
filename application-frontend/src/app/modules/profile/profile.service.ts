import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public baseUrl = 'https://eventplatform-zuul.stackroute.in/user-registration-service/api/v1/user/';
  public updateUrl = 'https://eventplatform-zuul.stackroute.in/user-registration-service/api/v1/update/';

  constructor(private http: HttpClient) { }

  getProfileById(id: string): Observable<any> {
    return this.http.get(this.baseUrl  + id);
  }

  updateProfile(id: string, profile:Profile): Observable<any> {
    return this.http.put(this.updateUrl  + id,profile);
  }
}
