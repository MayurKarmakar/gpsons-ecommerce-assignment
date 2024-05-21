import { Skeleton } from "@/components/ui/skeleton";
import { formDetails } from "@/utils/constants";

export default async function Loading() {
  return (
    <div className="h-full px-6 py-12 justify-center lg:px-8">
      <div className="flex grow flex-col md:px-12 md:py-12 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="md:text-center text-2xl font-bold leading-9 tracking-tight">
            Create Account
          </h2>
        </div>
        <p className="mx-auto text-[14px]">
          {formDetails["register"].description}
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row w-full gap-5">
              <div className="flex flex-col w-full gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col w-full gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-8 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
