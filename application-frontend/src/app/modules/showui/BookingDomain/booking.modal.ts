import { MovieBooking } from "./movieBooking.modal";

export class Booking {
cityName:string
movieBookings:MovieBooking[]

public Booking(cityName:string,movies:MovieBooking[]) {
    this.cityName=cityName;
    this.movieBookings=movies;
   
}
}
