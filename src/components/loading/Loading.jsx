import logo from "../../assets/image/app-logo.png";
const Loading = () => {
  return (
    <div className="size-full fixed top-0 left-0 bg-bgLightColor/95 dark:bg-bgDarkColor/95 z-50 flex flex-col justify-center items-center gap-5">
      <img
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
