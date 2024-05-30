import { StaticImageData } from "next/image";

export type Blog = {
  uuid: string;
  image: string;
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
  offer_amount: number;
  rating: number;
};

export type Categories = {
  uuid: string;
  image: string;
  category_name: string;
};

export type Services = {
  title: string;
  subTitle: string;
  icon: string;
};
