import { MovieLanding } from "../landingpage/domains/Movie";

export interface UserType {
    email:string,
    name:string,
    gender:string,
    city:string,
    password:string,
    genre:string[],
    phoneNumber:string,
    language: string[],
    wishList:MovieLanding[],

}