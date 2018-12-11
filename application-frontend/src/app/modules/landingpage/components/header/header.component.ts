import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService1 } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { ReccomendationService } from 'src/app/services/reccomendation.service';
import { Show } from 'src/app/main-landing-page/domain/Show';


export interface Location {
  value: string;
}
export interface GenreList{
  value:string;
}

export interface Genre
{
    action:boolean,
    horror:boolean,
    comedy:boolean,
    fantasy:boolean,
    scifi:boolean,
    romance:boolean,
    drama:boolean,
    crime:boolean,
    thriller:boolean,
    mystery:boolean,
    animation:boolean,
    adventure:boolean,
    fiction:boolean,
  
}

export interface Language {
  value: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genre: string[];
  gen:GenreList[] =[
   { value:"Action"},
   { value:"Comedy"},
    { value:"Horror" },
   {value: "Scifi"},
   {value: "Fantasy"},
   {value: "Romance"},
   {value: "Drama"},
   {value: "Adventure"},
   {value: "Animation"},
   {value: "Crime"},
   {value: "Mystery"},
   {value: "Thriller"},
   {value: "Fiction"}

  
    
    
    
    
  ]

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
  genreArray=[];
  languageRecommendation: string;
  cityRecommendation: string;
  genreRecommendation: string;

  mode = new FormControl('over');

  panelOpenState = false;

  locations: Location[] = [
  { value: "Bangalore" },
  { value: "Delhi" },
  { value: "Hyderabad" },
  { value: "Mumbai" },
  { value: "Chennai" },
  { value: "Guwahati" },
  { value:"Kochi"},
  { value: "Pune"},
  { value: "Gurugram"},
  { value: "Ahmedabad"} , 
  { value:"Goa" },
  { value: "Srinagar"} ,
  { value: "Gudgoan"},
  { value: "Dehradun"} 
]

  langList :Language[]=[
  {value:"English"},
  {value:"Telugu"},
  {value:"Hindi"},
  {value:"Tamil"},
  {value:"Malayalam"},
  {value:"Urdu"},
  ]

  @Output()  public childEvent=new EventEmitter();
  cityName: string;
  email: string ="Please Login";
  email1:string;
  show: Show;
  searchEmail: string;
  searchLanguage: string;
  searchCityName1:string;
  searchCityName:string;
  searchGenre:string;
  searchCast:string;
  searchDirector:string;
  tokenObtained = localStorage.getItem('currentUser');
  loginToken: AuthToken; 
  shows=[];
  constructor(private coreService:CoreDataService,
    private route:ActivatedRoute,
    private router:Router,
    private cityData:DataService1,
    private dataService:DataService1,
    private recommendation: ReccomendationService) { }

  selectedGenre;

  ngOnInit() {

    try{
      const tokenObtained = localStorage.getItem('currentUser');
      this.loginToken=jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      this.email=this.loginToken.sub;
      }
      catch(error){
        console.log(error);
      }

    this.cityData.currentCity.subscribe((data)=>
    {this.cityName=data});

    this.dataService.currentShowArray.subscribe(
      (data)=>{
        console.log(data);
        this.shows=data;
      },
      (error)=>{
        console.log(error);
      }
    );

  }
  
  filter(search:string)
  {
    // this.childEvent.emit(search);
    this.recommendation.getSearch(search).subscribe((data)=>{
    console.log('search data',data);

      this.searchCityName=this.cityName;
      this.searchLanguage= data["language"];
      this.searchCast =data["cast"];
      this.searchDirector= data["director"];
      this.searchEmail= data["email"];
      this.searchGenre= data["genre"];
      this.searchCityName1= data["cityName"];
      if(this.searchCityName1 != "NAN"){
        this.searchCityName =this.searchCityName1 ;
      }

      console.log('languageSearch',this.searchLanguage);


      this.recommendation.getRecommendationUser(this.searchEmail,this.cityName,this.searchLanguage,this.searchGenre,this.searchCast,"asdf")
      .subscribe((data)=>{
        console.log('search calling calling',data);
        this.dataService.changeShow(data);
      });
    });
  }

  logoutClicked(){
    localStorage.removeItem('currentUser')
    console.log('LoggedOut');
      this.router.navigate([
        'landing/show',this.cityName
      ] );
      window.location.reload();
  }


  // loadMovies(cityName)
  // {

  // }

  loadCityRecommendation(cityTest){
    console.log('citytest',cityTest);
    console.log('cityRecommendation',this.cityRecommendation);
    this.recommendation.sortByCity(cityTest).subscribe((data)=>{
      console.log('recommendation service sort by city');
      this.show= data;
      this.dataService.changeShow(data);
      console.log('from recommendation show',this.show);
    }
    );
    this.dataService.changeCity(cityTest);
    this.router.navigate([
      'landing/show',cityTest
    ] );
  }


  loadLanguageRecommendation(langTest){
    console.log('langtest',langTest);
    console.log('languageRecommendation',this.languageRecommendation);
    this.recommendation.sortByLanguage(langTest,this.cityName).subscribe((data)=>{
      console.log('recommendation service sort by language',data);
      this.show= data;
      this.dataService.changeShow(data);
      console.log('from recommendation show',this.show);
    }
    );
  }

  


  loadGenreRecommendation(selectedGenre){
    console.log('genretest selectedgenre',selectedGenre);
    console.log('genretest genre recommendation',this.genreRecommendation);
    console.log('genretest genrearray',this.genreRecommendation);
    var str = this.genreRecommendation; 
    console.log('genreteststring',str);

    if(str.length == 0){
      console.log('in genre length 0 condition')
      this.loadCityRecommendation(this.cityName);
    }

    if(str.length != 0){
      this.recommendation.sortByGenre(str,this.cityName).subscribe((data)=>{
        console.log('recommendation service sort by genre');
        console.log('string of genre',str);
        this.show= data;
        this.dataService.changeShow(data);
        console.log('from recommendation show',this.show);
      }
      );
  }
  }

  goToProfile(){
    if(this.email != 'Please Login'){
        this.router.navigate([
          'profile'
        ] );
    }
  }
}
