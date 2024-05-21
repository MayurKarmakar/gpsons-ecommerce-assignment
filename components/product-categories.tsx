import { ProductCategoriesSchema } from "@/schema/zod-schemas";
import Link from "next/link";

function FormattedCategoryName({
  categories,
}: {
  categories: ProductCategoriesSchema;
}) {
  return categories.map((catName, index) => {
    return (
      <Link
        key={index}
        href={`/category/${catName}`}
        className="uppercase font-semibold hover:opacity-[0.7]"
      >
        {catName}
      </Link>
    );
  });
}

function ProductCategories({
  categories,
  orientation,
}: {
  categories: ProductCategoriesSchema;
  orientation: "vertical" | "horizontal";
}) {
  if (orientation === "vertical") {
    return (
      <div className="flex flex-col gap-5 text-[0.875rem]">
        <FormattedCategoryName categories={categories} />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-row w-auto gap-5 text-[15px]">
      <FormattedCategoryName categories={categories} />
    </div>
  );
}

export { ProductCategories };
