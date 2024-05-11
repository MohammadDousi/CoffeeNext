import logo from '../assets/image/svgs/logo.svg'
import logo2 from '../assets/image/svgs/logo-type.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footers className="w-full px-5 pt-[62px] bg-zinc-700 my-5">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="flex flex-col ">
          <div className="mb-[18px] flex">
            <img src={logo} className="ml-5 grayscale" alt="" />
            <img src={logo2} className="ml-5 grayscale" alt="" />
          </div>
          <p className="break-words text-gray-300 md:text-sm md:leading-[48px] leading-7 font-normal font-dana text-justify">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
        </div>
        <div className="flex flex-row lg:justify-center items-start my-7 md:my-0">
          <div className="">
            <span className="text-white text-xl font-semibold">دسترسی سریع</span>
            <div className="text-gray-300 md:h-[188px]">
              <ul className="list-none flex flex-col child:w-[111px] child:h-[28px] gap-6 mt-[3.7rem]">
                <li className="hover:text-primaryColor"><Link to='/'>حریم خصوصی</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>عودت کالا</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>شرایط استفاده</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>ثبت سفارش</Link></li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="text-gray-300 flex flex-col justify-center mt-[5.5rem]">
              <ul className="flex flex-col gap-6">
                <li className="hover:text-primaryColor"><Link to='/'>پرسش های متداول</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>فرصت های شغلی</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>ضمانت نامه ها</Link></li>
                <li className="hover:text-primaryColor"><Link to='/'>ارتباط با ما</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-white text-2xl font-semibold">در تماس باشیم</span>
          <div className="flex flex-col justify-end child:pb-5 text-gray-300 pt-[50px] gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p className="text-base">بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</p>
            </div>
            <div className="flex items-center">
              <span className="text-base text-primaryColor flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@Coffee.com</span>
              <span className="text-base pr-3">0902 123 6628</span>
              <span className="pr-5">0902 125 6625</span>
            </div>
            <div className="flex justify-between">
              <button className='flex gap-2 hover:text-orange-400 rounded-[12px]  p-2 text-primaryColor border border-solid border-primaryColor'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                @golden_coffee
              </button>
              <button className='flex gap-2 hover:text-orange-400 rounded-[12px] bg-gradient-to-r from-primaryColor to-secondaryColor p-2 text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                @golden_coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    </footers>
  );
};

export default Footer;