import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apis/products/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { useFetchProductsQuery } from "./apis/products/productsApi";
