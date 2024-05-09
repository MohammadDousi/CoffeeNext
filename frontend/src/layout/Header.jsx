import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from '../assets/image/app-logo.png'
import { getThemeLocalStorage, setThemeToLocalStorage } from "../utils/func";

export default function Header() {
  let a=getThemeLocalStorage()
  const [theme, setTheme] = useState(a || 'day')
  useEffect(()=>{
    document.documentElement.classList.add(theme)
  },[])
  const nightHandler = (e) => {
    setTheme('dark')
    setThemeToLocalStorage('dark')
    document.documentElement.classList.add('dark')
  }
  const dayHandler = (e) => {
    setTheme('day')
    setThemeToLocalStorage('day')
    document.documentElement.classList.remove('dark')
  }
  return (
    <div className='flex justify-between items-center bg-white-10 backdrop-blur-[4px] m-10 rounded-2xl h-[96px] w-[90%] left-0 right-0 mx-auto px-5 text-white fixed z-50'>
      <div className='flex items-center'>
        <img className='p-4' src={logo} alt="logo" />
        <ul className='flex gap-5 xl:[&>*]:p-5 text-bgItemLightColor'>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>صفحه اصلی</Link></li>
          <li className='relative group'><Link className="pb-5" to='/homepage'>فروشگاه</Link>
            <ul className='flex flex-col dark:text-white text-black-submenu mt-5 bg-white dark:bg-bgDarkColor w-[208px] h-[272px] absolute right-[-20px] top-5 xl:top-10 2xl:top-[2.5rem] rounded-2xl justify-center gap-4 pr-5 invisible group-hover:visible transition-all'>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/1'>قهوه ویژه</Link></li>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/2'>ویژه در سطح جهانی</Link></li>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/3'>قهوه درجه یک</Link></li>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/4'>ترکیبات تجاری</Link></li>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/5'>کپسول قهوه</Link></li>
              <li className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/6'>قهوه زینو برزیلی</Link></li>
            </ul>
          </li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>دیکشنری</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>بلاگ</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>درباره ما</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>تماس با ما</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-5 [&>*]:transition-colors">
        <Link to='/basket' className="hover:text-primaryColor">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
        {
          theme == 'day' ?
            <div onClick={nightHandler} className="hover:cursor-pointer hover:text-primaryColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </div>
            :
            <div onClick={dayHandler} className="hover:cursor-pointer hover:text-primaryColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>

            </div>
        }
        <Link to='/register' className="hover:text-primaryColor">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
