import React from 'react';
import logo from '../assets/image/svgs/logo.svg'
import logo2 from '../assets/image/svgs/logo-type.svg'
const Footer = () => {
  return (
    <div class="w-full px-5 pt-[62px] bg-zinc-700 my-5">
      <div class="grid lg:grid-cols-3 grid-cols-1 ">
        <div class="flex flex-col ">
          <div class="mb-[18px] flex">
            <img src={logo} class="ml-5 grayscale" alt="" />
            <img src={logo2} class="ml-5 grayscale" alt="" />
          </div>
          <p class="break-words text-gray-300 md:text-sm md:leading-[48px] leading-7 font-normal font-dana text-justify">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
        </div>
        <div class="flex flex-row lg:justify-center items-start my-7 md:my-0">
          <div class="">
            <span class="text-white text-xl font-semibold">دسترسی سریع</span>
            <div class="text-gray-300 md:h-[188px]">
              <ul class="list-none flex flex-col child:w-[111px] child:h-[28px] gap-6 mt-[3.7rem]">
                <li class="child-hover:text-orange-400"><a href="#">حریم خصوصی</a></li>
                <li class="child-hover:text-orange-400"><a href="#">عودت کالا</a></li>
                <li class="child-hover:text-orange-400"><a href="#">شرایط استفاده</a></li>
                <li class="child-hover:text-orange-400"><a href="#">ثبت سفارش</a></li>
              </ul>
            </div>
          </div>
          <div class="">
            <div class="text-gray-300 flex flex-col justify-center mt-[5.5rem]">
              <ul class="flex flex-col gap-6">
                <li class="child-hover:text-orange-400"><a href="#">پرسش های متداول</a></li>
                <li class="child-hover:text-orange-400"><a href="#">فرصت های شغلی</a></li>
                <li class="child-hover:text-orange-400"><a href="#">ضمانت نامه ها</a></li>
                <li class="child-hover:text-orange-400"><a href="#">ارتباط با ما</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start ">
          <span class="text-white text-2xl font-semibold">در تماس باشیم</span>
          <div class="flex flex-col justify-end child:pb-5 text-gray-300 pt-[50px] gap-6">
            <div class="flex items-center">
              <svg class="w-[34px] h-[34px] transform rotate-180">
                <use href="#location"></use>
              </svg>
              <p class="text-base">بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</p>
            </div>
            <div class="flex items-center ml-4">
              <svg class="w-[34px] h-[34px] transform rotate-180 ml-4">
                <use href="#letter"></use>
              </svg>
              <span class="text-base">info@Coffee.com</span>
            </div>
            <div class="flex items-center">
              <svg class="w-[34px] h-[34px] transform rotate-180 pr-2">
                <use href="#phones"></use>
              </svg>
              <span class="text-base pr-3">0902 123 6628</span>
              <span class="pr-5">0902 125 6625</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="hover:text-orange-400 rounded-[12px] bg-btn">@golden_coffee</a>
              <a href="#" class="hover:text-orange-400 rounded-[12px] bg-btn">@golden_coffee</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;