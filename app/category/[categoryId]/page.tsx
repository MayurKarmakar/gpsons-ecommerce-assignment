import ProductCard from "@/components/product-card";
import { Separator } from "@/components/ui/separator";
import { getProductsByCategory } from "@/utils/api-service";
import { AxiosError } from "axios";

interface HomeProps {
  params: { categoryId: string };
  searchParams: {};
}

export default async function Home(props: HomeProps) {
  const products = await getProductsByCategory(props.params.categoryId);

  if (products instanceof AxiosError) {
    return null;
  }

  const decodedRoutePath = decodeURIComponent(props.params.categoryId);

  return (
    <main className="flex flex-col grow justify-between gap-6 py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <h1 className="text-4xl font-semibold">
        {decodedRoutePath.toUpperCase()}
      </h1>
      <Separator />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2 md:gap-10 pt-6">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </main>
  );
}
