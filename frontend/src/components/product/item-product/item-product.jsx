import p1 from "../../../assets/image/products/p1.png";
import p2 from "../../../assets/image/products/p2.png";
import p3 from "../../../assets/image/products/p3.png";
import p4 from "../../../assets/image/products/p4.png";

import PropTypes from "prop-types";

const ItemProduct = () => {
  const products = [
    {
      uuid: 1,
      image: p1,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 2,
      image: p2,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 3,
      image: p3,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 4,
      image: p4,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 5,
      image: p3,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 6,
      image: p4,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 5,
      offer: 12,
      offer_amount: 154000,
    },
    {
      uuid: 7,
      image: p1,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: "-1",
      rating: 3,
      offer: 0,
      offer_amount: 0,
    },
    {
      uuid: 8,
      image: p2,
      product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      amount: 175000,
      rating: 4,
      offer: 0,
      offer_amount: 0,
    },
  ];

  return (
    <>
      {products.map((item, index) => (
        <section
          key={index + item.uuid}
          className="size-full p-5 relative bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-between items-center gap-0 rounded-2xl shadow-defaultShadow"
        >
          {item.offer != 0 && (
            <span className=" absolute top-5 right-5 pt-1 px-3 text-base font-medium bg-primaryColor text-textPrimaryDarkColor dark:text-textPrimaryLightColor rounded-full flex justify-center items-center">
              <p>{item.offer}%</p>
            </span>
          )}

          <img
            src={item.image}
            alt={item.image}
            className="w-full object-contain"
          />

          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* name */}
            <h5 className="w-full text-right font-danamedium text-xl">
              {item.product}
            </h5>
            {/* amount  */}
            <div className="w-full flex flex-row justify-start items-center gap-2">
              {/* print original amount or offer amount product */}
              <span
                className={
                  item.amount != -1
                    ? "text-right font-bold text-xl text-[#0D9488]"
                    : "text-right font-medium text-xl text-errorColor"
                }
              >
                {item.amount != -1
                  ? item.offer != 0 && item.offer_amount != 0
                    ? item.offer_amount
                    : item.amount
                  : "فعلا موجود نیست"}

                {item.amount != -1 && (
                  <span className="text-right text-sm font-normal"> تومان</span>
                )}
              </span>

              {/* print original amount product */}

              {item.offer_amount != 0 &&
                item.offer != 0 &&
                item.amount != -1 && (
                  <div className="relative text-right font-medium text-xl text-[#9CA3AF] dark:text-successPrimaryColor flex justify-center items-center">
                    <div className="w-full h-px absolute top-3 bg-errorColor"></div>
                    <span>
                      {item.amount}{" "}
                      <span className="text-right text-sm font-normal">
                        تومان
                      </span>
                    </span>
                  </div>
                )}
            </div>
            {/* star , cart , comparison */}
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row justify-start items-center gap-3">
                {/* add to cart button */}
                <span className="size-9 bg-gray-100 hover:bg-[#0D9488] dark:bg-[#27272A] dark:hover:bg-successPrimaryColor text-iconSecondaryColor hover:text-[#fff] rounded-full flex justify-center items-center duration-300">
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

                {/* comparison button */}
                <span className="text-iconSecondaryColor hover:text-[#0D9488] dark:hover:text-successPrimaryColor duration-300">
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
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </span>
              </div>

              {/* rating star product */}
              <div className="flex flex-row justify-start items-center">
                {[...Array(Number(5) - item.rating)].map((star, index) => (
                  <span key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-iconSecondaryColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                ))}

                {[...Array(item.rating)].map((star, index) => (
                  <span key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-6 text-warningColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

ItemProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      image: PropTypes.string,
      product: PropTypes.string,
      amount: PropTypes.number,
      rating: PropTypes.number,
      offer: PropTypes.number,
      offer_amount: PropTypes.number,
    })
  ),
};

export default ItemProduct;
