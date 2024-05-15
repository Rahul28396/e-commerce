export class PaymentOption { 
    displayName!:string ;
    value!: string;
    component!: { 
        name: any , 
        inputs?: any,
        content?: any
    }
}
