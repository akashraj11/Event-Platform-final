import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') public movie;
  constructor(private route:ActivatedRoute,private router:Router) { }


  ngOnInit() {
  }

  getMovie(movieId)
  {
    this.router.navigate([movieId],{relativeTo:this.route});
  }

}
