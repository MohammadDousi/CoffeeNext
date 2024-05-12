import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function TitleSection({ title, subTitle, textLink, toLink }) {
  return (
    <section className="w-full z-10 flex flex-row justify-between items-end">
      <div className="flex flex-col justify-start items-start gap-5">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="200"
          data-aos-mirror="true"
          data-aos-once="true"
          className="text-right font-[Morabba] font-bold lg:text-5xl md:text-3xl text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor"
        >
          {title}
        </h2>
        {subTitle && (
          <h3
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-delay="250"
            data-aos-mirror="true"
            data-aos-once="true"
            className="text-right font-[Morabba] font-light md:text-3xl text-lg text-textPrimaryLightColor dark:text-textPrimaryDarkColor"
          >
            {subTitle}
          </h3>
        )}
      </div>

      {toLink && (
        <Link
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="250"
          data-aos-mirror="true"
          data-aos-once="true"
          to={toLink}
          className="md:text-xl text-sm font-[Dana] font-normal  text-textSecondaryLightColor dark:text-textSecondaryDarkColor flex flex-row justify-center items-center gap-2 select-none"
        >
          {textLink}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
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
}

TitleSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  textLink: PropTypes.string,
  toLink: PropTypes.string,
};
