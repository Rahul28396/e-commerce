export class PaymentType{
    name: string;
    icon: string;
    header: string;;
    type: string

    constructor(name: string, icon: string, header: string, type: string){
        this.name = name;
        this.icon = icon;
        this.header = header;
        this.type = type;
    }
}

export enum PaymentTypeEnum{
    recommended = 'recommended',
    cash = 'cash',
    upi = 'upi',
    card = 'card'
}