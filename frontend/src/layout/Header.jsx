import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl";
import { FiMoon } from "react-icons/fi";
import { TbLogin2 } from "react-icons/tb"
import { IoSunnyOutline } from "react-icons/io5";
import logo from '../assets/image/app-logo.png'
import { useState } from "react";
export default function Header() {
  const [theme, setTheme] = useState('day')

  const nightHandler = (e) => {
    setTheme('day')
    document.documentElement.classList.remove('dark')
  }
  const dayHandler = (e) => {
    setTheme('night')
    document.documentElement.classList.add('dark')
  }
  return (
    <>
      <div className='flex items-center justify-between rounded-2xl h-[96px] backdrop-blur-[4px] m-10 p-5'>
        <div className='flex items-center gap-6 p-5'>
          <Link to='/'>
            <img className="w-[59] h-[56]" src={logo} alt="logo" />
          </Link>
          <ul className='flex text-textDisableColor gap-5'>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/'>صفحه اصلی</Link></li>
            <li className='relative group'><Link className='pb-5' to='/shopping'>فروشگاه</Link>
              <ul className='flex flex-col justify-center gap-4 pr-5 top-10 right-[-1rem] rounded-3xl border border-y-2 border-t-primaryColor bg-white dark:bg-bgDarkColor w-[208px] h-[275px] absolute group-hover:visible invisible'>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/1">قهوه ویژه</Link></li>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/2">ویژه در سطح جهانی</Link></li>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/3">ترکیبات تجاری</Link></li>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/4">قهوه درجه یک</Link></li>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/5">کپسول قهوه</Link></li>
                <li className='[&>*]:text-black-submenu [&>*]:font-normal [&>*]:leading-6 [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to="/shopping/6">قهوه زینو برزیلی</Link></li>
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
          {
            theme == 'day' ?
              <div onClick={dayHandler}>
                <FiMoon />
              </div>
              :
              <div onClick={nightHandler}>
                <IoSunnyOutline />
              </div>
          }
          <Link to='login'>
            <TbLogin2 />
          </Link>
        </div>
      </div>
    </>
  )
}
