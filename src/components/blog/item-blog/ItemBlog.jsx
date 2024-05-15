import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemBlog = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.uuid}`}
      className="w-full h-[150px] lg:h-auto p-2.5 relative bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row lg:flex-col justify-between items-center gap-5 rounded-2xl shadow-defaultShadow overflow-hidden"
    >
      <img
        src={blog.image}
        alt={blog.image}
        className="size-32 lg:w-full lg:h-[186px] object-cover rounded-2xl !rounded-bl-4xl shadow-defaultShadow"
      />

      <div className="w-full h-full py-5 lg:py-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
        {/* name */}
        <h5 className="w-full lg:w-3/4 text-right font-[Dana] font-medium text-sm lg:text-lg text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
          {/* {window.innerWidth <= 425
            ? // eslint-disable-next-line react/prop-types
              blog?.title.length >= 30 &&
              // eslint-disable-next-line react/prop-types
              `${blog?.title.slice(0, 30)}...`
            : blog?.title} */}

          {blog?.title}
        </h5>

        <hr className="w-full h-px lg:hidden bg-lineSecondaryColor dark:bg-white-10" />

        <div className="w-full lg:w-auto lg:pl-3 flex flex-row justify-between lg:justify-center items-center">
          <h5 className="lg:pr-5 text-[#0D9488] dark:text-successPrimaryColor font-normal text-xs lg:text-sm text-right lg:text-left border-r border-lineSecondaryColor dark:border-white-10 flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-0.5 lg:gap-0">
            <span className="lg:text-2xl leading-none">
              {/* eslint-disable-next-line react/prop-types */}
              {blog.date.split("/")[2]}
            </span>
            <span>مرداد</span> {/* blog.date.split("/")[1] */}
            {/* eslint-disable-next-line react/prop-types */}
            <span className="leading-none">{blog.date.split("/")[0]}</span>
          </h5>
          <Link
            to={`#`}
            className="lg:hidden px-3 py-1 text-xs font-[Dana] font-normal text-primaryColor dark:text-secondaryColor bg-secondaryColor/20 dark:bg-primaryColor/20 rounded-md flex flex-row justify-center items-center gap-1 select-none"
          >
            مطالعه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-2.5 lg:size-5"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );
};

ItemBlog.propTypes = {
  blog: PropTypes.shape({
    uuid: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default ItemBlog;
