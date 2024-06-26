export interface Product {
    id: string;
    linkName: string;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    images: Image[];
    details: string[];
  }
export interface Image {
    id: string;
    attributes: {
        name: string;
        url: string;
    };
}

export interface Cart {
    id: string;
    type: string;
    image:string;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    quantity: number;
  }