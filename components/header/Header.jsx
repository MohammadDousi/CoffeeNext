"use client";

import { useEffect, useState } from "react";

import Cart from "../cart/Cart";

import logo from "@/public/image/app-logo.png";
import logo2 from "@/public/image/svgs/logo-type.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  let itemMenu = [
    {
      page: "صفحه اصلی",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      page: "فروشگاه",
      link: "/shopping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      submenu: [
        { page: "قهوه ویژه", link: "/shopping/1" },
        { page: "ویژه در سطح جهانی", link: "/shopping/2" },
        { page: "قهوه درجه یک", link: "/shopping/3" },
        { page: "ترکیبات تجاری", link: "/shopping/4" },
        { page: "کپسول قهوه", link: "/shopping/5" },
        { page: "قهوه زینو برزیلی", link: "/shopping/6" },
      ],
    },
    {
      page: "دیکشنری",
      link: "/dictionary",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      ),
    },
    {
      page: "بلاگ",
      link: "/blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
    },
    {
      page: "درباره ما",
      link: "/about-us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      page: "تماس با ما",
      link: "/contact-us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
          />
        </svg>
      ),
    },
  ];

  const [theme, setTheme] = useState();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showCartMobile, setShowCartMobile] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add(localStorage.getItem("themeCoffee"));
  }, []);

  // chanege theme between dark and light
  const changeTheme = (theme) => {
    // active dark mode
    if (theme === "dark") {
      setTheme("dark");
      localStorage.setItem("themeCoffee", theme);

      document.documentElement.classList.add("dark");
    } else {
      // active light mode
      setTheme("light");
      localStorage.setItem("themeCoffee", theme);
      document.documentElement.classList.remove("dark");
    }
  };

  const hamburgerMenuBtn = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const hamburgerCartBtn = () => {
    setShowCartMobile(!showCartMobile);
  };

  // scroll to top page
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [widthScreen, setWidthScreen] = useState();

  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);

  return (
    <header className="w-full lg:w-11/12 h-16 lg:h-24 fixed lg:fixed top-0 z-50 px-4 lg:px-8 lg:mt-9 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:bg-[#00000080] dark:lg:bg-[#00000080] lg:backdrop-blur-sm flex flex-row justify-between items-center lg:rounded-3xl">
      <div
        onClick={() => hamburgerMenuBtn()}
        className="lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* logo */}
      <Image
        unoptimized
        src={logo2}
        alt="arabica logo"
        className="lg:hidden h-10 object-contain cursor-pointer"
      />
      {/* cart icon */}
      <span
        onClick={() => hamburgerCartBtn()}
        className="lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </span>

      <div
        className={`size-full absolute lg:relative top-0 right-0 lg:!translate-x-0 lg:!opacity-100 duration-300 flex 
      ${
        showMenuMobile
          ? "translate-x-0 opacity-100 ease-in"
          : "translate-x-full opacity-0 ease-in-out"
      }`}
      >
        <div className="w-2/3 lg:w-full h-screen lg:h-auto px-4 lg:px-0 z-10 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:bg-transparent dark:lg:bg-transparent flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4 lg:gap-0">
          {/* logo and menu */}
          <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-start items-center gap-4 lg:gap-9">
            {/* logo */}
            <div className="w-full lg:w-auto py-3 lg:p-0 flex justify-between items-center">
              <div className="h-10 lg:h-auto flex justify-center items-center gap-3.5">
                <Image
                  unoptimized
                  src={logo}
                  alt="arabica logo"
                  className="h-full lg:h-auto object-contain "
                />
                <Image
                  unoptimized
                  src={logo2}
                  alt="arabica logo"
                  className="h-full lg:hidden object-contain "
                />
              </div>
              {/* close hamburgerMenuBtn */}
              <svg
                onClick={() => hamburgerMenuBtn()}
                className="lg:hidden size-6 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>

            <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />

            {/* menu */}
            <ul className="w-full lg:w-auto text-base lg:text-xl font-normal text-textPrimaryDarkColor flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2.5 lg:gap-9 duration-300 *:duration-300">
              {itemMenu.map((item) => (
                <Link
                  key={item.page}
                  href={item.link}
                  className={
                    item.submenu
                      ? "w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 rounded-md lg:rounded-none group lg:group-hover:text-primaryColor hover:text-primaryColor flex lg:block flex-col justify-start items-center"
                      : "w-full lg:w-auto py-2.5 pr-2.5 lg:p-0 hover:text-primaryColor hover:bg-secondaryColor/20 lg:hover:bg-transparent rounded-md lg:rounded-none flex flex-row justify-start items-center"
                  }
                  onClick={() => toTop()}
                >
                  <div className="w-full lg:w-auto flex flex-row justify-start items-center gap-2">
                    <span className="lg:hidden">{item.icon}</span>
                    {item.page}
                  </div>

                  {item.submenu && (
                    <div className="lg:pt-4 lg:absolute">
                      <ul className="w-full lg:w-0 group-hover:min-w-52 h-0 group-hover:h-auto lg:p-0 font-normal text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor bg-bgItemLightColor dark:bg-bgItemDarkColor lg:group-hover:border-t-4 lg:border-primaryColor lg:rounded-2xl group-hover:p-2.5 lg:group-hover:py-5 group-hover:px-6 group-hover:flex flex-col justify-center items-start gap-4 duration-300 overflow-hidden">
                        {item.submenu.map((sub) => (
                          <Link
                            href={sub.link}
                            key={sub.page}
                            className="font-normal text-sm hover:text-primaryColor *:bg-textPrimaryDarkColor *:hover:bg-primaryColor flex flex-row justify-center items-center gap-2.5"
                          >
                            <div className="size-1 rounded-full"></div>
                            {sub.page}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              ))}
            </ul>

            <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />
          </div>

          {/* sign - theme - cart */}
          <div className="w-full lg:w-auto pr-2.5 lg:p-0 text-base font-normal text-primaryColor lg:text-secondaryColor flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-2.5 lg:gap-2">
            {/* theme - cart */}
            <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-2.5 lg:gap-0 *:duration-300">
              <div
                onClick={() => hamburgerCartBtn()}
                className="w-full lg:w-auto lg:relative py-2.5 lg:p-3 lg:block group lg:group-hover:text-primaryColor hover:text-primaryColor lg:hover:bg-secondaryColor/10 lg:rounded-full flex flex-row justify-start items-center gap-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="lg:hidden">سبد خرید</span>

                <div className="lg:pt-4 lg:absolute left-0">
                  <ul
                    className={
                      showCartMobile
                        ? "w-full lg:w-80 group-hover:min-w-80 h-0 group-hover:h-auto lg:p-0 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:group-hover:border-t-4 lg:border-primaryColor lg:rounded-2xl group-hover:p-2.5 lg:group-hover:py-5 group-hover:px-6 group-hover:flex flex-col justify-center items-start gap-4 duration-300 overflow-hidden"
                        : "w-full lg:w-0 h-0 lg:p-0"
                    }
                  >
                    <Cart
                      showCartMobile={showCartMobile}
                      hamburgerCartBtn={hamburgerCartBtn}
                    />
                  </ul>
                </div>
              </div>

              {theme == "light" ? (
                <span
                  onClick={() => changeTheme("dark")}
                  className="w-full lg:w-auto py-2.5 lg:p-3 lg:hover:bg-secondaryColor/10 lg:rounded-full flex flex-row justify-start items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                  <span className="lg:hidden">تم تیره</span>
                </span>
              ) : (
                <span
                  onClick={() => changeTheme("light")}
                  className="w-full lg:w- py-2.5 lg:p-3 lg:hover:bg-secondaryColor/10 lg:rounded-full flex flex-row justify-start items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                  <span className="lg:hidden">تم روشن</span>
                </span>
              )}
            </div>

            <hr className="hidden lg:block w-px h-full py-5 bg-linePrimaryColor/20" />

            <Link
              href="/register"
              className="w-full lg:w-auto lg:px-6 py-2.5 lg:py-3 hover:bg-secondaryColor/10 rounded-full flex flex-row justify-start lg:justify-center items-center gap-2 duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
              ورود | ثبت نام
            </Link>
          </div>
        </div>
        <span
          onClick={() => hamburgerMenuBtn()}
          className="lg:hidden w-full h-screen absolute top-0 left-0 -z-10 bg-[#00000040]"
        ></span>
      </div>

      {widthScreen <= 430 && (
        <Cart
          showCartMobile={showCartMobile}
          hamburgerCartBtn={hamburgerCartBtn}
        />
      )}
    </header>
  );
}
