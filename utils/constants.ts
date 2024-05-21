import { FormDetailsSchema } from "@/schema/zod-schemas";

const formDetails: FormDetailsSchema = {
  login: {
    name: "Login",
    description: "Get access to your Orders, Carts and Recommendations",
    infoText: "New to Ecommerce?",
    linkText: "Create an account",
  },
  register: {
    name: "Looks like you're new here!",
    description: "To get started",
    infoText: "Existing User?",
    linkText: "Log in",
  },
};

export { formDetails };
