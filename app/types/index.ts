/**
 * Interface for product data. Contains properties like product ID, name, description, 
 * price, currency, type, image URL, review data, and cart actions. Used to represent 
 * product information across the application.
 */

export interface IProduct {
    product_id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    type: string;
    image: string;
    reviews: {
        count: number;
        rating: number;
    },
    actions: {
        add_to_cart: boolean
    }
}