import img1 from "@/public/image/blogs/blog-1.png";
import img2 from "@/public/image/blogs/blog-2.png";
import img3 from "@/public/image/abouteus.jpg";
import Image from "next/image";
const AboutUs = () => {
  const infoUsers = [
    {
      img1,
      desc1:
        "امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما",
    },
    {
      img2,
      desc2:
        "امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما",
    },
  ];

  return (
    <div className="w-full bg-bgLightColor dark:bg-bgDarkColor">
      <div className="w-full h-screen flex flex-col justify-center items-center md:items-end text-center md:text-justify ">
        <Image
          unoptimized
          src={img3}
          alt=""
          className="size-full relative object-cover"
        />
        <div className="w-full md:w-1/2 h-82 p-6 m-5 text-white absolute bg-transparent backdrop-blur md:backdrop-blur-0">
          <p className="">
            خوش آمدید به سایت قهوه فروشی ما! ما با افتخار به ارائه بهترین و با
            کیفیت ترین قهوه ها مشغولیم. امیدواریم تجربه خوشایندی را برای شما
            ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما.
          </p>
          <p className="hidden md:flex">
            تمامی قهوه های ما از بهترین دانه های قهوه انتخاب شده و با دقت و
            آرامش برای شما تهیه می شوند. ما به ارائه تجربه ای منحصر به فرد و لذت
            بخش از مصرف قهوه برای مشتریانمان اهمیت ویژه ای می دهیم.
          </p>
        </div>
      </div>
      <div className=" w-full lg:w-[1260px] mx-auto p-10 flex flex-col gap-10 dark:text-white">
        <h4
          className="p-10 text-center font-semibold text-xl md:text-3xl"
          data-aos="fade-down"
        >
          ما میتونیم کمکتون کنیم تا بیزینس خود را راه اندازی کنید
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
          <span
            className="hidden text-center md:flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {infoUsers[0].desc1}
          </span>
          <div
            className="size-52 md:size-72 bg-black overflow-hidden rounded-full"
            data-aos="fade-right"
          >
            <Image
              unoptimized
              src={infoUsers[0].img1}
              alt={infoUsers[0].img1}
              className="size-full object-cover rounded-full opacity-50"
            />
          </div>
          <span
            className="flex flex-row text-center md:hidden "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {infoUsers[0].desc1}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
          <div
            className="size-52 md:size-72 bg-black overflow-hidden rounded-full"
            data-aos="fade-left"
          >
            <Image
              unoptimized
              src={infoUsers[1].img2}
              alt={infoUsers[1].img2}
              className="size-full object-cover rounded-full opacity-50"
            />
          </div>
          <span
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {infoUsers[1].desc2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
