import { ProductSchema } from "@/schema/zod-schemas";
import { getCurrencySymbol } from "@/utils/functions";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";

function ProductCard({ product }: { product: ProductSchema }) {
  const currencySymbol = getCurrencySymbol();

  return (
    <Card className="flex flex-col flex-shrink-0 items-center p-2 md:p-5 border">
      <CardHeader>
        <div className="w-32 h-32 md:w-52 md:h-52">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
              width={640}
              height={435}
              priority
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-auto gap-2 uppercase break-before-all w-full text-center pt-2 md:pt-6">
        <Link
          href={`/product/${product.id}`}
          className="font-semibold leading-relaxed tracking-wide text-[0.875rem] line-clamp-2 md:line-clamp-1"
        >
          {product.title}
        </Link>
        <p className="text-[#3c07ff] font-semibold">
          {currencySymbol} {product.price}
        </p>
        <div className="flex items-center justify-center gap-1">
          <StarIcon
            width={12}
            height={12}
            className="fill-[#f6a429] border-[#f6a429] "
          />{" "}
          <div className="flex text-[11px]">
            <p>{product.rating.rate}</p>
            <p>({product.rating.count})</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
