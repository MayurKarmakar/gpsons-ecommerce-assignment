import {
  AddToCartSchema,
  LoginFormSchema,
  LoginResponseSchema,
  OrdersSchema,
  ProductCategoriesSchema,
  ProductSchema,
  ProductsSchema,
  UserRegistrationSchema,
} from "@/schema/zod-schemas";
import axios, { AxiosError, AxiosResponse } from "axios";

async function getAllCategories(): Promise<
  ProductCategoriesSchema | AxiosError
> {
  try {
    const response: AxiosResponse<ProductCategoriesSchema> = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return new AxiosError("Error while fetching categories");
  }
}

async function registerUser(
  payload: UserRegistrationSchema
): Promise<UserRegistrationSchema | AxiosError> {
  try {
    const response: AxiosResponse<UserRegistrationSchema> = await axios.post(
      "https://fakestoreapi.com/users",
      { ...payload }
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return new AxiosError("Failed to register user.");
  }
}

async function loginUser(): Promise<LoginResponseSchema | AxiosError> {
  const credentials: LoginFormSchema = {
    username: "mor_2314",
    password: "83r5^_",
  };
  try {
    const response: AxiosResponse<LoginResponseSchema> = await axios.post(
      "https://fakestoreapi.com/auth/login",
      JSON.stringify({ ...credentials }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return new AxiosError("Your email or password is incorrect");
  }
}

async function getAllProducts(): Promise<ProductsSchema | AxiosError> {
  try {
    const response: AxiosResponse<ProductsSchema> = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    throw new AxiosError("Failed to fetch products");
  }
}

async function getProductDetailsById(
  productId: string
): Promise<ProductSchema | AxiosError> {
  try {
    const response: AxiosResponse<ProductSchema> = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return new AxiosError("Failed to fetch product details");
  }
}

async function getOrderDetailsByUserId(
  userId?: number
): Promise<OrdersSchema | AxiosError> {
  try {
    const response: AxiosResponse<OrdersSchema> = await axios.get(
      "https://fakestoreapi.com/carts/user/2"
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return new AxiosError("Failed to fetch orders");
  }
}

async function getProductsByCategory(
  categoryName: string
): Promise<ProductsSchema | AxiosError> {
  try {
    const response: AxiosResponse<ProductsSchema> = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    throw new AxiosError("Failed to fetch orders");
  }
}

async function addToCart(
  payload: AddToCartSchema
): Promise<AddToCartSchema | AxiosError> {
  try {
    const response: AxiosResponse<AddToCartSchema> = await axios.post(
      "https://fakestoreapi.com/carts",
      { ...payload }
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new AxiosError(err.message);
    }
    throw new AxiosError("Failed to add product");
  }
}

export {
  getAllCategories,
  getProductDetailsById,
  getAllProducts,
  loginUser,
  registerUser,
  getOrderDetailsByUserId,
  getProductsByCategory,
  addToCart
};
