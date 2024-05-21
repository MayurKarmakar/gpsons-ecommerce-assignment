import { ProductDetails } from "@/components/product-details";
import { getProductDetailsById } from "@/utils/api-service";
import { AxiosError } from "axios";
import Image from "next/image";

export default async function Home(props: any) {
  const product = await getProductDetailsById(props.params.productId);

  if (product instanceof AxiosError) {
    return null;
  }

  return (
    <main className="flex flex-col grow items-center justify-between py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <div className="flex flex-col md:flex-row w-full justify-between md:rounded-2xl md:shadow-lg md:border md:p-12 gap-3 text-[#444444]">
        <div className="flex h-56 md:h-72 w-full md:p-8">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-full rounded-md object-contain object-center"
            width={640}
            height={435}
            priority
          />
        </div>
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
