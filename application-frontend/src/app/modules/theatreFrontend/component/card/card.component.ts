import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Theatre } from '../../domain/theatre';
import { ScreenLayout } from '../../domain/screenLayout';
import { Category } from '../../domain/category';
import { ProducerService } from '../../services/producer-service';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { CoreDataService } from 'src/app/services/data.service';
import * as jwt_decode from "jwt-decode";
import { AuthToken } from 'src/app/shared/authToken';
import { Producer } from '../../domain/producer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private producer: Producer;
  tokenObtained = localStorage.getItem('currentUser');
  producerToken: AuthToken; 
  email :string="";
  public theatreId: number;
  public theatreName: string;
  public theatreAddress: string;
  public theatreCity: string;
  public screenLayout: ScreenLayout;
  public category: Category;

  @Input() private some: Theatre;

  theatreArr;

  constructor(private http: HttpClient,
    private producerService: ProducerService,
    private coreService: CoreDataService
    ) { }

  ngOnInit() {
    this.producerToken=jwt_decode(this.tokenObtained);
    console.log('producer Token',this.producerToken);
    this.email=this.producerToken.sub;
    console.log('email is',this.email);
    this.defaultLoad();
  }

  defaultLoad() {
  console.log('default load started');
        this.theatreId = this.some.theatreId;
        this.theatreName = this.some.theatreName;
        this.theatreCity = this.some.theatreCity;
        this.theatreAddress = this.some.theatreAddress;
        this.screenLayout = this.some.screenLayout;
        this.category = this.some.screenLayout.category[0];
        console.log('layout at card', this.screenLayout);

  }


  onDelete(theatreNamePassed: string) {
    this.producerService.deleteTheatre(this.email, theatreNamePassed);
    setTimeout (() => {
      console.log("Hello from setTimeout");
      window.location.reload();
   }, 1000);
  }

}
