export class Address {
    id: number
    name: string;
    phone: number;
    pincode: number;
    area: string;
    locality: string;
    district: string;
    state: string;
    isDefault: boolean;
    type: string;

    constructor(
        name: string,
        phone: number,
        pincode: number,
        area: string,
        locality: string,
        district: string,
        state: string,
        isDefault: boolean,
        type: string
    ){
        this.id = 0;
        this.name = name;
        this.phone = phone;
        this.pincode = pincode;
        this.area = area;
        this.locality = locality;
        this.district = district;
        this.state = state;
        this.isDefault = isDefault;
        this.type = type;
    }
}