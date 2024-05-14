export class Product {
    id: number;
    title: string;
    category: ProductCategory;
    price: number;
    description: string;
    images: string[];
    isOutOfStock?: boolean;

    constructor(
        id: number,
        title: string,
        category: ProductCategory,
        price: number,
        description: string,
        images: string[]
    ) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.description = description;
        this.images = images;
    }
}

export class ProductCategory {
    id: number;
    name: string;
    image: string;

    constructor(id: number, name: string, image: string){
        this.id = id;
        this.name = name;
        this.image = image;
    }
}