import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice,
  },
  middleware: (getMiddleWare) => getMiddleWare().concat(apiSlice.middleware),
  devTools: true,
});
