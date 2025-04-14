import { configureStore } from "@reduxjs/toolkit";
import { stockApi } from "./ApiSlice";

export const store = configureStore({
  reducer: {
    [stockApi.reducerPath]: stockApi.reducer,
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware().concat(stockApi.middleware),
});
