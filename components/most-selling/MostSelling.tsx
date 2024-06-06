"use client";

import { useKeenSlider } from "keen-slider/react";
import { typeProduct } from "@/app/type.";

import ItemProduct from "../item-product/ItemProduct";
import { useEffect } from "react";

const MostSelling = ({ products }: { products: typeProduct[] }) => {
  // keen slider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 16,
    },
    rtl: true,
    drag: true,

    breakpoints: {
      "(min-width: 425px)": {
        loop: false,
        slides: { perView: 2, spacing: 16 },
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

  useEffect(() => {
    instanceRef?.current?.update();
 }, [products]);

  return (
    <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
      <span
        className="lg:size-11 absolute z-40 lg:left-14 lg:-top-32 text-iconPrimaryColor  dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
        onClick={() => instanceRef.current?.prev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <div ref={sliderRef} className="keen-slider">
        {products ? (
          products?.map((item: typeProduct, index) => (
            <ItemProduct product={item} key={index} />
          ))
        ) : (
          <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
            products is not found!
          </h2>
        )}
      </div>

      <span
        className="lg:size-11 absolute z-40 lg:left-0 lg:-top-32 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
        onClick={() => instanceRef.current?.next()}
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
  );
};

export default MostSelling;
