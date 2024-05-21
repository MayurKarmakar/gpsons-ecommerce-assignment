import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const productPlaceholders: React.ReactNode[] = Array.from({ length: 12 }).map(
    (_, index) => {
      return (
        <div className="flex flex-col flex-shrink-0 items-center p-2 md:p-5 border rounded-md" key={index}>
          <div className="w-32 h-32 md:w-52 md:h-52">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex flex-col h-auto gap-2 uppercase break-before-all w-full text-center pt-2 md:pt-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      );
    }
  );

  return (
    <main className="flex flex-col grow justify-between gap-6 py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <Skeleton className="h-12 w-56" />
      <Separator />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2 md:gap-10 pt-6">
        {[...productPlaceholders]}
      </div>
    </main>
  );
}
