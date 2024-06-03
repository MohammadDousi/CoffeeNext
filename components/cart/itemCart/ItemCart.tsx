import { Product } from "@/app/type.";
import { changeCounterCartWithoutToken } from "@/redux/features/cartStore";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";

const ItemCart = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full p-2 lg:px-0 lg:py-5 flex flex-row justify-start items-center gap-2">
        <Image
          unoptimized
          src={product.image}
          alt={"alt !"}
          className="size-20 object-contain"
        />

        <div className="flex flex-col justify-start items-start gap-1 lg:gap-2.5">
          {/* name */}
          <h5 className="w-full text-right font-medium text-sm lg:text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {product.product}
          </h5>

          {/* offer amount */}
          <span className="text-right font-normal text-xs text-[#0D9488] dark:text-successPrimaryColor">
            {(product.amount * (product.offer / 100)).toLocaleString()}

            {product.amount != -1 && (
              <span className="text-right text-xs font-normal">
                {" "}
                تومان تخفیف
              </span>
            )}
          </span>

          {/* amount */}
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-right font-bold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
              {(product.counterProduct * product.amount).toLocaleString()}{" "}
              <span className="text-right text-xs font-normal">تومان</span>
            </div>
            <div className="flex flex-row justify-center items-center rounded-full overflow-hidden">
              <button
                onClick={() => {
                  dispatch(
                    changeCounterCartWithoutToken({
                      uuid: product.uuid,
                      fun: "plus",
                    })
                  );
                }}
                className="w-7 h-7 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor bg-bgLightColor dark:bg-bgDarkColor hover:bg-bgLightColor dark:hover:bg-bgDarkColor flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <span className="px-3 pt-1 h-7 text-center text-base lg:text-lg flex justify-center items-center text-textPrimaryLightColor dark:text-textPrimaryDarkColor select-none leading-extra-none">
                {product?.counterProduct}
              </span>
              <button
                disabled={product?.counterProduct <= 1 && true}
                onClick={() => {
                  dispatch(
                    changeCounterCartWithoutToken({
                      uuid: product.uuid,
                      fun: "min",
                    })
                  );
                }}
                className={
                  product?.counterProduct <= 1
                    ? "w-7 h-7 text-textDisableColor bg-bgLightColor/30 dark:bg-bgDarkColor/30 flex justify-center items-center"
                    : "w-7 h-7 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor bg-bgLightColor dark:bg-bgDarkColor hover:bg-bgLightColor dark:hover:bg-bgDarkColor flex justify-center items-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />
    </>
  );
};

export default ItemCart;
