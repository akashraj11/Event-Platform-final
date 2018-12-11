import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from '@angular/core/src/util';
import { DataService1 } from '../../services/data.service';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { ReccomendationService } from 'src/app/services/reccomendation.service';
import { ProfileDataService } from 'src/app/modules/profile/profiledataservice';
import { ProfileService } from 'src/app/modules/profile/profile.service';
import { UserLanding } from '../../domains/userlanding';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {
  show=[];
  movies=[];
  moviesSearch=[];
  wishListTemp= [];
  cityName:string;
  castRecc: string;
  castReccArr: string[];
  directorRecc: string;
  languageRecommendation:string;
  genreRecommendation:string;
  genreRecommendationArr:string[];
  userData: UserLanding;
  search="default";
  movieTitle:string;
  producerToken: AuthToken; 
  email: string ="Please Login";
  constructor(private route:ActivatedRoute,
    private dataService:DataService1,
    private coreData:CoreDataService,
    private recommendation:ReccomendationService,
    private profileService:ProfileService) { }

  ngOnInit() {

    try{
      console.log('user status',this.email);
      const tokenObtained = localStorage.getItem('currentUser');
      this.producerToken=jwt_decode(tokenObtained);
      this.email=this.producerToken.sub;
      console.log('user status 2',this.email);
      }
    catch(error){
        console.log(error);
      }
    
    console.log('component container loaded');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let cityName = params.get('cityName');
      this.cityName=cityName;
      this.dataService.changeCity(cityName);

      this.dataService.currentShowArray.subscribe((data)=>{
        console.log("container",data);
        this.show=data; 
        for(let i of this.show)
        {
           if(i.cityName==this.cityName)
             {this.movies=i["movies"];
             this.moviesSearch=i["movies"];
            console.log("movies",this.movies);}

       }

      },
      (error)=>{console.log(error)});

      
      if(this.email != "Please Login"){

        this.profileService.getProfileById(this.email)
        .subscribe(data => {
          this.userData = data;
          this.languageRecommendation = this.userData.language.join();
          this.genreRecommendation = this.userData.genre.join();
          this.genreRecommendationArr = this.userData.genre;
          console.log('Userdata for recommendation',this.userData);
        

        console.log('language for recommendation',this.languageRecommendation);

        if(this.userData.wishList == null){
          this.recommendation.getRecommendationGuest(cityName)
          .subscribe((data)=>{
            console.log('guest reccomendation');
            console.log('guest reccomendation shows trending',data);
            this.dataService.changeShow(data);
          });
        }

        if(this.userData.wishList != null && this.userData.wishList.length > 0){
          console.log('user logged in');
          console.log(this.userData.wishList);
          console.log('this.email',this.email);
          console.log('this.userData.city',this.userData.city);
          console.log('this.languageRecommendation',this.languageRecommendation);
          console.log('this.genreRecommendation',this.userData.genre);

          if(this.userData.wishList.length != 0){
              this.castRecc = this.userData.wishList[this.userData.wishList.length-1].cast.join();
              this.castReccArr = this.userData.wishList[this.userData.wishList.length-1].cast;
              this.directorRecc = this.userData.wishList[this.userData.wishList.length-1].director;
              console.log('this.castRecc',this.castRecc);
              console.log('this.directorRecc',this.directorRecc);
           }

          this.recommendation.getRecommendationUser(this.email,this.userData.city," ",this.genreRecommendation,this.castRecc,"axcvdf")
          .subscribe((data)=>{
            console.log('user data recommendation with wishlist',data);
            this.dataService.changeShow(data);
          });
        }

        if(this.userData.wishList != null && this.userData.wishList.length == 0){
          this.recommendation.getRecommendationGuest(cityName)
          .subscribe((data)=>{
            console.log('user data recommendation',data);
            this.dataService.changeShow(data);
          });
        }

      });
      }

      if(this.email == "Please Login"){
      this.recommendation.getRecommendationGuest(cityName)
      .subscribe((data)=>{
        console.log('guest recomendation 2');
        console.log('guest reccomendation shows trending',data);
        this.dataService.changeShow(data);
      });
    }

      this.dataService.currentShow.subscribe((data)=>
      {
        this.movies=data["movies"];
        this.moviesSearch=data["movies"];
        console.log("movies.. 2",this.movies);
      })

    },

    );


    
  }
  filter(search:string)
  {
    this.movies=this.moviesSearch.slice();
    this.search=search;
    this.search.toLowerCase();
    let j;
    for(j=0;j<this.movies.length;j++)
    {
      this.movieTitle=this.movies[j]["movieTitle"];
      if(this.movieTitle.toLowerCase().indexOf(this.search.toLowerCase())==-1)
      {
        this.movies.splice(j,1);
        j--;
      }
     
    }
  }
  
}
