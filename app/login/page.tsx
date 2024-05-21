import { LoginForm } from "@/components/login-form";
import { formDetails } from "@/utils/constants";

interface HomeProps {
  params: {},
  searchParams: {
    redirect?: string
  }
}

export default async function Home(props: HomeProps) {
  const redirectUrl = props.searchParams.redirect ?? ''

  return (
    <div className="flex grow px-6 py-12 justify-center lg:px-8">
      <div className="flex flex-col md:px-12 md:py-12 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 md:text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>
        <p className="mx-auto text-[14px]">
          {formDetails["login"].description}
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm redirect={redirectUrl}/>
        </div>
      </div>
    </div>
  );
}
