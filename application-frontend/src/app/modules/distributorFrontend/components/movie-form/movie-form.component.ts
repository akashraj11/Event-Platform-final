import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IMovie } from '../../domains/Movie';
import { DistributorService } from '../../services/distributor.service';
import { Genre } from '../../domains/Genre';
import { DataService } from '../../services/data.service';
import { DialogService } from 'src/app/services/dialog.service';



@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  email:string;
  cityName:string;
  movie:IMovie= {
    "movieId": null,
    "movieTitle":"",
    "yearOfRelease": "",
    "posterUrl": '',
    "ratingArray": [],
    "averageRating": 0,
    "language": "",
    "certificate": "",
    "genre": [],
    "director":"",
    "cast":[]
};
genreMap:Genre={
  "action":false,
  "comedy":false,
  "horror":false,
  "scifi":false,
  "fantasy":false,
  "romance":false,
  "drama":false,
  "adventure":false,
  "animation":false,
  "crime":false,
  "mystery":false,
  "thriller":false,
  "fiction":false,
};
selected="hello"
title="title";
genreArray=[];
castArray=[];
cast:string;
lastId=1;
languages=["English","Hindi","Malayalam","Telugu","Tamil","Urdu"];

  constructor(private distributorService:DistributorService,
    private route:ActivatedRoute,
    private data:DataService,
    private dialogService:DialogService,
    private router:Router) { }

 
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let emailId= params.get('mailId');
      let cityName=params.get('cityName');
      this.email=emailId;
      this.cityName=cityName;    
       });
   }

   onSubmit()
   {
   this.dialogService.openConfirmDialog("Confirm movie  details!!!!").afterClosed().subscribe(result=>
    {
      if(result)
      {
        this.data.currentId.subscribe((data)=>{
          this.lastId=data;
         console.log("last id form",this.lastId);
         })
        this.movie.movieId=this.lastId*(Math.floor(Math.random() * 100) + 1)+10;
        if(this.genreMap.action==true)
        {
          this.genreArray.push("Action");
        }
        if(this.genreMap.comedy==true)
        {
          this.genreArray.push("Comedy");
        }
        if(this.genreMap.fantasy==true)
        {
          this.genreArray.push("Fantasy");
        }
        if(this.genreMap.scifi==true)
        {
          this.genreArray.push("SCI-FI");
        }
        if(this.genreMap.drama==true)
        {
          this.genreArray.push("Drama");
        }
        if(this.genreMap.romance==true)
        {
          this.genreArray.push("Romance");
        }
        if(this.genreMap.adventure==true)
        {
          this.genreArray.push("Adventure");
        }
        if(this.genreMap.animation==true)
        {
          this.genreArray.push("Animation");
        }
        if(this.genreMap.crime==true)
        {
          this.genreArray.push("Crime");
        }
        if(this.genreMap.mystery==true)
        {
          this.genreArray.push("Mystery");
        }
        if(this.genreMap.thriller==true)
        {
          this.genreArray.push("Thriller");
        }
        if(this.genreMap.fiction==true)
        {
          this.genreArray.push("Fiction");
        }
        this.movie.genre=this.genreArray;
        this.movie.cast=this.castArray;
        console.log("movie",this.movie);
        this.distributorService.addMovie(this.email,this.cityName,this.movie);
        this.genreArray=[];
        this.castArray=[];
        setTimeout (() => {
          this.router.navigate(['../'], { relativeTo: this.route });
          window.location.reload();
       }, 1000);
      }
    })
   }


   addCast()
   {
     if(this.cast!=null)
     this.castArray.push(this.cast);
     this.cast=null;
   }
   

}