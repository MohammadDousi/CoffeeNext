
// image services
import Image from "next/image";
import support from "@/public/image/svgs/services/support.svg";
import pitcher from "@/public/image/svgs/services/pitcher.svg";
import expressDelivery from "@/public/image/svgs/services/express-delivery.svg";
import coffee from "@/public/image/svgs/services/coffee.svg";
import { typeServices } from "@/utils/type.";

const Service = () => {

  const services: typeServices[] = [
    {
      title: "پشتیبانی شبانه روزی",
      subTitle: "7 روز هفته ، 24 ساعته",
      icon: support,
    },
    {
      title: "امکان تحویل اکسپرس",
      subTitle: "ارسال بسته با سرعت باد",
      icon: expressDelivery,
    },
    {
      title: "رست تخصصی",
      subTitle: "تازه برشته شده و با کیفیت",
      icon: coffee,
    },
    {
      title: "اکسسوری قهوه",
      subTitle: "وسایل و ادوات دم آوری",
      icon: pitcher,
    },
  ];

  return (
    <section className="w-full relative grid grid-cols-2 lg:grid-cols-4 place-content-around place-items-center gap-y-16 gap-x-0 lg:gap-0">
      <hr className="lg:hidden w-full h-px absolute bg-textDisableColor dark:bg-white-10 rounded-full" />
      <hr className="lg:hidden w-px h-full absolute bg-textDisableColor dark:bg-white-10 rounded-full" />

      {services.map((service, index) => (
        <div
          className="w-full flex flex-col lg:flex-row justify-center items-center gap-5"
          key={index}
        >
          <Image
            src={service.icon}
            alt={service.title}
            className="object-contain"
          />
          <div className="w-full lg:w-auto text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-col justify-start items-start gap-2">
            <h5 className="w-full lg:w-auto text-center lg:text-right font-semibold text-sm lg:text-lg">
              {service.title}
            </h5>
            <h5 className="w-full lg:w-auto text-center lg:text-right font-normal text-xs lg:text-sm">
              {service.subTitle}
            </h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
