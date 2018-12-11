import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../domain/category';


// Component decorator
@Component({
    selector: 'seat-list',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
// variable declarations

@Input() public screenLayout;
category: Category;

type: String;
type2: String;

noOfRows: number;
noOfColumn: number;

noOfRows2: number;
noOfColumn2: number;

rows: string[];
cols: number[];

rows2: string[];
cols2: number[];

time: String;

constructor(private http: HttpClient) { }

    ngOnInit() {
        console.log('ngoninit started');
        console.log(this.screenLayout);
        this.type = this.screenLayout[0].type;
        this.noOfRows = this.screenLayout[0].noOfRows;
        this.noOfColumn = this.screenLayout[0].noOfColumns;
        this.type2 = this.screenLayout[1].type;
        this.noOfRows2 = this.screenLayout[1].noOfRows;
        this.noOfColumn2 = this.screenLayout[1].noOfColumns;

        this.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].slice(0, this.noOfRows);
        this.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumn);

        this.rows2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'].slice(0, this.noOfRows2);
        this.cols2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, this.noOfColumn2);

    }
}
