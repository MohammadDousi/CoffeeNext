import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import ItemBlog from "../components/blog/item-blog/ItemBlog";
import TitleSection from "../components/title-section/TitleSection";

// image
import headerBgDesktop from "../assets/image/headerBgDesktop.webp";
import headerBgMobile from "../assets/image/headerBgMobile.webp";
import farmer from "../assets/image/body-bg.png";
import contact from "../assets/image/contact.png";

//image product
import p1 from "../assets/image/products/p1.png";
import p2 from "../assets/image/products/p2.png";
import p3 from "../assets/image/products/p3.png";
import p4 from "../assets/image/products/p4.png";

//image product 2
import p5 from "../assets/image/products/p5.png";
import p6 from "../assets/image/products/p6.png";
import p7 from "../assets/image/products/p7.png";
import p8 from "../assets/image/products/p8.png";

// image category
import categoryRight from "../assets/image/categories/category-right.jpg";
import categoryLeft from "../assets/image/categories/category-left.jpg";
import cat1 from "../assets/image/categories/category1.png";
import cat2 from "../assets/image/categories/category2.png";
import cat3 from "../assets/image/categories/category3.png";
import cat4 from "../assets/image/categories/category4.png";
import cat5 from "../assets/image/categories/category5.png";

// image blog
import blogImage1 from "../assets/image/blogs/blog-1.png";
import blogImage2 from "../assets/image/blogs/blog-2.png";
import blogImage3 from "../assets/image/blogs/blog-3.png";
import blogImage4 from "../assets/image/blogs/blog-4.png";

// keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ItemProduct from "../components/product/item-product/ItemProduct";

export default function HomePage() {
  const products = [
    {
      uuid: 1,
      image: p1,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 2,
      image: p2,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 3,
      image: p3,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 4,
      image: p4,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 5,
      image: p3,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 6,
      image: p4,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 7,
      image: p1,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 8,
      image: p2,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
  ];

  const products2 = [
    {
      uuid: 1,
      image: p5,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 2,
      image: p6,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 3,
      image: p7,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 4,
      image: p8,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 5,
      image: p5,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 6,
      image: p6,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 7,
      image: p7,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 8,
      image: p8,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
  ];

  const blogs = [
    {
      uuid: 1,
      image: blogImage1,
      title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
      date: "1402/5/21",
    },
    {
      uuid: 2,
      image: blogImage2,
      title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
      date: "1402/5/21",
    },
    {
      uuid: 3,
      image: blogImage3,
      title: "طرز تهیه یک فنجان کافه زینو برزیلی",
      date: "1402/5/21",
    },
    {
      uuid: 4,
      image: blogImage4,
      title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
      date: "1402/5/21",
    },
  ];

  const categories = [
    { uuid: 1, image: cat1, category_name: "قهوه دمی و اسپرسو" },
    { uuid: 2, image: cat2, category_name: "لوازم جانبی و تجهیزات" },
    { uuid: 3, image: cat3, category_name: "اسپرسو ساز" },
    { uuid: 4, image: cat4, category_name: "پک تستر قهوه" },
    { uuid: 5, image: cat5, category_name: "قهوه ترک" },
  ];

  // keen slider
  const animation = { duration: 80000, easing: (t) => t };
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 20,
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

        created(s) {
          s.moveToIdx(10, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 10, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 10, true, animation);
        },
      },
    },
  });

  return (
    <main className="w-screen flex flex-col justify-center items-center">
      <div className="w-full lg:h-screen pb-6 relative flex flex-row justify-center items-center lg:items-center">
        <img
          src={window.innerWidth <= 400 ? headerBgMobile : headerBgDesktop}
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

        <div className="absolute lg:left-60 text-textPrimaryDarkColor flex flex-col justify-start items-start gap-2 lg:gap-5 ">
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

      <section className="w-full lg:w-[1260px] relative pt-32 pb-20 px-4 lg:px-0 flex flex-col gap-20">
        <img
          src={farmer}
          alt="farmer"
          className="w-full h-auto absolute top-0 object-contain bg-no-repeat opacity-15 dark:opacity-75"
        />

        <TitleSection
          title={`جدیدترین محصولات`}
          subTitle={`فرآوری شده از دانه قهوه`}
          textLink={`مشاهده همه محصولات`}
          toLink={`#`}
        />

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
          {products.map((item, index) => (
            <ItemProduct key={index} product={item} />
          ))}
        </section>

        {/* banner categories */}
        <section className="flex md:flex-row flex-col justify-center items-center gap-5">
          <section className="md:w-1/2 w-full h-36 lg:h-60 relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-2xl lg:text-4xl font-bold text-right">
                انواع قهوه
              </h2>
              <h2 className="text-textPrimaryDarkColor text-base lg:text-xl font-normal text-right">
                ترکیبی و تک خاستگاه
              </h2>
            </div>

            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <img
              src={categoryRight}
              alt="categoryRight"
              className="size-full absolute z-0 object-cover"
            />
          </section>

          <section className="md:w-1/2 w-full h-36 lg:h-60 relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-2xl lg:text-4xl font-bold text-right">
                پودر های فوری
              </h2>
              <h2 className="text-textPrimaryDarkColor text-base lg:text-xl font-normal text-right">
                نسکافه ، هات چاکلت ، ماسالا
              </h2>
            </div>
            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <img
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
              <img
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
          toLink={``}
        />

        <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
          <span
            className="size-11 absolute z-40 left-14 -top-28 bg-bgItemLightColor flex justify-center items-center rounded-full cursor-pointer select-none"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6 text-iconPrimaryColor"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div ref={sliderRef} className="keen-slider">
            {products2?.length !== 0 &&
              products2?.map((item) => (
                <Link key={item.uuid} to={`#`}>
                  <section className="keen-slider__slide">
                    <ItemProduct product={item} />
                  </section>
                </Link>
              ))}

            {!products2?.length === 0 && (
              <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
                products is not found!
              </h2>
            )}
          </div>

          <span
            className="size-11 absolute z-40 left-0 -top-28 bg-bgItemLightColor flex justify-center items-center rounded-full cursor-pointer select-none"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-6 text-iconPrimaryColor"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </section>

        <TitleSection
          title={`مطالب خواندنی`}
          subTitle={``}
          textLink={`مشاهده همه مطالب`}
          toLink={`#`}
        />

        <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-rows-1 items-start gap-5">
          {blogs.map((item, index) => (
            <ItemBlog key={index} blog={item} />
          ))}
        </section>

        <section className="w-full mt-5 flex flex-col lg:flex-row justify-start items-start gap-5">
          <img
            src={contact}
            alt={contact}
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

            <button className="w-[13.5rem] h-[3.75rem] p-4 lg:text-xl text-base font-[Dana] font-normal text-center !text-primaryColor hover:!text-textPrimaryLightColor hover:bg-gradient-to-r hover:from-primaryColor hover:to-secondaryColor border-2 hover:border-0 border-primaryColor rounded-full flex flex-row justify-center items-center gap-2 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-[26px]"
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
      </section>
    </main>
  );
}

HomePage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      category_name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      image: PropTypes.string,
      product: PropTypes.string,
      amount: PropTypes.number,
      rating: PropTypes.number,
      offer: PropTypes.number,
      offer_amount: PropTypes.number,
    })
  ),
  products2: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      image: PropTypes.string,
      product: PropTypes.string,
      amount: PropTypes.number,
      rating: PropTypes.number,
      offer: PropTypes.number,
      offer_amount: PropTypes.number,
    })
  ),
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
