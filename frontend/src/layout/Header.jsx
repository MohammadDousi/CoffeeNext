import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl";
import { FiMoon } from "react-icons/fi";
import { TbLogin2 } from "react-icons/tb"
export default function Header() {
  return (
    <>
      <div className='flex items-center justify-between rounded-2xl h-[96px] absolute z-50 backdrop-blur-[4px] p-5 w-[90%] left-0 right-0 mx-auto mt-10'>
        <div className='flex p-5'>
          <img src="" alt="logo" />
          <ul className='flex text-textDisableColor gap-5'>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/'>صفحه اصلی</Link></li>
            <li className='relative group'><Link className='pb-5' to='/shopping'>فروشگاه</Link>
              <ul className='flex flex-col justify-center gap-4 pr-5 top-10 right-[-1rem] rounded-3xl border border-y-2 border-t-primaryColor bg-bgDarkColor w-[208px] h-[275px] absolute group-hover:visible invisible'>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/1">قهوه ویژه</Link></li>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/2">ویژه در سطح جهانی</Link></li>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/3">ترکیبات تجاری</Link></li>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/4">قهوه درجه یک</Link></li>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/5">کپسول قهوه</Link></li>
                <li className='[&>*]:text-white [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/6">قهوه زینو برزیلی</Link></li>
              </ul>
            </li>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/dicshenery'>دیکشنری</Link></li>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/blog'>بلاگ</Link></li>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/aboutus'>درباره ما</Link></li>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/contactus'>ارتباط با ما</Link></li>
          </ul>
        </div>
        <div className="flex gap-5 text-2xl text-primaryColor">
          <Link to='/basket'>
            <SlBasket />
          </Link>
          <div id='mood'>
            <FiMoon />
          </div>
          <Link to='login'>
            <TbLogin2 />
          </Link>
        </div>
      </div>
    </>
  )
}
