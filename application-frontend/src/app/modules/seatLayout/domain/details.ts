import { Seat } from "./Seat";

export class Details{
    email:string;
    showId:string;
    seats:string[];
    bookingId:number;
    type:string;
    totalPrice:number;

    Details(email:string,showId:string,seats:string[],bookingId:number,type:string,totalPrice:number){
    this.email=email;
    this.showId=showId;
    this.seats=seats;
    this.bookingId=bookingId;
    this.type=type;
    this.totalPrice=totalPrice;
    }
}