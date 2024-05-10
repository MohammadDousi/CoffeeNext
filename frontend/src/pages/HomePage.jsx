import PropTypes from "prop-types";

// components
import ItemProduct from "../components/product/item-product/item-product";
import TitleSection from "../components/title-section/TitleSection";

// image
import headerBgDesktop from "../assets/image/headerBgDesktop.webp";
import farmer from "../assets/image/body-bg.png";

// image category
import categoryRight from "../assets/image/categories/category-right.jpg";
import categoryLeft from "../assets/image/categories/category-left.jpg";
import cat1 from "../assets/image/categories/category1.png";
import cat2 from "../assets/image/categories/category2.png";
import cat3 from "../assets/image/categories/category3.png";
import cat4 from "../assets/image/categories/category4.png";
import cat5 from "../assets/image/categories/category5.png";
import backPattern from "../assets/image/body-bg.png";

export default function HomePage() {
  const categories = [
    { uuid: 1, image: cat1, category_name: "قهوه دمی و اسپرسو" },
    { uuid: 2, image: cat2, category_name: "لوازم جانبی و تجهیزات" },
    { uuid: 3, image: cat3, category_name: "اسپرسو ساز" },
    { uuid: 4, image: cat4, category_name: "پک تستر قهوه" },
    { uuid: 5, image: cat5, category_name: "قهوه ترک" },
  ];

  return (
    <main className="w-screen flex flex-col justify-center items-center">
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
          toLink={`#`}
        />

        <section className="grid grid-cols-[300px_300px_300px_300px] grid-rows-2 justify-between items-start gap-5">
          <ItemProduct />
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
};
