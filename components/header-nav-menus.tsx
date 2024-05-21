"use client";

import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductSearchDialog } from "./product-search";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function HeaderNavMenus() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="flex flex-row w-auto h-5 items-center justify-center gap-5">
      <div className="md:flex gap-5 hidden h-5 md:items-center">
        <Link href={"/login"} className="font-medium hover:opacity-[0.7]">
          Sign in
        </Link>
        <Separator orientation="vertical" className="w-[2px]" />
        <Link href={"/register"} className="font-medium hover:opacity-[0.7]">
          Create account
        </Link>
      </div>
      <Button
        size={"icon"}
        variant={"link"}
        onClick={() => {
          setOpenSearch(true);
        }}
        icon={<SearchIcon />}
      />
      <Link href={"/cart"}>
        <ShoppingCartIcon />
      </Link>
      <ProductSearchDialog
        open={openSearch}
        onOpenChange={(flag) => {
          setOpenSearch(flag);
        }}
      />
    </div>
  );
}

export { HeaderNavMenus };
