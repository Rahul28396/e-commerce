import { Address } from "./address.model";
import { CartProduct } from "./cart-product.model";
import { PriceDetails } from "./price-details.model";

export class Order {
    id: number;
    paymentType: string;
    paymentDetals: PriceDetails;
    deliveryAddress: Address;
    items: CartProduct[];
    date: Date;

    constructor(id: number, paymentType: string, paymentDetals: PriceDetails, items: CartProduct[], date: Date, deliveryAddress: Address) {
        this.id = id;
        this.paymentType = paymentType;
        this.paymentDetals = paymentDetals;
        this.items = items;
        this.date = date;
        this.deliveryAddress = deliveryAddress;
    }
}