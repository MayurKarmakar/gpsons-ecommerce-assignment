"use client";

import {
  RegistrationFormSchema,
  UserRegistrationSchema,
  registrationFormSchema,
} from "@/schema/zod-schemas";
import { registerUser } from "@/utils/api-service";
import { formDetails } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
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
import { useRouter } from "next/navigation";

function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      username: "",
    },
  });

  async function handleFormValues(values: RegistrationFormSchema) {
    setLoading(true);

    const payload: UserRegistrationSchema = {
      email: values.email,
      password: values.password,
      name: {
        firstname: values.firstName,
        lastname: values.lastName,
      },
      username: values.username,
      address: {
        city: "",
        geolocation: {
          lat: "",
          long: "",
        },
        number: 0,
        street: "",
        zipcode: "",
      },
      phone: "",
    };

    try {
      await registerUser(payload);
      router.push("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.message);
      }
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormValues)}
        className="space-y-4"
      >
        <div className="flex flex-row gap-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
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
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
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
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
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
            value="Create Account"
          />
          <div className="flex flex-row w-full gap-5 text-[0.875]">
            <p>{formDetails["register"].infoText}</p>
            <Link
              href="/login"
              className="text-[#0ea5e9] hover:text-[#0ea4e9c4] font-semibold"
            >
              <p>{formDetails["register"].linkText}</p>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}

export { RegistrationForm };
