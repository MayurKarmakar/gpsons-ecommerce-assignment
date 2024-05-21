"use client";

import Image from "next/image";
import { useEffect } from "react";
import NoProducts from "../../../assets/images/no_products.png";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error text", error);
  }, [error]);

  return (
    <main className="flex flex-col grow items-center w-full justify-center gap-12 py-4 md:py-10 px-5 md:px-14 lg:px-32">
      <div className="flex flex-col h-auto w-full items-center">
        <Image
          src={NoProducts}
          width={NoProducts.width}
          height={NoProducts.height}
          alt="no-products"
          priority
        />
        <h1 className="text-[14px] md:text-xl lg:text-3xl font-semibold">
          We didn&apos;t find any products
        </h1>
      </div>
      <Button variant={"default"} onClick={reset} className="px-20 py-[1.5rem]">
        Retry
      </Button>
    </main>
  );
}
