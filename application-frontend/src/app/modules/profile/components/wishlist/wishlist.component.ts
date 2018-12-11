import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Profile } from '../../profile';
import { ProfileService } from '../../profile.service';
import { Movie } from 'src/app/main-landing-page/domain/movie.modal';
import { MovieRecommendation } from '../../movierec';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input()
  profile: Profile;

  movies: MovieRecommendation[] ;
  movieTitle:string;
  email: string ="Please Login";

  constructor(private route:ActivatedRoute,
    private profileService: ProfileService,
    private router: Router) { }

  ngOnInit() {
    this.movies = this.profile.wishList;
    console.log('movie list in profile',this.profile.wishList);
  }


  getMovie(movieId,city)
  {
    console.log('movieId',movieId);
    console.log('mcity',city);
    this.router.navigate(
     ["landing","show",city,movieId ]);
  }

  removeFromFavorite(omdbMovie){
    console.log("Before delete"+this.profile.wishList.length);
    this.profile.wishList.splice(this.profile.wishList.indexOf(omdbMovie), 1);
    console.log("After Delete"+this.profile.wishList.length);
    this.profileService.updateProfile(this.profile.email, this.profile)
    .subscribe(data => {
      // console.log(data);
      console.log('PUT Successful');
    });
  }
  
}
