import { Theatre } from "./Theatre";


export class MovieLanding {

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
    director:string;
    cast:Array<string>;
}