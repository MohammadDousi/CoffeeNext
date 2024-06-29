"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";

// components
import ItemProduct from "@/components/item-product/ItemProduct";
import ItemBlog from "@/components/item-blog/ItemBlog";
import TitleSection from "@/components/title-section/TitleSection";
import Club from "@/components/club-banner/club.jsx";

// image
import headerBgDesktop from "@/public/image/headerBgDesktop.webp";
import headerBgMobile from "@/public/image/headerBgMobile.webp";
import farmer from "@/public/image/body-bg.png";

// image category
import categoryRight from "@/public/image/categories/category-right.jpg";
import categoryLeft from "@/public/image/categories/category-left.jpg";
import cat1 from "@/public/image/categories/category1.png";
import cat2 from "@/public/image/categories/category2.png";
import cat3 from "@/public/image/categories/category3.png";
import cat4 from "@/public/image/categories/category4.png";
import cat5 from "@/public/image/categories/category5.png";

// image blog
import blogImage1 from "@/public/image/blogs/blog-1.png";
import blogImage2 from "@/public/image/blogs/blog-2.png";
import blogImage3 from "@/public/image/blogs/blog-3.png";
import blogImage4 from "@/public/image/blogs/blog-4.png";
import contact from "@/public/image/contact.png";

import { typeBlog, typeCategories, typeProduct } from "../utils/type.";
import Service from "@/components/service/Service";
import MostSelling from "@/components/most-selling/MostSelling";
import { GetProductsQuery } from "@/hooks/productQuery";
import ItemSkeletonProduct from "@/components/item-product/ItemSkeletonProduct";
import ItemSkeletonBlog from "@/components/item-blog/ItemSkeletonBlog";

