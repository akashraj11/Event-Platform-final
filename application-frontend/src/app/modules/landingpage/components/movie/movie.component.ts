import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieLanding } from '../../domains/Movie';
import { DataService1 } from '../../services/data.service';
import { UserLanding } from '../../domains/userlanding';
import { AuthToken } from 'src/app/shared/authToken';
import * as jwt_decode from "jwt-decode";
import { ReccomendationService } from 'src/app/services/reccomendation.service';
import { Likes } from '../../domains/likes';
import { RegistrationService } from 'src/app/modules/user-registration/registration.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  loginToken: AuthToken; 
  f=1;
  likes: Likes = {
    user : {
      "email": "user1@gmail.com",
      "name": "User1",
      "phoneNumber": "1234567890",
      "gender": "male",
      "city": "Bangalore",
      "password": null,
      "genre": [
          "Scifi",
          "Romantic",
          "Rom-com",
          "Drama"
      ],
      "language": [
          "gfvn"
      ],
      "wishList": [
      ]    
  },
  movie:{
    "movieId": 7,
    "movieTitle": "Thor",
    "yearOfRelease": "2008",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    "ratingArray": [],
    "averageRating": 8,
    "language": "English",
    "certificate": "PG-13",
    "director": null,
    "theatres": [],
    "cast": null,
    "genre": [
        "Drama",
        "Sci-Fi"
    ]
}
  };
  email: string = "not authorized";
  userData: UserLanding;
  languageRecommendation:string;
  genreRecommendation:string;
  castRecc: string;
  directorRecc:string;
  cityName:string;
  movieId:number;
  show=[];
  movies=[];
  wishlist =[];
  omdbMovie: MovieLanding={
    movieId: 10,
    movieTitle: "ABCD",
    yearOfRelease: "2018",
    posterUrl:"no image",
    ratingArray: [],
    averageRating:6,
    language:"english",
    certificate:"A",
    genre: [],
    theatres: [],
    director: "director",
    cast: []
  };
  constructor(private route:ActivatedRoute,
    private dataService:DataService1,
    private router:Router,
    private regService: RegistrationService,
    private reccomendation: ReccomendationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let cityName = params.get('cityName');
      let movieId=params.get('movieId');
      this.cityName=cityName;
      this.movieId=parseInt(movieId);



      // this.dataService.currentShowArray.subscribe((data)=>{
      //   console.log("container",data);
      //   this.show=data;
      //   for(let i of this.show)
      //   {
      //      if(i.cityName==this.cityName)
      //        {this.movies=i["movies"];
      //       console.log("movies",this.movies);}
      //  }
      //  for(let i of this.movies)
      //  {
      //     if(i.movieId==this.movieId)
      //       {this.omdbMovie=i;
      //      console.log("movie",this.omdbMovie);}
      // }
      // },
      // (error)=>{console.log(error)});

      this.dataService.currentShow.subscribe((data)=>
      {
        this.movies=data["movies"];
        console.log("movies.. 2",this.movies);
        for(let i of this.movies)
        {
           if(i.movieId==this.movieId)
             {this.omdbMovie=i;
            console.log("movie",this.omdbMovie);}
       }
      })
    });

    
   


    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }

      // if(this.email !=  'not authorized'){

      //   this.regService.getUserDetails(this.email).subscribe((data: UserLanding) => {
      //     this.userData = data;
      //     if(this.userData.wishList != null){
      //         this.wishlist= this.userData.wishList ;
      //       }
      //     console.log('User data Retrieved', this.userData);

      //     if(this.userData.wishList.length != 0){
      //       this.castRecc = this.userData.wishList[0].cast.join();
      //       this.directorRecc = this.userData.wishList[0].director;
      //       console.log('this.castRecc',this.castRecc);
      //       console.log('this.directorRecc',this.directorRecc);
      //    }
      //     this.reccomendation.getRecommendationUser(this.email,this.userData.city,this.languageRecommendation,this.genreRecommendation,this.castRecc,this.directorRecc)
      //     .subscribe((data)=>{
      //       this.dataService.changeShow(data);
      //     });
      //    });

      // }
  }

  getTheatres()
  {
      this.router.navigate(["theatres"],{relativeTo:this.route});
  }

  addToFavorite(omdbMovieWishlist: MovieLanding){
    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }

      if(this.email !=  'not authorized'){
        console.log('this email',this.email);  
        this.regService.getUserDetails(this.email).subscribe((data: UserLanding) => {
          this.userData = data;

          if(this.userData.wishList != null){
            this.wishlist = this.userData.wishList;
            console.log('not null');
          

          console.log('User data Retrieved', this.userData);
          
          if(this.wishlist.length == 0){
            this.wishlist.push(omdbMovieWishlist);
          }

          if(this.wishlist.length !=  0 ){
            for(var v=0;v<this.wishlist.length;v++){
                if(omdbMovieWishlist.movieId == this.wishlist[v].movieId ){
                  this.f=0;
                  break;
                }
              } 
            if(this.f!= 0){
                this.wishlist.push(omdbMovieWishlist);
            } 
          }
        }

          console.log('pushed data',this.wishlist);
          this.userData.wishList = this.wishlist;
          console.log('wishlist',this.userData.wishList);


          this.likes.user =this.userData;
          this.likes.movie=omdbMovieWishlist;
          this.reccomendation.likedMovie(this.likes).subscribe((data )=>{
            console.log('liked data',this.likes)
          }
          );



          

          this.regService.updateUserDetails(this.email,this.userData).subscribe((data) => {
            console.log('User updated by adding movie');
            console.log('Updated wishlist',this.userData.wishList);
         });
         });

      }

  }

}
