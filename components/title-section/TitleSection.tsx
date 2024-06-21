import Link from "next/link";
import { FC } from "react";

type Title = {
  title: string;
  subTitle?: string;
  textLink?: string;
  toLink?: string;
};

const TitleSection: FC<Title> = ({ title, subTitle, textLink, toLink }) => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="250"
      data-aos-mirror="true"
      data-aos-once="true"
      className="w-full z-10 flex flex-row justify-between items-end"
    >
      <div className="flex flex-col justify-start items-start gap-2 lg:gap-5">
        <h2 className="text-right font-[Morabba] font-bold text-2xl lg:text-5xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
          {title}
        </h2>
        {subTitle && (
          <h3 className="text-right font-[Morabba] font-light text-base lg:text-3xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {subTitle}
          </h3>
        )}
      </div>

      {toLink && (
        <Link
          href={toLink}
          className="px-3 py-1 text-sm lg:text-lg font-[Dana] font-normal text-primaryColor dark:text-secondaryColor hover:bg-secondaryColor/10 rounded-md flex flex-row justify-center items-center lg:gap-1.5 select-none duration-300"
        >
          {textLink}
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
      )}
    </section>
  );
};

export default TitleSection;
