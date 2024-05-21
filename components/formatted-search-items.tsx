import {
  FormatProductDetailsSchema,
  FormattedSearchItemsSchema,
} from "@/schema/zod-schemas";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { getCurrencySymbol } from "@/utils/functions";

function FormatProductDetails({
  product,
  onOpenChange,
}: FormatProductDetailsSchema) {
  const currencySymbol = getCurrencySymbol();

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="flex flex-row w-auto items-center justify-between gap-3 hover:shadow-lg p-5 border rounded-md"
        onClick={() => onOpenChange(false)}
      >
        <div className="w-36 h-36">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-full rounded-md object-contain"
            width={640}
            height={435}
            priority
          />
        </div>
        <div className="flex flex-col h-auto gap-2">
          <p className="font-semibold line-clamp-2 md:line-clamp-1">
            {product.title}
          </p>
          <p className="text-[#3c07ff] font-semibold ml-auto">
            {currencySymbol} {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

function FormattedSearchItems({
  products,
  onOpenChange,
}: FormattedSearchItemsSchema) {
  return (
    <ScrollArea className="flex flex-col grow gap-2 overflow-y-auto">
      {products.map((product, index) => (
        <div
          className="flex flex-col grow gap-2 overflow-y-auto py-5"
          key={index}
        >
          <FormatProductDetails
            product={product}
            key={index}
            onOpenChange={onOpenChange}
          />
        </div>
      ))}
    </ScrollArea>
  );
}

export { FormattedSearchItems };
