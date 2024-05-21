"use client";

import { AddToCartSchema, ProductSchema } from "@/schema/zod-schemas";
import { Separator } from "./ui/separator";
import { StarIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { formattedDate, isNumberKey } from "@/utils/functions";
import { addToCart } from "@/utils/api-service";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface RenderAddToCartButton {
  status: "success" | "error" | "na";
  loading: boolean;
  disabled: boolean;
  actionHandler: VoidFunction;
}

function RenderAddToCartButton({
  status,
  loading,
  disabled,
  actionHandler,
}: RenderAddToCartButton) {
  const router = useRouter();

  function handleGoToCart() {
    router.push("/cart");
  }

  if (loading) {
    return (
      <Button
        variant={"default"}
        className="px-[.75rem] py-[1.5rem] grow"
        loading={loading}
      />
    );
  }

  if (status === "success") {
    return (
      <Button
        variant={"default"}
        className="px-[.75rem] py-[1.5rem] grow"
        onClick={handleGoToCart}
        value="GO TO CART"
      />
    );
  }

  return (
    <Button
      variant={"default"}
      className="px-[.75rem] py-[1.5rem] grow"
      disabled={disabled}
      onClick={actionHandler}
      value="ADD TO CART"
    />
  );
}

function ProductDetails({ product }: { product: ProductSchema }) {
  const [productQuantity, setProductQuantity] = useState("1");
  const [addToCartStatus, setAddToCartStatus] = useState<
    "success" | "error" | "na"
  >("na");
  const [loading, setLoading] = useState(false);

  function handleInputChange(value: string) {
    setProductQuantity(value);
  }

  function handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): boolean {
    const charCode = evt.which ? evt.which : evt.keyCode;

    const isNumber = isNumberKey(charCode);

    if (isNumber) {
      return true;
    }

    evt.preventDefault();
    return false;
  }

  async function hanldeAddToCart() {
    const payload: AddToCartSchema = {
      date: formattedDate(),
      userId: 2,
      products: [
        { productId: product.id, quantity: parseInt(productQuantity) },
      ],
    };
    setLoading(true);

    const response = await addToCart(payload);

    setLoading(false);

    if (response instanceof AxiosError) {
      setAddToCartStatus("error");
    } else {
      setAddToCartStatus("success");
    }
  }

  return (
    <div className="flex flex-col gap-5 grow p-0 md:p-8 mt-4 md:mt-0 items-start">
      <h1 className="text-[2rem] md:text-[2.5rem] font-semibold">
        {product.title}
      </h1>
      <Separator orientation="horizontal" />
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center gap-1">
          <StarIcon
            width={12}
            height={12}
            className="fill-[#f6a429] border-[#f6a429] "
          />
          <div className="flex text-[12px]">
            <p>{product.rating.rate}</p>
            <p>({product.rating.count})</p>
          </div>
        </div>
        <p className="text-[1.5rem] font-semibold">₹ {product.price}</p>
        <div className="flex w-full items-end gap-4">
          <Input
            className="w-12 py-[1.4rem] text-center"
            value={productQuantity}
            disabled={addToCartStatus === "success"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.value)
            }
            onKeyDown={(e) => handleKeyDown(e)}
            maxLength={1}
          />
          <RenderAddToCartButton
            disabled={!productQuantity}
            loading={loading}
            status={addToCartStatus}
            actionHandler={hanldeAddToCart}
          />
        </div>
      </div>
      <Separator orientation="horizontal" />
      <p className="text-[1rem]">{product.description}</p>
    </div>
  );
}

export { ProductDetails };
