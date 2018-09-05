export class Hotel{
   name:string;
   email:string;
   checkIn:string;
   checkOut:string;
   guests:string;
   payment:string;
   roomType:string;

    constructor(name:string,email:string,checkIn:string,checkOut:string,guests:string,payment:string, roomType:string){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.guests = guests;
        this.payment = payment;
        this.roomType = roomType;
    }
}