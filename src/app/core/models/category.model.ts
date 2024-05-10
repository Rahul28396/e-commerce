export class Category{
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;

    constructor(id: number, name: string, image: string, creationAt: string, updatedAt: string){
        this.id = id;
        this.name = name;
        this.image = image;
        this.creationAt = creationAt;
        this.updatedAt = updatedAt;
    }
}