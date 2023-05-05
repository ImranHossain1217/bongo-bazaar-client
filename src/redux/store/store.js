import { configureStore } from "@reduxjs/toolkit";
import authService from "../api/authService";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
  },
});

export default store;
