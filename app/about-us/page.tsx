import Image, { StaticImageData } from "next/image";
import TitleSection from "@/components/title-section/TitleSection";

import shop1 from "@/public/image/shop/coffeeshop1.jpeg";
import shop2 from "@/public/image/shop/coffeeshop2.jpg";
import shop3 from "@/public/image/shop/coffeeshop3.jpg";
import shop4 from "@/public/image/shop/coffeeshop4.webp";
import Header from "@/components/header/Header";

export const metadata = {
  title: "کافه عربیکا -  درباره ما",
};

type Branch = {
  city: string;
  image: string | StaticImageData;
  address: string;
};

const AboutUs = () => {
  const branch: Branch[] = [
    { city: "دزفول", image: shop1, address: "خیابان شریعتی نبش پیام آوران" },
    {
      city: "تهران",
      image: shop2,
      address: "میدان انقلاب، جنب سینما، نرسیده به دانشگاه",
    },
    {
      city: "مشهد",
      image: shop3,
      address: "کوه سنگی، پارک کوه سنگی، درب شماه 3",
    },
    { city: "اصفهان", image: shop4, address: "ضلع شرقی پل خواجو" },
  ];

  return (
    <main className="w-full lg:w-[1260px] px-4 lg:px-0 pt-24 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-start gap-10 lg:gap-20">

      <div className="w-full flex flex-col justify-center items-start gap-5 lg:gap-10">
        <TitleSection
          title="درباره کافه عربیکا"
          subTitle=""
          textLink=""
          toLink=""
        />
        <p className="w-full text-base lg:text-2xl font-normal text-textPrimaryLightColor dark:text-textDisableColor !leading-loose text-justify">
          ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و
          توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در
          ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به
          کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم. کیفیت قهوه
          را از ما بخواهید ... فضای گرم و دنج ما را احساس کنید، جایی که همه می
          توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه
          داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما
          روز شما را می سازد!
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-5 lg:gap-10">
        <TitleSection
          title="شعبه ها"
          subTitle="در سراسر ایران زمین"
          textLink=""
          toLink=""
        />

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-start items-start gap-5">
          {branch.map((b, index) => (
            <div
              key={index}
              className="w-full relative flex flex-row justify-start items-start gap-5 rounded-2xl overflow-hidden"
            >
              <div className="absolute bottom-0 z-20 py-5 px-5 text-textPrimaryDarkColor flex flex-col justify-start items-start gap-1">
                <h5 className="text-xl lg:text-3xl font-bold">{b.city}</h5>
                <h6 className="text-base lg:text-xl text-textDisableColor">
                  {b.address}
                </h6>
              </div>
              <span className="w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-t from-[#000000] to-transparent"></span>
              <Image
                src={b.image}
                alt={b.city}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