export default function Home() {
  const blogs: typeBlog[] = [
    {
      uuid: "1",
      image: blogImage1,
      title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
      date: "1402/5/21",
    },
    {
      uuid: "2",
      image: blogImage2,
      title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
      date: "1402/5/21",
    },
    {
      uuid: "3",
      image: blogImage3,
      title: "طرز تهیه یک فنجان کافه زینو برزیلی",
      date: "1402/5/21",
    },
    {
      uuid: "4",
      image: blogImage4,
      title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
      date: "1402/5/21",
    },
  ];

  const categories: typeCategories[] = [
    { uuid: "1", image: cat1, category_name: "قهوه دمی و اسپرسو" },
    { uuid: "2", image: cat2, category_name: "لوازم جانبی و تجهیزات" },
    { uuid: "3", image: cat3, category_name: "اسپرسو ساز" },
    { uuid: "4", image: cat4, category_name: "پک تستر قهوه" },
    { uuid: "5", image: cat5, category_name: "قهوه ترک" },
  ];

  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    setWidthScreen(window.innerWidth);
    Aos.init();
  }, []);

  const { data: getProducts } = GetProductsQuery();

  return (
    <main className="main lg:!w-full pt-16 lg:pt-0 px-0 !items-center">
      <div className="w-full lg:h-screen pb-0 lg:pb-6 relative flex flex-row justify-center items-center lg:items-center">
        <Image
          unoptimized
          src={widthScreen <= 425 ? headerBgMobile : headerBgDesktop}
          alt="headerBgDesktop"
          className="w-full h-full object-contain lg:object-cover"
        />
        <div className="hidden absolute bottom-6 z-40 lg:flex justify-center items-center">
          <svg
            width="100"
            height="22"
            viewBox="0 0 100 22"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-bgLightColor dark:fill-[#27272A]"
          >
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
          </svg>
          <span
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="150"
            data-aos-mirror="true"
            data-aos-once="true"
            className="size-8 absolute -bottom-4 rounded-full border-2 border-primaryColor text-primaryColor flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6 animate-pulse"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="hidden w-full h-52 absolute bottom-6 z-40 lg:flex justify-center items-end overflow-hidden">
          <div className="w-full h-1/2 relative -bottom-12 flex justify-center items-center">
            <span
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-mirror="true"
              data-aos-once="true"
              className="animate__animated animate__zoomOut animate__infinite circle-1 size-24 absolute rounded-full border-2 border-[#fff] text-primaryColor flex justify-center items-center opacity-80 duration-300"
            ></span>
            <span className="animate__animated animate__zoomOut animate__infinite circle-2 size-36 absolute rounded-full border-2 border-[#fff] text-primaryColor flex justify-center items-center opacity-50 duration-300"></span>
            <span className="animate__animated animate__zoomOut animate__infinite circle-3 size-[203px] absolute rounded-full border-2 border-[#fff] text-primaryColor flex justify-center items-center opacity-25 duration-300"></span>
          </div>
        </div>

        <div className="absolute left-16 lg:left-60 text-textPrimaryDarkColor flex flex-col justify-center items-end gap-2 lg:gap-5 ">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-mirror="true"
            data-aos-once="true"
            className="font-[Morabba] font-bold text-2xl lg:text-6xl"
          >
            قهوه عربیکا تانزانیا
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="250"
            data-aos-mirror="true"
            data-aos-once="true"
            className="font-[Morabba] font-light text-xl   lg:text-5xl"
          >
            یک فنجان بالانس !
          </h1>
          <hr
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="300"
            data-aos-mirror="true"
            data-aos-once="true"
            className="w-28 lg:w-24 h-px bg-primaryColor rounded-full"
          />
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="400"
            data-aos-mirror="true"
            data-aos-once="true"
            className="w-1/2 lg:w-[460px] font-[Dana] font-normal text-xs lg:text-2xl text-justify"
          >
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </h1>
        </div>
      </div>

      <section className="w-full lg:w-[1260px] relative py-5 lg:pt-0 px-4 lg:px-0 flex flex-col justify-start items-start gap-12 lg:gap-20">
        <Image
          unoptimized
          src={farmer}
          alt="farmer"
          className="farmerPattern"
        />

        <TitleSection
          title={`جدیدترین محصولات`}
          subTitle={`فرآوری شده از دانه قهوه`}
          textLink={`مشاهده همه محصولات`}
          toLink={`#`}
        />

        <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
          {getProducts?.data
            ? getProducts?.data
                ?.slice(0, 8)
                .map((item: typeProduct, index: number) => (
                  <ItemProduct key={index} product={item} />
                ))
            : [...Array(Number(8))].map((i, index) => (
                <ItemSkeletonProduct key={index} />
              ))}
        </section>

        {/* banner categories */}
        <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-5 ">
          <section className="w-full lg:w-1/2 h-36 lg:h-60 relative flex flex-col justify-center items-start rounded-2xl overflow-hidden select-none cursor-pointer">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-2xl lg:text-4xl font-bold text-right">
                انواع قهوه
              </h2>
              <h2 className="text-textPrimaryDarkColor text-base lg:text-xl font-normal text-right">
                ترکیبی و تک خاستگاه
              </h2>
            </div>

            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <Image
              unoptimized
              src={categoryRight}
              alt="categoryRight"
              className="size-full absolute z-0 object-cover"
            />
          </section>

          <section className="w-full lg:w-1/2 h-36 lg:h-60 relative flex flex-col justify-center items-start rounded-2xl overflow-hidden select-none cursor-pointer">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-2xl lg:text-4xl font-bold text-right">
                پودر های فوری
              </h2>
              <h2 className="text-textPrimaryDarkColor text-base lg:text-xl font-normal text-right">
                نسکافه ، هات چاکلت ، ماسالا
              </h2>
            </div>
            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <Image
              unoptimized
              src={categoryLeft}
              alt="categoryLeft"
              className="size-full absolute z-0 object-cover"
            />
          </section>
        </section>

        {/* categories */}
        <section className="w-full flex flex-row flex-wrap lg:grid lg:grid-cols-5 justify-center items-center gap-7">
          {categories.map((cat) => (
            <div
              className="flex flex-col justify-stretch items-center gap-2"
              key={cat.category_name}
            >
              <Image
                unoptimized
                src={cat.image}
                alt={cat.category_name}
                className="size-[100px] lg:size-[200px]"
              />
              <h4 className="text-sm lg:text-xl font-[Dana] font-semibold text-center text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
                {cat.category_name}
              </h4>
            </div>
          ))}
        </section>

        <TitleSection
          title={`محصولات پر فروش`}
          subTitle={`پیشنهاد قهوه خور ها ...`}
          textLink=""
          toLink={""}
        />

        <MostSelling products={getProducts?.data.slice(0, 12)} />

        {/* club */}
        <Club />

        <TitleSection
          title={`مطالب خواندنی`}
          subTitle={``}
          textLink={`مشاهده همه`}
          toLink={`#`}
        />

        <section className="w-full grid grid-cols-1 lg:grid-cols-4 justify-center items-start gap-5">
          {blogs ? (
            blogs.map((item, index) => <ItemBlog key={index} blog={item} />)
          ) : (
            <ItemSkeletonBlog />
          )}
        </section>


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

        <Service />
      </section>
    </main>
  );
}
