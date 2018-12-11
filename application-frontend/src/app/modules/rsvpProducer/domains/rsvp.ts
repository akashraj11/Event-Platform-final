
export interface Rsvp{
    id:number,
    eventName:string,
    scheduledDate:string,
    publishDate:string,
    eventDescription:string,
    eventVenue:string,
    eventPosterUrl:string
    invitations:Array<string>,
    invitationMessage:string,
    attending:Array<string>,
    maybeAttending:Array<string>,
    notAttending:Array<string>    
}
