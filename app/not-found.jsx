import Image from "next/image";
import farmer from "@/public/image/body-bg.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-svh lg:w-[1260px] lg:h-screen flex flex-col justify-center items-center gap-10">
      <Image
        unoptimized
        src={farmer}
        alt="farmer pattern"
        className="w-full absolute bottom-0 right-0 z-0 object-contain opacity-15 dark:opacity-75"
      />

      <span className="z-10 text-base lg:text-3xl text-right text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </span>

      <Link
        href={`/`}
        className="z-10 px-6 py-2 lg:text-lg text-sm font-normal text-primaryColor hover:!text-textPrimaryLightColor hover:bg-gradient-to-r hover:from-primaryColor hover:to-secondaryColor border-2 border-primaryColor rounded-full duration-300 flex flex-row justify-center items-center gap-1"
      >
        صفحه اصلی
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-4 lg:size-5"
        >
          <path
            fillRule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
