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
  image: string;
  product: string;
  description: string;
  amount: number;
  rating: number;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
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

export type typeRegisterForm = {
  name: string;
  mobile: string;
  email: string;
  password: string;
  password_verify: string;
};

export type typeLoginForm = {
  mobile: string;
  password: string;
};

export type typeLoginOTP = {
  mobile: string;
  otpCode?: string;
};
