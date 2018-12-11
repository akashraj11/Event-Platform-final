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
    cast:string[];
    director: string;
    theatres:Theatre[];

    public Movie(movieId:number, movieTitle:string, yearOfRelease:string, posterUrl:string, ratingArray:number[],
                 averageRating:number, language:string, certificate:string, genre:string[], cast:string[],director:string, theatres:Theatre[]) {
        this.movieId = movieId;
        this.movieTitle = movieTitle;
        this.yearOfRelease = yearOfRelease;
        this.posterUrl = posterUrl;
        this.ratingArray = ratingArray;
        this.averageRating = averageRating;
        this.language = language;
        this.certificate = certificate;
        this.genre = genre;
        this.director = director;
        this.cast=cast;
        this.theatres = theatres;
    }
}