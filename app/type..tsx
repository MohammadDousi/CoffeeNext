import { StaticImageData } from "next/image";

export type typeBlog = {
  uuid: string;
  image: string | StaticImageData;
  title: string;
  date: string;
};

export type typeProduct = {
  uuid: string;
  category_id: string;
  offer: number;
  image: string | StaticImageData;
  product: string;
  description: string;
  amount: number;
  offerAmount: number;
  rating: number;
  published: boolean;
  created_at: string;
  updated_at: string;
  counterProduct?: number | 0;
};

// { productId: string; productCounter: number }
// listCart: [{ productId: string; productCounter: number }] | string[];

export type typeCartStore = {
  listCart: typeProduct[] | [];
  totalAmount: number;
};

export type typeCategories = {
  uuid: string;
  image: string | StaticImageData;
  category_name: string;
};

export type typeServices = {
  title: string;
  subTitle: string;
  icon: string | StaticImageData;
};
