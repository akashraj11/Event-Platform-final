import { ICity } from "./City";

export interface IDistributor
{
    email:string,
    cities:Array<ICity>
}