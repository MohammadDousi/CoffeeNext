import { Product } from "@/app/type.";
import Image from "next/image";

const ItemCart = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="w-full p-2 lg:px-0 lg:py-5 flex flex-row justify-start items-center gap-2">
        <Image
          unoptimized
          src={product.image}
          alt={product.image}
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

          {/* amount  */}
          <div className="text-right font-bold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {product.amount.toLocaleString()}{" "}
            <span className="text-right text-xs font-normal">تومان</span>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />
    </>
  );
};

export default ItemCart;
