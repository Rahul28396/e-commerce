export class PriceDetails {
    totalMrp: number;
    discountOnMrp: number;
    couponDiscount: number;
    platformFee: number;
    shippingFee: number;

    constructor(
        totalMrp: number,
        discountOnMrp: number = 328,
        couponDiscount: number = 128,
        platformFee: number = 38,
        shippingFee: number = 150,
    ) {
        this.totalMrp = totalMrp;
        this.discountOnMrp = discountOnMrp;
        this.couponDiscount = couponDiscount;
        this.platformFee = platformFee;
        this.shippingFee = shippingFee;
    }
}