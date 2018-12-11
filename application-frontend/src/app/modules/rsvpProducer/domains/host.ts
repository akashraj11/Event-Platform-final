import { Rsvp } from "./rsvp";

export interface Host
{
    email:string,
    events:Array<Rsvp>
}