import React from "react";

const ItemSkeletonBlog = () => {
  return (
    <div className="w-full h-[150px] lg:h-auto p-2.5 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row lg:flex-col justify-start items-center gap-5 rounded-2xl">
      <div className="skeleton dark:skeleton-dark size-32 lg:w-full lg:h-[186px] bg-bgLightColor dark:bg-bgDarkColor/50 rounded-2xl !rounded-bl-4xl"></div>

      <div className="w-2/4 lg:w-full h-full py-5 lg:py-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
        <div className="skeleton dark:skeleton-dark w-full lg:w-3/4 h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>

        <hr className="w-full h-px lg:hidden bg-lineSecondaryColor dark:bg-white-10" />

        <div className="w-full lg:w-auto lg:pl-3 flex flex-row justify-between lg:justify-center items-center">
          <div className="lg:pr-5 lg:border-r lg:border-lineSecondaryColor lg:dark:border-white-10 flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-1 lg:gap-1.5">
            <div className="skeleton dark:skeleton-dark w-3.5 lg:w-14 h-3.5 lg:h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>
            <div className="skeleton dark:skeleton-dark w-3.5 lg:w-14 h-3.5 lg:h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>
            <div className="skeleton dark:skeleton-dark w-3.5 lg:w-14 h-3.5 lg:h-5 bg-bgLightColor dark:bg-bgDarkColor/50"></div>
          </div>
          <div className="skeleton dark:skeleton-dark lg:hidden w-1/2 h-5 bg-bgLightColor dark:bg-bgDarkColor/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemSkeletonBlog;
