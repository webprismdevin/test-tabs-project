
export interface IProduct {
    product_id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    type:string;
    image: string;
    reviews: {
        count: number;
        rating: number;
    },
    actions:{
        add_to_cart:boolean
    }
}