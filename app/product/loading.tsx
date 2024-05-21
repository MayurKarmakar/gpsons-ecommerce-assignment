import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col grow items-center justify-between py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <div className="flex flex-col md:flex-row w-full h-4/5 justify-between md:rounded-2xl md:shadow-lg md:border md:p-12 gap-3 text-[#444444]">
        <Skeleton className="h-72 w-full md:grow md:w-72 rounded-md" />
        <div className="flex flex-col gap-5 grow p-0 md:p-8 mt-4 md:mt-0 items-start">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-3/5" />
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </main>
  );
}
