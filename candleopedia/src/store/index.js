import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authSlice";

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart_CandleOPedia");
    return savedCart ? JSON.parse(savedCart) : undefined;
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    auth: authReducer,
  },
  preloadedState: {
    cart: loadCartFromStorage(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
