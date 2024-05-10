import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import ItemProduct from "../components/product/item-product/item-product";
import TitleSection from "../components/title-section/TitleSection";

// image
import headerBgDesktop from "../assets/image/headerBgDesktop.webp";
import farmer from "../assets/image/body-bg.png";

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

// keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

  const categories = [
    { uuid: 1, image: cat1, category_name: "قهوه دمی و اسپرسو" },
    { uuid: 2, image: cat2, category_name: "لوازم جانبی و تجهیزات" },
    { uuid: 3, image: cat3, category_name: "اسپرسو ساز" },
    { uuid: 4, image: cat4, category_name: "پک تستر قهوه" },
    { uuid: 5, image: cat5, category_name: "قهوه ترک" },
  ];

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
      {/* image back landing and image farmer */}

      <img
        src={headerBgDesktop}
        alt="headerBgDesktop"
        className="w-full h-auto xl:bg-contain bg-cover 2xl:bg-cover bg-no-repeat"
      />

      <section className="w-[1260px] relative pt-32 flex flex-col justify-center items-center gap-16">
        <img
          src={farmer}
          alt="farmer"
          className="w-full h-auto absolute top-0 object-contain bg-no-repeat opacity-25"
        />

        <TitleSection
          title={`جدیدترین محصولات`}
          subTitle={`فرآوری شده از دانه قهوه`}
          textLink={`مشاهده همه محصولات`}
          toLink={`#`}
        />

        <section className="grid grid-cols-[300px_300px_300px_300px] grid-rows-2 justify-between items-start gap-5">
          {products.map((item, index) => (
            <ItemProduct key={index} product={item} />
          ))}
        </section>

        <section className="flex flex-row justify-center items-center gap-5">
          <section className="w-[620px] h-[248px] relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-4xl font-bold text-right">
                انواع قهوه
              </h2>
              <h2 className="text-textPrimaryDarkColor text-xl font-normal text-right">
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

          <section className="w-[620px] h-[248px] relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-4xl font-bold text-right">
                پودر های فوری
              </h2>
              <h2 className="text-textPrimaryDarkColor text-xl font-normal text-right">
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

        <section className="w-full grid grid-cols-[200px_200px_200px_200px_200px] grid-rows-1 justify-between items-start">
          {categories.map((cat) => (
            <div
              className="size-full flex flex-col justify-center items-center gap-2"
              key={cat.category_name}
            >
              <img
                src={cat.image}
                alt={cat.category_name}
                className="size-[200px]"
              />
              <h4 className="text-xl font-bold">{cat.category_name}</h4>
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
};
