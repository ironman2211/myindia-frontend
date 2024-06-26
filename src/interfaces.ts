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
