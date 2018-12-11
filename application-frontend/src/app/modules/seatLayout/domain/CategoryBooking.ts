import { Seat } from "./Seat";

export interface CategoryBooking {
        type: String
        price: number,
        noOfColums: number,
        noOfRows: number,
        seatLayoutList: Seat[]
}