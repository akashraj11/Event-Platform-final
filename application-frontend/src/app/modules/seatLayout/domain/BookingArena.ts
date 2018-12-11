import { Layout } from "@angular/flex-layout";
import {ScreenLayout} from '../domain/screenlayout'
import { BookingDetails } from "../domain/bookingDetails";
export class BookingArena{
    showId:string;
    showTime:string;
    cityName:string;
    movieId:number;
    movieTitle:string;
    theatreId:string;
    theatreName:string;
    screenLayout:ScreenLayout;
    bookingList:BookingDetails[];
}