import logo from "@/public/image/app-logo.png";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="size-full fixed top-0 left-0 bg-bgLightColor dark:bg-bgDarkColor z-50 flex flex-col justify-center items-center gap-5">
      <Image
        unoptimized
        className="animate__animated animate__flash animate__infinite circle-1"
        src={logo}
        alt="logo arabica"
      />
      <span className="text-xl font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
        در حال دریافت اطلاعات
      </span>
    </div>
  );
};

export default Loading;
