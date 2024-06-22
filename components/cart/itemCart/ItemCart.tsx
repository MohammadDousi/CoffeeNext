import { useAppDispatch } from "@/redux/store";

import appLogo from "@/public/image/svgs/logo.svg";
import Image from "next/image";
import { typeItemCart } from "@/utils/type.";
import { DeleteCartQuery, UpdateCartQuery } from "@/hooks/cartQuery";
import {
  addItemCart,
  deleteItemCartWithoutToken,
  updateCounterCartWithoutToken,
} from "@/redux/features/cartStore";
import { useEffect } from "react";
import { getCookie } from "@/utils/cookie";

const ItemCart = ({ product }: { product: typeItemCart }) => {
  const dispatch = useAppDispatch();

  const mutationUpdate = UpdateCartQuery();
  useEffect(() => {
    mutationUpdate?.data?.data &&
      dispatch(addItemCart(mutationUpdate.data.data));
  }, [mutationUpdate?.data?.data]);

  const mutationDelete = DeleteCartQuery();
  mutationDelete?.data?.data && dispatch(addItemCart(mutationDelete.data.data));
  useEffect(() => {
    mutationDelete?.data?.data &&
      dispatch(addItemCart(mutationDelete.data.data));
  }, [mutationDelete?.data?.data]);

  return (
    <>
      <div className="w-full p-2 lg:px-0 lg:py-5 flex flex-row justify-start items-center gap-2">
        <Image
          src={
            product?.image
              ? `${process.env.BASE_URL}/image/imageProduct/${product.image}`
              : appLogo
          }
          alt={product?.image}
          width={300}
          height={300}
          quality={100}
          unoptimized
          loading="lazy"
          className={
            product?.image
              ? "size-20 object-contain"
              : "size-20 object-contain p-5 saturate-0 opacity-50 object-center"
          }
        />

        <div className="w-full pl-2.5 flex flex-col justify-start items-start gap-1 lg:gap-2.5">
          {/* name */}
          <h5 className="w-full text-right font-medium text-sm lg:text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {product.product}
          </h5>

          {/* offer amount */}
          <span className="text-right font-normal text-xs text-[#0D9488] dark:text-successPrimaryColor">
            {(product.amount * (product.offer / 100)).toLocaleString()}
            <span className="text-right text-xs font-normal"> تومان تخفیف</span>
          </span>

          {/* amount */}
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-right font-bold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
              {product.amount.toLocaleString()}{" "}
              <span className="text-right text-xs font-normal">تومان</span>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex flex-row justify-center items-center rounded-full">
                <button
                  onClick={() => {
                    if (getCookie("accessToken")) {
                      mutationUpdate.mutate({
                        cartId: product.uuid,
                        counter: product.counter + 1,
                      });
                    } else {
                      dispatch(
                        updateCounterCartWithoutToken({
                          uuid: product.uuid,
                          fun: "plus",
                        })
                      );
                    }
                  }}
                  className="w-5 h-5 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor bg-bgLightColor dark:bg-bgDarkColor hover:bg-bgLightColor dark:hover:bg-bgDarkColor flex justify-center items-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <span className="px-2.5 pt-1 h-7 text-center text-base lg:text-lg flex justify-center items-center text-textPrimaryLightColor dark:text-textPrimaryDarkColor select-none leading-extra-none">
                  {product?.counter}
                </span>
                <button
                  disabled={product?.counter <= 1 && true}
                  onClick={() => {
                    if (getCookie("accessToken")) {
                      mutationUpdate.mutate({
                        cartId: product.uuid,
                        counter: product.counter - 1,
                      });
                    } else {
                      dispatch(
                        updateCounterCartWithoutToken({
                          uuid: product.uuid,
                          fun: "min",
                        })
                      );
                    }
                  }}
                  className={
                    product?.counter <= 1
                      ? "w-5 h-5 text-textDisableColor bg-bgLightColor/30 dark:bg-bgDarkColor/30 flex justify-center items-center rounded-full"
                      : "w-5 h-5 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor bg-bgLightColor dark:bg-bgDarkColor hover:bg-bgLightColor dark:hover:bg-bgDarkColor flex justify-center items-center rounded-full"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => {
                  if (getCookie("accessToken")) {
                    mutationDelete.mutate(product.uuid);
                  } else {
                    dispatch(deleteItemCartWithoutToken(product));
                  }
                }}
                className="w-5 h-5 text-red-400 hover:text-red-500 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />
    </>
  );
};

export default ItemCart;
