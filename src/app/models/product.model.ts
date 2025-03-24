export interface Product {
  id: number;
  name: string;
  description: string;
  ean: string;
  upc: string;
  price: number;
  categories: string[];
  taxes: number;
  images: {
    title: string;
    description: string;
    url: string; 
  }[];
}