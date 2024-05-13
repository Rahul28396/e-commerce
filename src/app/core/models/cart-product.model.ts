export class CartProduct {
    id: number;
    productId: number;
    title: string;
    image: string;
    count?: number;
    price: number;

    constructor(id: number, productId: number, title: string, image: string, count: number, price: number) {
        this.id = id;
        this.productId = productId;
        this.title = title;
        this.image = image;
        this.count = count;
        this.price = price;
    }
}