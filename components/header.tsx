import { getAllCategories } from "@/utils/api-service";
import { AxiosError } from "axios";
import Link from "next/link";
import { HeaderNavMenus } from "./header-nav-menus";
import { ProductCategories } from "./product-categories";
import { ResponsiveHeaderMenu } from "./responsive-header-menu";
async function Header() {
  const categories = await getAllCategories();

  if (categories instanceof AxiosError) {
    return null;
  }

  return (
    <div className="flex h-auto w-full sticky top-0 bg-white z-50 border-b">
      <div className="flex flex-row w-full items-center justify-between bg-inherit px-5 md:px-14 lg:px-32 py-3 md:py-6">
        <ResponsiveHeaderMenu categories={categories} />
        <Link href={"/"}>
          <p className="font-medium text-[20px]">GPSONS Mart</p>
        </Link>
        <ProductCategories categories={categories} orientation="horizontal" />
        <HeaderNavMenus />
      </div>
    </div>
  );
}

export { Header };
