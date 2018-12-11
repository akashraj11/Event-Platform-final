import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistributorService } from '../../services/distributor.service';
import { DataService } from '../../services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movie') public movie;
  @Input('email') public email;
  @Input('cityName') public cityName;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private distributorService:DistributorService,
    private dataService:DataService,
    private dialogService:DialogService) { }

  ngOnInit() {
    this.dataService.changeId(this.movie.movieId);
  }
  getMovie(id: number) {
    
    this.router.navigate([id], { relativeTo: this.route });
  }
  deleteMovie()
  {
    this.dialogService.openConfirmDialog("Are you sure you want to delete this movie "+this.movie.movieTitle+" ???").afterClosed().subscribe(result=>{
      console.log(result);
      if(result)
      {
        this.distributorService.deleteMovie(this.email,this.cityName,this.movie.movieId);
        setTimeout (() => {
          console.log("Hello from setTimeout");
          window.location.reload();
       }, 1000);
      }
     
    });

  
  }

  

}

