import { TimingBooking } from "./timingBooking.modal";

export class TheatreBooking{
theatreId:number
theatreName:string
theatreCity:string
theatreAddress:string
timingBookings:TimingBooking[]

public TheatreBooking(theatreId:number, theatreName:string, theatreCity:string, theatreAddress:string, 
    timings:TimingBooking[]) {
    this.theatreId = theatreId;
    this.theatreName = theatreName;
    this.theatreCity = theatreCity;
    this.theatreAddress = theatreAddress;
    this.timingBookings = timings;
}


}