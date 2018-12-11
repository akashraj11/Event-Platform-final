import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Likes } from '../modules/landingpage/domains/likes';
import { HttpClient } from '@angular/common/http';
import { UserLanding } from '../modules/landingpage/domains/userlanding';


@Injectable({
    providedIn: 'root'
  })
  export class ReccomendationService {
    url ="https://eventplatform-zuul.stackroute.in/recommendation-service/recommendation/addLikes";
    url1 ="https://eventplatform-zuul.stackroute.in/recommendation-service/recommendation/saveUser";
    urlSort ="https://eventplatform-zuul.stackroute.in/recommendation-service/recommendation/";
    urlgetRecommendation ="https://eventplatform-zuul.stackroute.in/recommendation-service/recommendation/defaultList";
    urlgetRecommendationdef ="https://eventplatform-zuul.stackroute.in/recommendation-service/recommendation/sortDefault";
    urlSearch ="https://eventplatform-zuul.stackroute.in/search-service/api/v1/query/"
    // urlSearch="http://172.23.239.97:8081/api/v1/query"
    // url ="http://172.23.239.91:8099/recommendation/addLikes";
    // url1 ="http://172.23.239.91:8099/recommendation/saveUser";
    // urlSort ="http://172.23.239.91:8099/recommendation/";
    // urlgetRecommendation ="http://172.23.239.91:8099/recommendation/defaultList";
    // urlgetRecommendationdef ="http://172.23.239.91:8099/recommendation/sortDefault";
    constructor(private httpClient:HttpClient) { }
    likedMovie(likes: Likes): Observable<any>
    {
      return this.httpClient.post(this.url,likes);
    }
  
    saveUser(user: UserLanding): Observable<any>{
      return this.httpClient.post(this.url1,user);
    }

    sortByCity(city:string): Observable<any>{
      let sortCity="sortCity";
      return this.httpClient.get(`${this.urlSort}${sortCity}/${city}`);
    }

    sortByLanguage(language: string,cityName:string): Observable<any>{
      let sortLanguage="sortLanguage";
      return this.httpClient.get(`${this.urlSort}${sortLanguage}/${language}/${cityName}`);
    }

    sortByGenre(genre: string,cityName:string): Observable<any>{
      let sortGenre ="sortGenre";
      return this.httpClient.get(`${this.urlSort}${sortGenre}/${genre}/${cityName}`);
    }
    getRecommendationUser(email: string,cityName:string,language:string,genre: string,cast:string,director:string): Observable<any>{
      return this.httpClient.get(`${this.urlgetRecommendation}/${email}/${cityName}/${language}/${genre}/${cast}/${director}`);
    }
    getRecommendationGuest(cityName:string): Observable<any>{
      return this.httpClient.get(`${this.urlgetRecommendationdef}/${cityName}`);
    }



  getSearch(searchString:string): Observable<any>{
    console.log('in search',searchString);
    return this.httpClient.get(this.urlSearch+searchString);
  }

}
