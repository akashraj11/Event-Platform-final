import { MovieLanding } from "../landingpage/domains/Movie";
import { MovieRecommendation } from "./movierec";


export class Profile {
    email: string;
    name: string;
    phoneNumber: string;
    gender: string;
    password: string;
    city: string;
    genre: string[];
    language: string;
    wishList: MovieRecommendation[];
}
