"use client";

import { ProductCategoriesSchema } from "@/schema/zod-schemas";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent } from "./ui/sheet";

function RenderProductCategories({
  categories,
  setOpen,
}: {
  categories: ProductCategoriesSchema;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return categories.map((categoryName, index) => {
    return (
      <Link
        key={index}
        href={`/category/${categoryName}`}
        onClick={() => setOpen(false)}
        className="uppercase font-semibold hover:opacity-[0.7]"
      >
        {categoryName}
      </Link>
    );
  });
}

function ResponsiveHeaderMenu({
  categories,
}: {
  categories: ProductCategoriesSchema;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        className="block lg:hidden"
        size={"icon"}
        variant={"link"}
        icon={<MenuIcon />}
        onClick={() => setOpen(!open)}
      />
      <SheetContent className="block lg:hidden py-10" side={"left"}>
        <div className="flex flex-col gap-5">
          <p className="font-medium">Categories</p>
          <div className="flex flex-col items-start gap-5 text-[0.875rem] px-5 pb-5">
            <RenderProductCategories
              categories={categories}
              setOpen={setOpen}
            />
          </div>
          <Link href={"/login"} className="font-medium">
            <SheetClose>Sign in</SheetClose>
          </Link>
          <Link href={"/register"} className="font-medium">
            <SheetClose>Create account</SheetClose>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { ResponsiveHeaderMenu };

