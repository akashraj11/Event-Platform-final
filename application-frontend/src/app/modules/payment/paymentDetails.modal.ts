export class PaymentDetails{

    paymentId:string;
    status:boolean;
    bookingId:number;
    email:string;
    amount:number;
    movieId:number;
    movieTitle:string;
    TheatreId:number;
    TheatreName:string;
    showTime:string;
    showId:string;

    PaymentDetails(paymentId:string,status:boolean,bookingId:number,email:string,amount:number,movieId:number,
                movieTitle:string,TheatreId:number,TheatreName:string,showTime:string,showId:string){
        
        this.paymentId=paymentId;
        this.status=status;
        this.bookingId=bookingId;
        this.email=email;
        this.amount=amount;
        this.movieId=movieId;
        this.movieTitle=movieTitle;
        this.TheatreId=TheatreId;
        this.TheatreName=TheatreName;
        this.showTime=showTime;
        this.showId=showId;
    }
}