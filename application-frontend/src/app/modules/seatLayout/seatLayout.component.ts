import { Component} from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'seatLayout-app-root',
  templateUrl: './seatLayout.component.html',
  styleUrls: ['./seatLayout.component.css']
})

export class SeatLayoutAppComponent {
 
 
  constructor(private dataservice:DataService){
    
  }

 
}
