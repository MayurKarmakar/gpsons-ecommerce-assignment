import { CartProduct, CartProducts } from "@/schema/zod-schemas";
import { getCurrencySymbol } from "@/utils/functions";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const currencySymbol = getCurrencySymbol();

function FormatCartItemDetails({ cartProduct }: { cartProduct: CartProduct }) {
  return (
    <div className="flex flex-row h-full w-full items-start gap-3 md:gap-8">
      <div className="h-24 w-24 sm:h-32 sm:w-32 border rounded-md p-2 md:p-3 flex-shrink-0">
        <Image
          src={cartProduct.image}
          alt={cartProduct.title}
          className="w-full h-full rounded-md object-contain object-center"
          width={640}
          height={435}
          priority
        />
      </div>
      <div className="flex flex-col h-24 sm:h-32 justify-between">
        <p className="font-medium text-[0.875rem]">{cartProduct.title}</p>
        <Input
          className="w-14 text-center"
          defaultValue={cartProduct.quantity}
        />
      </div>
      <div className="flex flex-col h-24 sm:h-32 justify-between ml-auto">
        <p className="font-medium text-end text-[.875rem]">
          {currencySymbol} {cartProduct.totalPrice}
        </p>
        <Button
          className="text-destructive font-semibold p-0 focus:text-destructive"
          variant={"link"}
          value="Remove"
        />
      </div>
    </div>
  );
}

function FormattedCartItems({
  cartProducts,
  grandTotal,
}: {
  cartProducts: CartProducts;
  grandTotal: number;
}) {
  return (
    <div className="flex flex-col h-full grow overflow-y-auto gap-10 pt-6 lg:px-64">
      {cartProducts.map((product, index) => (
        <div className="flex flex-col gap-5" key={index}>
          <FormatCartItemDetails cartProduct={product} />
          <Separator />
        </div>
      ))}
      <div className="flex flex-row w-full justify-between">
        <p className="font-medium">Subtotal</p>
        <p className="font-medium">
          {currencySymbol} {grandTotal}
        </p>
      </div>
      <Button
        variant={"default"}
        className="px-[.75rem] py-[1.5rem]"
        value="CHECKOUT"
      />
    </div>
  );
}

export { FormattedCartItems };
