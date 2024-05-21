import { FacebookIcon, Twitter, Youtube } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface NavigationItems {
  name: string;
  url: string;
}

function RenderNavigationItems({ items }: { items: NavigationItems[] }) {
  return items.map((item, index) => {
    return (
      <li className="text-sm leading-6 hover:text-black" key={index}>
        <Link href={item.url}>{item.name}</Link>
      </li>
    );
  });
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigationItems: NavigationItems[] = [
    { name: "Electronics", url: "/category/electronics" },
    { name: "Jewelery", url: "/category/jewelery" },
    { name: "Men's clothing", url: "/category/men's clothing" },
    { name: "Women's clothing", url: "/category/women's clothing" },
  ];

  return (
    <footer className="flex flex-col pb-8 pt-16 sm:pt-24 px-5 gap-8 md:px-14 lg:px-32 lg:pt-32">
      <div className="xl:grid xl:grid-cols-3 xl:gap-16">
        <div className="space-y-4">
          <Link href={"/"}>
            <p className="text-[20px] font-semibold">GPSONS Mart</p>
          </Link>
          <p className="text-sm leading-6">
            Modernize Your Home, Simplify Your Day with Our Appliances and
            Gadgets.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-2 xl:mt-0">
          <div>
            <p className="text-sm font-semibold leading-6">
              Popular categories
            </p>
            <ul className="mt-4 list-item space-y-4">
              <RenderNavigationItems items={navigationItems} />
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold leading-6">Customer service</p>
            <ul className="mt-4 list-item space-y-4">
              <li className="text-sm leading-6">Contact us</li>
              <li className="text-sm leading-6">Shipping</li>
              <li className="text-sm leading-6">Returns</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold leading-6">Company</p>
            <ul className="mt-4 list-item space-y-4">
              <li className="text-sm leading-6">About us</li>
              <li className="text-sm leading-6">Careers</li>
              <li className="text-sm leading-6">Affiliates</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold leading-6">Legal</p>
            <ul className="mt-4 list-item space-y-4">
              <li className="text-sm leading-6">Terms & Conditions</li>
              <li className="text-sm leading-6">Privacy Policy</li>
              <li className="text-sm leading-6">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="md:flex md:items-center md:justify-between p-2 md:p-4">
        <div className="flex space-x-6 md:order-2">
          <FacebookIcon size={28} />
          <Twitter size={28} />
          <Youtube size={28} />
        </div>
        <p className="text-xs leading-5 md:order-1 mt-4 md:mt-0">
          &copy; {currentYear} Cartify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
