import Image from 'next/image';
import React from 'react';
import contact from "@/public/image/contact.png";

const LandSection = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
          <Image
            unoptimized
            src={contact}
            alt={"تصویر قهوه دوست داشتنی"}
            className="w-[296px] h-[305px] object-contain"
          />

          <div className="*:text-right *:text-textPrimaryLightColor *:dark:text-textPrimaryDarkColor flex flex-col justify-start items-start gap-5">
            <h1 className="text-2xl lg:text-5xl font-[Morabba] font-bold">
              یکی از بهترین قهوه ها !
            </h1>
            <h2 className="text-lg lg:text-3xl font-[Morabba] font-light">
              کیفیت قهوه را از ما بخواهید ...
            </h2>

            <div className="flex flex-row justify-start items-center gap-1">
              <span className="size-1 bg-textPrimaryLightColor dark:bg-textPrimaryDarkColor rounded-full"></span>
              <span className="size-1 bg-textPrimaryLightColor dark:bg-textPrimaryDarkColor rounded-full"></span>
              <span className="size-1 bg-textPrimaryLightColor dark:bg-textPrimaryDarkColor rounded-full"></span>
            </div>

            <p className="text-base lg:text-2xl font[Dana] font-normal leading-relaxed !text-justify">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
              پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
              است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
              را می سازد!
            </p>

            <button className="h-14 px-10 text-base lg:text-xl font-normal text-center !text-primaryColor hover:!text-textPrimaryLightColor hover:bg-gradient-to-r hover:from-primaryColor hover:to-secondaryColor border-2 border-primaryColor flex flex-row justify-center items-center !gap-2 duration-300 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className='size-6'
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              ثبت سفارش تلفنی
            </button>
          </div>
        </section>
    );
}

export default LandSection;
