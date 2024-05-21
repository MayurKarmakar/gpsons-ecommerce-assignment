"use client";

import { LoginFormSchema, loginFormSchema } from "@/schema/zod-schemas";
import { loginUser } from "@/utils/api-service";
import { formDetails } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useLocalStorage } from "@/hooks/use-local-storege";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

interface LoginFormProps {
  redirect: string;
}

function LoginForm({ redirect }: LoginFormProps) {
  const [loading, setLoading] = useState(false);
  const [_, setToken] = useLocalStorage();
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function handleFormValues(values: LoginFormSchema) {
    setLoading(true);
    try {
      const response = await loginUser();

      if (!(response instanceof AxiosError)) {
        setToken(response.token);
      }

      if (redirect.length > 0) {
        router.push(redirect);
      }
    } catch (err) {
      
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormValues)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex flex-col w-full gap-5">
          <Button
            className="w-full"
            type="submit"
            variant={"default"}
            loading={loading}
            value={"Login"}
          />

          <div className="flex flex-row w-full gap-5 text-[0.875rem]">
            <p>{formDetails["login"].infoText}</p>
            <Link
              href="/register"
              className="text-[#0ea5e9] hover:text-[#0ea4e9c4] font-semibold"
            >
              <p>{formDetails["login"].linkText}</p>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}

export { LoginForm };
