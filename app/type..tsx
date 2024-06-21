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
  comment_count: number;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
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
  typeSign?: string;
};

export type typeProfileUser = {
  uuid: string;
  name: string;
  mobile: string;
  email: string;
  password: string;
  avator: string;
  status: boolean;
  role: string;
  verify: boolean;
  created_at: string;
};

// cart
export type typeCartStore = {
  listCart: typeItemCart[] | [];
  totalAmount: number;
};

// for add to cart
export type typeCart = {
  productId: string;
  count: number;
};

// for export and show to user
export type typeItemCart = {
  uuid: string;
  product_id: string;
  product: string;
  amount: number;
  counter: number;
  offer: number;
  image: string;
};

export type typeToken = {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
};
