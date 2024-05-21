import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <main className="flex w-full h-full items-center gap-5 py-8 md:py-14 px-5 md:px-14 lg:px-32">
      <div className="flex flex-col w-full h-full grow overflow-y-auto gap-10 pt-6 lg:px-64">
        <h1 className="text-4xl font-semibold text-center">YOUR CART</h1>
        <div className="flex flex-col w-full grow gap-5 overflow-y-auto pt-10">
          <div className="flex flex-row h-full w-full items-start gap-3 md:gap-8">
            <div className="h-24 w-24 sm:h-32 sm:w-32 border rounded-md p-2 md:p-3 flex-shrink-0">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="flex flex-col grow h-24 sm:h-32 justify-between">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-8 w-28" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
