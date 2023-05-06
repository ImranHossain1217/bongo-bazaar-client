import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authService from "../api/authService";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    "authReducer": authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authService.middleware);
  },
});

export default store;
