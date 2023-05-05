import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authService from "../api/authService";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(authService.middleware)
  }
});

export default store;
