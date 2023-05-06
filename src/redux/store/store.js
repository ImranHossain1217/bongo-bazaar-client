import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authService from "../api/authService";
import authReducer from "../reducers/authReducer";
import categoryApi from "../api/categoryApi";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authService.middleware,
      categoryApi.middleware
    );
  },
});

export default store;
