export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  CHECKOUT: "/checkout",
  LOGIN: "/login",
  REGISTER: "/register",
  MY_ORDER: "/my-order",
  ADMIN: {
    PRODUCTS: "/admin/products",
    ORDERS: "/admin/orders",
  },
  ORDER_SUCCESS: "/order-success",
};

export const ROLES = {
  CUSTOMER: "customer",
  ADMIN: "admin",
};

export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};
