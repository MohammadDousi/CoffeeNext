"use client";

import { Product } from "@/app/type.";
import ItemCart from "./itemCart/ItemCart";

//image product
import { useEffect, useState } from "react";
import { RootState, useAppSelector } from "@/redux/store";

const Cart = () => {
  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);

  const cartList = useAppSelector(
    (state: RootState) => state.cartStore.listCart
  );

  useEffect(() => {
    console.log("🚀 ~ cartList:", cartList);
  }, [cartList]);

  const totalAmount = useAppSelector(
    (state: RootState) => state.cartStore.totalAmount
  );

  return (
    <div className="w-full max-h-96 px-4 lg:px-0 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-start items-end gap-4 overflow-hidden duration-300 cursor-default">
      <div className="w-full pt-5 pb-1 lg:py-0 flex justify-between items-center">
        <span className="hidden lg:block font-normal text-base lg:text-xs text-textDisableColor">
          {cartList.length} محصول
        </span>
        <span className="font-normal text-base lg:text-xs text-textPrimaryLightColor dark:text-textPrimaryDarkColor lg:text-primaryColor dark:lg:text-primaryColor">
          مشاهده سبد خرید
        </span>
      </div>

      <hr className="w-full block lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />

      <div className="w-full h-full overflow-y-auto">
        {cartList.length ? (
          cartList.map((item: Product, index: number) => (
            <ItemCart key={index} product={item} />
          ))
        ) : (
          <div className="w-full py-6 flex flex-col justify-center items-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 text-textDisableColor dark:text-white-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="text-sm lg:text-base font-medium text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
              هنوز محصولی به سبد خرید اضافه نشده
            </span>
          </div>
        )}
      </div>

      {cartList.length != 0 && (
        <div className="w-full absolute lg:relative bottom-5 lg:bottom-0 left-0 px-4 lg:px-0 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row lg:flex-row-reverse justify-start lg:justify-between items-center gap-4">
          <button
            onClick={() => console.log("go to cart page")}
            className="w-28 h-11 font-normal text-base lg:text-lg text-textPrimaryDarkColor bg-[#0D9488] rounded-xl duration-300"
          >
            ثبت سفارش
          </button>

          <div className="flex flex-col justify-start items-start gap-0.5">
            <span className="w-full text-right text-xs font-medium text-textDisableColor">
              مبلغ قابل پرداخت
            </span>

            <h6 className="text-right font-semibold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-row justify-start items-center gap-1">
              {totalAmount.toLocaleString()}
              <span className="text-right text-sm font-normal">تومان</span>
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
