"use client";

import { useEffect, useState } from "react";

import logo from "@/public/image/app-logo.png";
import logo2 from "@/public/image/svgs/logo-type.svg";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitcher/ThemeSwitcher";
import { useRouter } from "next/navigation";
import NavBar from "./navbar/NavBar";
import CartMobile from "../cart/CartMobile";
import Cart from "../cart/Cart";

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showCartMobile, setShowCartMobile] = useState(false);

  const hamburgerMenuBtn = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const hamburgerCartBtn = () => {
    setShowCartMobile(!showCartMobile);
  };

  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);

  const router = useRouter();

  return (
    <header className="w-full lg:w-11/12 h-16 lg:h-24 fixed top-0 z-50 px-4 lg:px-8 lg:mt-9 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:bg-[#00000080] dark:lg:bg-[#00000080] lg:backdrop-blur-sm flex flex-row justify-between items-center lg:rounded-3xl">
      <section className="w-full lg:hidden flex flex-row justify-between items-center">
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
      </section>

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
              <div className="w-1/2 lg:w-auto h-10 lg:h-auto flex flex-row justify-start items-center gap-2.5">
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
                  className="h-full p-0 lg:hidden object-contain"
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
            <NavBar />

            <hr className="w-full lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />
          </div>

          {/* sign - theme - cart */}
          <div className="w-full lg:w-auto pr-2.5 lg:p-0 text-base font-normal text-primaryColor lg:text-secondaryColor flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-2.5 lg:gap-2">
            {/* theme - cart */}
            <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-2.5 lg:gap-0 *:duration-300">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="w-full py-2.5 lg:p-3 hover:text-primaryColor lg:hover:bg-secondaryColor/10 lg:rounded-full cursor-pointer"
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
                  <ul
                    tabIndex={0}
                    className="dropdown-content w-96 left-0"
                  >
                    <Cart />
                  </ul>
                </div>

                {/* <div className="lg:pt-4 lg:absolute left-0">
                  <ul
                    className={
                      showCartMobile
                        ? "w-full lg:w-0 group-hover:min-w-96 h-0 group-hover:h-auto lg:p-0 bg-bgItemLightColor dark:bg-bgItemDarkColor lg:group-hover:border-t-4 lg:border-primaryColor lg:rounded-2xl group-hover:p-2.5 lg:group-hover:py-5 group-hover:px-6 group-hover:flex flex-col justify-center items-start gap-4 duration-300 overflow-hidden shadow-defaultShadow dark:shadow dark:shadow-[#00000015]"
                        : "w-full lg:w-0 h-0 lg:p-0"
                    }
                  >
                    {showCartMobile && widthScreen >= 430 && (
                      <Cart
                        showCartMobile={showCartMobile}
                        hamburgerCartBtn={hamburgerCartBtn}
                      />
                    )}
                  </ul>
                </div> */}
              </div>

              <ThemeSwitcher />
            </div>

            <hr className="hidden lg:block w-px h-full py-5 bg-linePrimaryColor/20" />

            <Link
              href="/login"
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
        <CartMobile
          showCartMobile={showCartMobile}
          hamburgerCartBtn={hamburgerCartBtn}
        />
      )}
    </header>
  );
}
