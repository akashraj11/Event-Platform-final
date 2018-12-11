import { Movie } from "./movie.modal";


export class Show {

    cityName:string;
    movies:Movie[];
    
    public Show(cityName:string, movies:Movie[]) {
        this.cityName = cityName;
        this.movies = movies;
    }
}