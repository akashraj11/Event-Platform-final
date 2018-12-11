import { Seat } from "./seat.modal";

export class BookingDetails {

    bookingId:number;
    email:string;
    movieTitle:string;
    movieId:number;
    theatreName:string;
    theatreId:number;
    showTime:string;
    showId:string;
    bookingStatus:number;
    paymentStatus:boolean;
    seats:Seat[];
    totalPrice:number;
}
