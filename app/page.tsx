import { MarketPlace } from "@/components/marketplace";
import { getAllProducts } from "@/utils/api-service";
import { AxiosError } from "axios";

export default async function Home() {
  const response = await getAllProducts();

  if (response instanceof AxiosError) {
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-between py-8 md:py-24 px-5 md:px-14 lg:px-32">
      <MarketPlace productsByCategory={response} />
    </main>
  );
}
