import { StaticImageData } from "next/image";

export type Blog = {
  uuid: string;
  image: string | StaticImageData;
  title: string;
  date: string;
};

export type Product = {
  uuid: string;
  offer: number;
  image: string | StaticImageData;
  product: string;
  description: string;
  amount: number;
  offerAmount: number;
  rating: number;
  counterProduct: number | 0;
};

// { productId: string; productCounter: number }
// listCart: [{ productId: string; productCounter: number }] | string[];

export type CartStore = {
  listCart: Product[] | [];
  totalAmount: number;
};

export type Categories = {
  uuid: string;
  image: string | StaticImageData;
  category_name: string;
};

export type Services = {
  title: string;
  subTitle: string;
  icon: string | StaticImageData;
};
