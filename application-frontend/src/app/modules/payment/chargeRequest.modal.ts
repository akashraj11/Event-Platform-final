export class ChargeRequest{

    amount:number;
    stripeToken:string;
    description:string;
    currency:Currency;
    stripeEmail:string;
}

export enum Currency{
    EUR, USD
}