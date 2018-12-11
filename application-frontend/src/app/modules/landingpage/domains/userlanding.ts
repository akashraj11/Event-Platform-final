import { Movie } from "src/app/main-landing-page/domain/movie.modal";
import { MovieLanding } from "./Movie";

export interface UserLanding {
    email:string,
    name:string,
    gender:string,
    city:string,
    password:string,
    genre:string[],
    phoneNumber:string,
    wishList: Array<MovieLanding>,
    language: Array<string>
}