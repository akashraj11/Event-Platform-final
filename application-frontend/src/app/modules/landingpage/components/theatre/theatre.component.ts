import { Component, OnInit, Input } from '@angular/core';
import { Theatre } from '../../domains/Theatre';
import { Timing } from '../../domains/Timing';


@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  theatreId: Number;
  theatreName: String;
  theatreCity: String;
  theatreAddress: String;
  timings: Timing[];

  @Input() private showData: Theatre;
  constructor() { }
  ngOnInit() {
    this.theatreId = this.showData.theatreId;
    this.theatreName = this.showData.theatreName;
    this.theatreCity = this.showData.theatreCity;
    this.theatreAddress = this.showData.theatreAddress;
    this.timings = this.showData.timings;
    console.log('show time page',this.showData);
  }

}
