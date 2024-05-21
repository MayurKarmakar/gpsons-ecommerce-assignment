import { ProductsSchema } from "@/schema/zod-schemas";
import ProductCard from "./product-card";

async function MarketPlace({
  productsByCategory,
}: {
  productsByCategory: ProductsSchema;
}) {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2 md:gap-10">
      {productsByCategory.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </main>
  );
}

export { MarketPlace };
