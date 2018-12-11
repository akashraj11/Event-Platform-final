import { Theatre } from "./theatre.modal";

export class Movie {

    movieId:number;
    movieTitle:string;
    yearOfRelease:string;
    posterUrl:string;
    ratingArray:number[];
    averageRating:number;
    language:string;
    certificate:string;
    genre:string[];
    theatres:Theatre[];

}