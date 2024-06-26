"use client";

import TitleSection from "@/components/title-section/TitleSection";

import { useKeenSlider } from "keen-slider/react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Club from "@/components/club-banner/club";
import { GetProductQuery } from "@/hooks/productQuery";

import appLogo from "@/public/image/svgs/logo.svg";
import Loading from "@/app/Loading";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { typeItemCart } from "@/utils/type.";
import {
  addItemCart,
  addItemCartWithoutToken,
} from "@/redux/features/cartStore";
import { getCookie } from "@/utils/cookie";
import { SetInCartQuery } from "@/hooks/cartQuery";
import { useEffect } from "react";
import StarProduct from "@/components/item-product/StarProduct";

const ProductPage = () => {
  const params = useParams();
  const productId = String(params.productId);

  const { data: getProduct } = GetProductQuery(productId);

  // keen slider near products
  const [sliderRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 14,
    },
    rtl: true,
    drag: true,
    initial: 0,

    breakpoints: {
      "(min-width: 425px)": {
        loop: false,
        slides: { perView: 2, spacing: 14 },
      },
      "(min-width: 640px)": {
        loop: false,
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        loop: false,
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        loop: false,
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  // keen slider image product
  const [sliderRefImageProduct, instanceRefImageProduct] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 3.2,
      spacing: 10,
    },
    rtl: true,
    drag: true,
    initial: 0,

    breakpoints: {
      "(min-width: 425px)": {
        loop: false,
        slides: { perView: 3.2, spacing: 14 },
      },
      "(min-width: 640px)": {
        loop: false,
        slides: { perView: 4.2, spacing: 10 },
      },
      "(min-width: 768px)": {
        loop: false,
        slides: { perView: 6.2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        loop: false,
        slides: { perView: 2.5, spacing: 10 },
      },
    },
  });

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
    <main className="main">
      {!getProduct?.data ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
            {/* image product */}
            <div className="w-full lg:w-1/4 p-2.5 lg:pt-0 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-2xl shadow-defaultShadow flex flex-col justify-center items-center gap-4 lg:gap-0">
              <Image
                unoptimized
                src={
                  getProduct?.data.image
                    ? `${process.env.BASE_URL}/image/imageProduct/${getProduct.data.image}`
                    : appLogo
                }
                width={300}
                height={300}
                loading="lazy"
                alt={"image product is not dynamic"}
                className="size-60 lg:size-96 object-contain"
              />

              <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
                <span
                  className="lg:size-6 text-iconPrimaryColor  dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
                  onClick={() => instanceRefImageProduct.current?.prev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                {/* <div ref={sliderRefImageProduct} className="keen-slider">
              {imageProduct?.length !== 0 ? (
                imageProduct?.map((item, index) => (
                  <section key={index} className="keen-slider__slide">
                    <Image
                      unoptimized
                      src={item.image}
                      alt={"image product is not dynamic"}
                      className="bg-bgLightColor dark:bg-bgDarkColor/50 rounded-xl object-contain"
                    />
                  </section>
                ))
              ) : (
                <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
                  products is not found!
                </h2>
              )}
            </div> */}

                <span
                  className="lg:size-6 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
                  onClick={() => instanceRefImageProduct.current?.next()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </section>
            </div>

            {/* description */}
            <div className="w-full lg:w-2/4 flex flex-col justify-start items-start gap-5 lg:gap-10">
              <span className="py-1 px-5 text-sm lg:text-lg font-medium text-textPrimaryDarkColor dark:text-textPrimaryLightColor bg-primaryColor rounded-lg flex flex-row justify-start items-center gap-2">
                {getProduct?.data?.offer}% تخفیف ویژه
              </span>

              <h1 className="w-full text-2xl lg:text-4xl font-bold text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
                {getProduct?.data?.product}
              </h1>

              <p className="w-full lg:w-4/5 text-base lg:text-lg font-normal text-textPrimaryLightColor/80 dark:text-textDisableColor leading-8">
                {getProduct?.data?.description}
              </p>
            </div>

            {/* add to card  */}
            <div className="w-full lg:w-1/4 p-2.5 lg:p-5 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-2xl shadow-defaultShadow flex flex-col justify-start items-start gap-5">
              {/* star , comparison */}
              <div className="w-full flex flex-row justify-between items-center">
                <span className="text-iconSecondaryColor hover:text-[#0D9488] dark:hover:text-successPrimaryColor duration-300 flex flex-row justify-center items-center gap-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 lg:size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  مقایسه
                </span>
                <StarProduct
                  rating={getProduct?.data.rating}
                  comment_count={getProduct.data.comment_count}
                />
              </div>

              <hr className="w-full h-px bg-[#D1D5DB] dark:bg-white-10 rounded-full" />

              <div className="flex flex-col justify-start items-start gap-2">
                <span className="w-full text-right text-xs font-normal text-textDisableColor">
                  مبلغ قابل پرداخت
                </span>
                <div className="flex flex-row flex-wrap justify-center items-center gap-3">
                  <span
                    className={
                      getProduct?.data?.amount != -1
                        ? "text-right font-bold text-lg lg:text-2xl text-[#0D9488] dark:text-successPrimaryColor"
                        : "text-right font-medium text-lg lg:text-2xl text-errorColor"
                    }
                  >
                    {getProduct?.data?.amount != -1
                      ? getProduct?.data?.offer != 0
                        ? (
                            getProduct?.data.amount -
                            (getProduct?.data.offer / 100) *
                              getProduct?.data.amount
                          ).toLocaleString()
                        : getProduct?.data?.amount.toLocaleString()
                      : "فعلا موجود نیست"}

                    {getProduct?.data?.amount != -1 && (
                      <span className="text-right text-sm font-normal">
                        {" "}
                        تومان
                      </span>
                    )}
                  </span>
                  {getProduct?.data?.offer != 0 &&
                    getProduct?.data?.amount != -1 && (
                      <div className="relative text-right font-medium text-lg lg:text-xl text-[#9CA3AF] flex flex-row justify-start items-center">
                        <div className="w-full h-px absolute top-2.5 lg:top-3 bg-errorColor"></div>
                        <span>
                          {getProduct?.data?.amount.toLocaleString()}{" "}
                          <span className="text-right text-sm font-normal">
                            تومان
                          </span>
                        </span>
                      </div>
                    )}
                </div>
              </div>

              <button
                onClick={() => {
                  const found = cartList?.find(
                    (x: typeItemCart) => x.product_id === getProduct.data?.uuid
                  );
                  if (found) return false;

                  if (getCookie("accessToken")) {
                    getProduct.data?.amount != -1 &&
                      !found &&
                      mutationSetInCart.mutate(getProduct.data?.uuid);
                  } else {
                    getProduct.data?.amount != -1 &&
                      !found &&
                      dispatch(addItemCartWithoutToken(getProduct.data));
                  }
                }}
                className="w-full h-12 font-normal text-base lg:text-lg text-textPrimaryDarkColor bg-successPrimaryColor hover:bg-successSecondaryColor rounded-xl duration-300 flex flex-row justify-center items-center gap-2 lg:gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 lg:size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                افزودن به سبد خرید
              </button>
            </div>
          </div>

          <TitleSection
            title={`محصولات مشابه`}
            subTitle={``}
            textLink={`مشاهده بیشتر`}
            toLink={`#`}
          />

          <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
            {/* <span
          className="lg:size-11 absolute z-40 lg:left-28 lg:-top-32 text-iconPrimaryColor  dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-6 "
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}

            {/* <div ref={sliderRef} className="keen-slider">
          {products?.length !== 0 ? (
            products?.map((item, index) => (
              <section key={index} className="keen-slider__slide">
                <ItemProduct product={item} />
              </section>
            ))
          ) : (
            <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
              products is not found!
            </h2>
          )}
        </div> */}

            {/* <span
          className="lg:size-11 absolute z-40 lg:left-0 lg:-top-32 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
          </section>

          {/* club */}
          <Club />
        </>
      )}
    </main>
  );
};

export default ProductPage;
