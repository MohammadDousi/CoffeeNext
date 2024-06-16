import React from "react";

const ItemSkeletonProduct = () => {
  return (
    <div className="keen-slider__slide z-40 w-full lg:min-h-[450px] p-2 lg:p-5 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-between items-center lg:items-stretch gap-2 lg:gap-3 rounded-2xl">
      <div className="skeleton dark:skeleton-dark bg-bgLightColor dark:bg-bgDarkColor/50 size-32 lg:size-64"></div>

      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="skeleton dark:skeleton-dark w-3/4 h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>
        <div className="skeleton dark:skeleton-dark w-1/2 h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>
      </div>

      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-2.5 lg:gap-3">
          <span className="skeleton dark:skeleton-dark size-7 lg:size-9 bg-bgLightColor dark:bg-bgDarkColor/50 rounded-full"></span>
          <span className="skeleton dark:skeleton-dark size-7 lg:size-9 bg-bgLightColor dark:bg-bgDarkColor/50 rounded-full"></span>
        </div>
        <span className="skeleton dark:skeleton-dark w-1/2 h-4 lg:h-6 bg-bgLightColor dark:bg-bgDarkColor/50 rounded-full"></span>
      </div>
    </div>
  );
};

export default ItemSkeletonProduct;
