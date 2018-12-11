import { Theatre } from "src/app/main-landing-page/domain/theatre.modal";



export class MovieRecommendation {

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
    city: string;
}

 