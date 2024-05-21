import { ProductSearchDialogProps, ProductsSchema } from "@/schema/zod-schemas";
import { getAllProducts } from "@/utils/api-service";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FormattedSearchItems } from "./formatted-search-items";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader } from "./ui/sheet";
import { throttle } from "throttle-debounce";

function ProductSearchDialog({ open, onOpenChange }: ProductSearchDialogProps) {
  const [products, setProducts] = useState<ProductsSchema>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsSchema>([]);

  async function fetchProducts() {
    const result = await getAllProducts();

    if (!(result instanceof AxiosError)) {
      setProducts(result);
    }
  }

  function filterProducts(value: string) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  }
  const getFilteredProducts = throttle(800, filterProducts, {
    noLeading: false,
    noTrailing: false,
  });

  function handleInputChange(value: string) {
    if (value.length === 0) {
      setFilteredProducts([]);
    } else {
      getFilteredProducts(value);
    }
  }

  useEffect(() => {
    setFilteredProducts([]);
    fetchProducts();

    return () => {
      setFilteredProducts([]);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col h-full w-full md:max-w-3xl ">
        <SheetHeader className="pt-8">
          <Input
            placeholder="Search for..."
            className="focus-visible:ring-transparent"
            onChange={(event) => {
              handleInputChange(event.target.value);
            }}
          />
        </SheetHeader>
        <FormattedSearchItems
          products={filteredProducts}
          onOpenChange={onOpenChange}
        />
      </SheetContent>
    </Sheet>
  );
}

export { ProductSearchDialog };
