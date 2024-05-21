"use client";

import { FormattedCartItems } from "@/components/formatted-cart-items";
import { useLocalStorage } from "@/hooks/use-local-storege";
import {
  FilteredCartProducts,
  OrdersSchema,
  ProductsSchema,
} from "@/schema/zod-schemas";
import { getAllProducts, getOrderDetailsByUserId } from "@/utils/api-service";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductsSchema>([]);
  const [orders, setOrders] = useState<OrdersSchema>([]);
  const [filteredCartProducts, setFilteredCartProducts] =
    useState<FilteredCartProducts>([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [token] = useLocalStorage();

  const calculateFilteredProducts = useCallback(() => {
    const productIdQuantityMap = new Map<number, number>();
    orders.flatMap((order) =>
      order.products.forEach((product) => {
        productIdQuantityMap.set(product.productId, product.quantity);
      })
    );
    const newFilteredProducts = products
      .filter((product) => productIdQuantityMap.has(product.id))
      .map((product) => {
        const itemQuantity = productIdQuantityMap.get(product.id) ?? 1;
        const totalPrice = product.price * itemQuantity;
        setGrandTotal((currentTotal) => currentTotal + totalPrice);

        return {
          ...product,
          quantity: itemQuantity,
          totalPrice: totalPrice,
        };
      });
    setFilteredCartProducts(newFilteredProducts);
  }, [products, orders]);

  useEffect(() => {
    calculateFilteredProducts();
  }, [orders, products, calculateFilteredProducts]);

  useEffect(() => {
    async function fetchProductsAndCartDetails() {
      const [products, orders] = await Promise.all([
        getAllProducts(),
        getOrderDetailsByUserId(),
      ]);

      if (!(products instanceof AxiosError)) {
        setProducts(products);
      }

      if (!(orders instanceof AxiosError)) {
        setOrders(orders);
      }
    }

    fetchProductsAndCartDetails();
  }, []);

  return (
    <main className="flex flex-col grow items-center gap-5 py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <h1 className="text-4xl font-semibold">YOUR CART</h1>
      <div className="flex flex-col w-full grow gap-5 overflow-y-auto pt-10">
        <FormattedCartItems
          cartProducts={filteredCartProducts}
          grandTotal={grandTotal}
        />
      </div>
    </main>
  );
}
