import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authService from "../api/authService";
import authReducer from "../reducers/authReducer";
import categoryApi from "../api/categoryApi";
import globalReducer from "../reducers/globalReducer";
import productApi from "../api/productApi";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    globalReducer: globalReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authService.middleware,
      categoryApi.middleware,
      productApi.middleware
    );
  },
});

export default store;
