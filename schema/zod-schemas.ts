import z from "zod";

const productSearchDialogSchema = z.object({
  open: z.boolean(),
  onOpenChange: z.function().args(z.boolean()),
});

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const formDetailsSchema = z.object({
  login: z.object({
    name: z.string(),
    description: z.string(),
    infoText: z.string(),
    linkText: z.string(),
  }),
  register: z.object({
    name: z.string(),
    description: z.string(),
    infoText: z.string(),
    linkText: z.string(),
  }),
});

const registrationFormSchema = z.object({
  email: z.string().email("Not a valid email"),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

const userRegistrationSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  name: z.object({
    firstname: z.string(),
    lastname: z.string(),
  }),
  address: z.object({
    city: z.string(),
    street: z.string(),
    number: z.number(),
    zipcode: z.string().regex(/^\d{5}-\d{4}$/),
    geolocation: z.object({
      lat: z.string().regex(/^(-?\d+(\.\d+)?)/),
      long: z.string().regex(/^(-?\d+(\.\d+)?)/),
    }),
  }),
  phone: z.string().regex(/^\d{1}-\d{3}-\d{3}-\d{4}$/),
});

const loginResponseSchema = z.object({
  token: z.string(),
});

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

const orderSchema = z.object({
  id: z.number(),
  userId: z.number(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  products: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number(),
    })
  ),
  __v: z.number(),
});

const addToCartProductSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
});

const addToCartSchema = z.object({
  userId: z.number(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  products: z.array(addToCartProductSchema),
});

const ordersSchema = orderSchema.array();

const productsSchema = productSchema.array();

const formattedSearchItemsSchema = z.object({
  products: productsSchema,
  onOpenChange: z.function().args(z.boolean()),
});

const formatProductDetails = z.object({
  product: productSchema,
  onOpenChange: z.function().args(z.boolean()),
});

const cartProduct = productSchema.extend({
  quantity: z.number(),
  totalPrice: z.number(),
});

const filteredCartProducts = z.array(
  z.object({
    id: z.number(),
    quantity: z.number(),
    title: z.string(),
    image: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
    totalPrice: z.number(),
  })
);

const cartProducts = cartProduct.array();

const productCategorySchema = z.string();
const productCategoriesSchema = productCategorySchema.array();

type ProductSearchDialogProps = z.infer<typeof productSearchDialogSchema>;
type ProductCategoryScheama = z.infer<typeof productCategorySchema>;
type ProductCategoriesSchema = z.infer<typeof productCategoriesSchema>;
type LoginFormSchema = z.infer<typeof loginFormSchema>;
type FormDetailsSchema = z.infer<typeof formDetailsSchema>;
type RegistrationFormSchema = z.infer<typeof registrationFormSchema>;
type UserRegistrationSchema = z.infer<typeof userRegistrationSchema>;
type LoginResponseSchema = z.infer<typeof loginResponseSchema>;
type ProductSchema = z.infer<typeof productSchema>;
type ProductsSchema = z.infer<typeof productsSchema>;
type OrderSchema = z.infer<typeof orderSchema>;
type OrdersSchema = z.infer<typeof ordersSchema>;
type FormattedSearchItemsSchema = z.infer<typeof formattedSearchItemsSchema>;
type FormatProductDetailsSchema = z.infer<typeof formatProductDetails>;
type CartProduct = z.infer<typeof cartProduct>;
type CartProducts = z.infer<typeof cartProducts>;
type AddToCartProductSchema = z.infer<typeof addToCartProductSchema>;
type AddToCartSchema = z.infer<typeof addToCartSchema>;
type FilteredCartProducts = z.infer<typeof filteredCartProducts>;

export type {
  CartProduct,
  CartProducts,
  FormDetailsSchema,
  FormatProductDetailsSchema,
  FormattedSearchItemsSchema,
  LoginFormSchema,
  LoginResponseSchema,
  OrderSchema,
  OrdersSchema,
  ProductCategoriesSchema,
  ProductCategoryScheama,
  ProductSchema,
  ProductSearchDialogProps,
  ProductsSchema,
  RegistrationFormSchema,
  UserRegistrationSchema,
  AddToCartProductSchema,
  AddToCartSchema,
  FilteredCartProducts,
};

export { loginFormSchema, registrationFormSchema };
