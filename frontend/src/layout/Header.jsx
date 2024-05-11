import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from '../assets/image/app-logo.png'
import logo2 from '../assets/image/svgs/logo-type.svg'
import { getThemeLocalStorage, setThemeToLocalStorage } from "../utils/func";

export default function Header() {
  let a = getThemeLocalStorage()
  const [theme, setTheme] = useState(a || 'day')
  const [btnClose, setBtnClose] = useState(true)
  useEffect(() => {
    document.documentElement.classList.add(theme)
  }, [])
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

  const hamburgerBtn = () => {
    setBtnClose(!btnClose)
  }
  return (
    <>
      <div className='hidden md:flex justify-between items-center bg-[#00000080] backdrop-blur-[4px] m-10 rounded-2xl h-[96px] w-[90%] left-0 right-0 mx-auto px-5 text-white fixed z-50'>
        <div className='flex items-center'>
          <img className='p-4' src={logo} alt="logo" />
          <ul className='flex lg:gap-4 md:gap-3 xl:[&>*]:p-5 text-bgItemLightColor'>
            <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>صفحه اصلی</Link></li>
            <li className='relative group'><Link className="pb-5 group-hover:text-primaryColor" to='/homepage'>فروشگاه</Link>
              <ul className='flex flex-col dark:text-white text-black-submenu mt-5 bg-white dark:bg-bgDarkColor border-t-4 border-primaryColor w-[208px] h-[272px] absolute right-[-20px] top-5 xl:top-10 2xl:top-[2.5rem] rounded-2xl justify-center gap-4 pr-5 invisible group-hover:visible transition-all'>
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
          <Link to='/basket' className="text-primaryColor ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>
          {
            theme == 'day' ?
              <div onClick={nightHandler} className="hover:cursor-pointer text-primaryColor">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </div>
              :
              <div onClick={dayHandler} className="hover:cursor-pointer text-primaryColor">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

              </div>
          }
          <span className="bg-gray-600 w-[2px] h-12"></span>
          <Link to='/register' className="hover:text-primaryColor flex gap-2 text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            ورود | ثبت نام
          </Link>
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center w-full p-3 dark:bg-bgDarkColor">
        <div onClick={hamburgerBtn} className="hover:cursor-pointer hover:text-primaryColor relative dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <Link to="/">
          <img src={logo2} alt="" />
        </Link>
        <Link to='/basket' className="hover:text-primaryColor dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
        {/* mobile menu */}
        <div className={`fixed ${btnClose ? 'right-[-35rem]' : 'right-0'} transition-all top-0 w-[65%] h-[100vh] overflow-auto bg-white dark:bg-bgDarkColor  z-50 p-3`}>
          <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <img src={logo2} alt="" />
            <div onClick={hamburgerBtn} className="hover:cursor-pointer dark:text-white hover:text-primaryColor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <hr className="bg-gray-300 mt-10" />
          <ul className='flex flex-col gap-6 p-10 md:gap-3 xl:[&>*]:p-5 text-black-submenu dark:text-white'>
            <li className='hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor'>
              <Link to='/homepage' className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                صفحه اصلی</Link></li>
            <li className='group p-2'><Link to='/homepage' className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              فروشگاه</Link>
              <ul className='flex-col dark:text-white text-black-submenu mt-5 hover:[&>*]:bg-bg-mobileMenu dark:bg-bgDarkColor rounded-2xl justify-center gap-4 pr-5 hidden group-hover:flex transition-all '>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/1'>قهوه ویژه</Link></li>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/2'>ویژه در سطح جهانی</Link></li>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/3'>قهوه درجه یک</Link></li>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/4'>ترکیبات تجاری</Link></li>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/5'>کپسول قهوه</Link></li>
                <li className="hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor"><Link to='/shopping/6'>قهوه زینو برزیلی</Link></li>
              </ul>
            </li>
            <li className='hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage' className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              دیکشنری</Link></li>
            <li className='hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage' className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

              بلاگ</Link></li>
            <li className='hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage' className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              درباره ما</Link></li>
            <li className='hover:bg-bg-mobileMenu p-2 rounded-lg transition-all [&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage' className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

              تماس با ما</Link></li>
          </ul>
          <hr className="bg-gray-300" />
          <div className="flex gap-5 text-primaryColor mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            <Link to='/register' className="text-primaryColor">
              ورود | ثبت نام
            </Link>
          </div>
          <div className="text-primaryColor flex gap-3 mt-5">
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
            <span>{theme == 'dark' ? "تم روشن" : "تم تیره"}</span>
          </div>
          <div className="mt-5 text-primaryColor">
            <Link to='/basket' className="hover:text-primaryColor flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span>سبد خرید</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
