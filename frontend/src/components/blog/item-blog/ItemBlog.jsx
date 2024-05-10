import PropTypes from "prop-types";

const ItemBlog = ({ blog }) => {
  return (
    <section className="size-full p-5 relative bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-between items-center gap-5 rounded-2xl shadow-defaultShadow">
      <img
        src={blog.image}
        alt={blog.image}
        className="w-full h-[186px] lg:object-cover rounded-2xl !rounded-bl-4xl"
      />

      <div className="w-full flex flex-row justify-center items-center gap-4">
        {/* name */}
        <h5 className="w-3/4 text-right font-normal text-lg text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
          {blog.title}
        </h5>

        <h5 className="w-1/4 text-[#0D9488] dark:text-successPrimaryColor font-normal text-sm text-left border-r border-lineSecondaryColor dark:border-white-10 flex flex-col justify-center items-center">
          {/* eslint-disable-next-line react/prop-types */}
          <span className="text-2xl leading-none">{blog.date.split("/")[2]}</span>
          <span>مرداد</span> {/* blog.date.split("/")[1] */}
          {/* eslint-disable-next-line react/prop-types */}
          <span className="leading-none">{blog.date.split("/")[0]}</span>
        </h5>
       
      </div>
    </section>
  );
};

ItemBlog.propTypes = {
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};

export default ItemBlog;
