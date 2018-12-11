import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../profile';
import { SharedService } from '../../sharedService';
export interface GenreInterface{
  genre: string;
  image: string;
}

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})

export class ShowProfileComponent implements OnInit {

  @Input()
  profile: Profile;

  i: number;
  j:number;
  k:number =0;

  private genrelist: GenreInterface[]=[
    {genre:"Comedy",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Horror",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Horror._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Action",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Action._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Fantasy",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Fantasy._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Scifi",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Sci-Fi._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Romantic",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Romance._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Drama",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Drama._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Thriller",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Thriller._CB1513316169_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Adventure",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Adventure._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Mystery",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Mystery._CB1513316168_SX233_CR0,0,233,131_AL_.jpg" },
    {genre:"Animation",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Animation._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"},
    {genre:"Crime",image: "https://m.media-amazon.com/images/G/01/IMDb/genres/Crime._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"}
  ]

  showVal = new Array<GenreInterface>();


  genre: string[];
  show: boolean =true;

  constructor(private sharedService: SharedService) { 
    this.sharedService.currentGenre.subscribe(genre => this.genre=genre);
  }

  ngOnInit() {
    console.log('show profile .genre',this.genre);
    this.genre = this.profile.genre;

    for(this.i=0;this.i<this.genrelist.length;this.i++){
      for(this.j=0;this.j<this.genre.length;this.j++){
        if(this.genrelist[this.i].genre == this.genre[this.j]){
          this.showVal[this.k] = this.genrelist[this.i];
          this.k= this.k+1;
        }
      }
    }

    console.log(this.showVal);
  }

}
