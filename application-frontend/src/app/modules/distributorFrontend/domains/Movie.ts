export  interface IMovie
{
movieId: number,
movieTitle:string,
yearOfRelease:string,
posterUrl:string,
ratingArray:Array<number>,
averageRating:number,
language: string,
certificate: string,
genre: Array<string>,
director:string,
cast:Array<string>
}