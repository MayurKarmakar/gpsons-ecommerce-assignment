import { RegistrationForm } from "@/components/registration-form";
import { formDetails } from "@/utils/constants";

export default async function Home() {

  return (
    
    <main className="flex grow px-6 py-12 justify-center lg:px-8">
      <div className="flex flex-col md:px-12 md:py-12 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="md:text-center text-2xl font-bold leading-9 tracking-tight">
            Create Account
          </h2>
        </div>
        <p className="md:mx-auto text-[14px]">
          {formDetails["register"].description}
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}
