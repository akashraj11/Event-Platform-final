import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InputService } from '../../services/input.service';
import { DataService1 } from '../../services/data.service';
import { ReccomendationService } from 'src/app/services/reccomendation.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  shows=[];
  constructor(private input:InputService,
    private router:Router,
    private route:ActivatedRoute,
    private dataService:DataService1,
    private recommendation: ReccomendationService) { }

  ngOnInit() {
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

  loadMovies(cityName)
  {
    this.dataService.changeCity(cityName);

    this.recommendation.sortByCity(cityName).subscribe((data)=>{
      this.dataService.changeShow(data);
    });
    this.dataService.currentCity.subscribe((data)=>{console.log("city changed",data)});
    this.router.navigate(["show",cityName],{relativeTo:this.route});

  }

}
