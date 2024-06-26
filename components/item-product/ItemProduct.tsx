import { typeItemCart, typeProduct } from "@/utils/type.";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import appLogo from "@/public/image/svgs/logo.svg";
import { SetInCartQuery } from "@/hooks/cartQuery";
import { getCookie } from "@/utils/cookie";
import {
  addItemCart,
  addItemCartWithoutToken,
} from "@/redux/features/cartStore";
import StarProduct from "./StarProduct";

const ItemProduct = ({ product }: { product: typeProduct }) => {
  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);

  const dispatch = useAppDispatch();
  const cartList = useAppSelector(
    (state: RootState) => state.cartStore.listCart
  );

  const mutationSetInCart = SetInCartQuery();

  useEffect(() => {
    mutationSetInCart?.data?.data &&
      dispatch(addItemCart(mutationSetInCart.data.data));
  }, [mutationSetInCart?.data?.data]);

  return (
    <div className="keen-slider__slide w-full lg:min-h-[450px] p-2 lg:p-5 relative bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-between items-center lg:items-stretch gap-2 lg:gap-3 rounded-2xl shadow-defaultShadow overflow-hidden">
      <Link
        href={`/product/${product?.uuid}`}
        className="w-full flex flex-col justify-between items-center lg:items-stretch gap-2 lg:gap-5"
      >
        {product?.offer != 0 && (
          <span className="absolute top-2.5 lg:top-5  right-2.5 lg:right-5 pt-1 px-3 text-xs lg:text-base font-medium bg-primaryColor text-textPrimaryDarkColor dark:text-textPrimaryLightColor rounded-full flex justify-center items-center">
            <p>{product?.offer}%</p>
          </span>
        )}

        <Image
          src={
            product?.image
              ? `${process.env.BASE_URL}/image/imageProduct/${product.image}`
              : appLogo
          }
          alt={product?.image}
          width={350}
          height={350}
          quality={100}
          unoptimized
          loading="lazy"
          className={
            product?.image
              ? "size-32 lg:size-64 object-contain object-center"
              : "size-32 p-8 lg:size-64 lg:p-16 saturate-0 opacity-50 object-contain object-center"
          }
        />

        <div className="w-full flex flex-col justify-start items-start gap-3">
          {/* name */}
          <h5 className="w-full text-right font-medium text-sm lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {widthScreen <= 425
              ? // eslint-disable-next-line react/prop-types
                product?.product?.length >= 34 &&
                // eslint-disable-next-line react/prop-types
                `${product?.product?.slice(0, 34)}...`
              : product?.product}
          </h5>
          {/* amount  */}
          <div className="w-full flex flex-row justify-start items-center gap-2">
            {/* print original amount or offer amount product */}
            <span
              className={
                product?.amount != -1
                  ? "text-right font-bold text-base lg:text-xl text-[#0D9488] dark:text-successPrimaryColor"
                  : "text-right font-medium text-base lg:text-xl text-errorColor"
              }
            >
              {product?.amount != -1
                ? product?.offer != 0
                  ? (
                      product?.amount -
                      (product?.offer / 100) * product?.amount
                    ).toLocaleString()
                  : product?.amount.toLocaleString()
                : "فعلا موجود نیست"}

              {product?.amount != -1 && (
                <span className="text-right text-xs font-normal"> تومان</span>
              )}
            </span>

            {/* print original amount product */}

            {product?.offer != 0 && product?.amount != -1 && (
              <div className="relative text-right font-medium text-base lg:text-xl text-[#9CA3AF] flex flex-row justify-start items-center">
                <div className="w-full h-px absolute top-2.5 lg:top-3 bg-errorColor"></div>
                <span>
                  {product?.amount.toLocaleString()}{" "}
                  <span className="hidden lg:inline text-right text-xs font-normal">
                    تومان
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
      {/* star , cart , comparison */}
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-2.5 lg:gap-3">
          {/* add to cart button */}
          <span
            onClick={() => {
              const found = cartList?.find(
                (x: typeItemCart) => x.product_id === product?.uuid
              );
              if (found) return false;

              if (getCookie("accessToken")) {
                product?.amount != -1 &&
                  !found &&
                  mutationSetInCart.mutate(product?.uuid);
              } else {
                product?.amount != -1 &&
                  !found &&
                  dispatch(addItemCartWithoutToken(product));
              }
            }}
            className="size-7 lg:size-9 bg-gray-100 hover:bg-[#0D9488] dark:bg-[#27272A] dark:hover:bg-successPrimaryColor text-iconSecondaryColor hover:text-[#fff] rounded-full flex justify-center items-center duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>

          {/* comparison button */}
          <span className="text-iconSecondaryColor hover:text-[#0D9488] dark:hover:text-successPrimaryColor duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </span>
        </div>

        {/* rating star product */}
        <StarProduct
          rating={product?.rating}
          comment_count={product.comment_count}
        />
      </div>
    </div>
  );
};

export default ItemProduct;
