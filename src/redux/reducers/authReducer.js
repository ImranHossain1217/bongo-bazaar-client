import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const adminTokenStorage = localStorage.getItem("admin-token");

const verifyToken = () => {
  if (adminTokenStorage) {
    const decodedToken = jwtDecode(adminTokenStorage);
    const expiresIn = new Date(decodedToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return adminTokenStorage;
    }
  } else {
    return null;
  }
};

const initialState = {
  adminToken: verifyToken(),
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("admin-token");
      state.adminToken = null;
    },
  },
});

export const { setAdminToken, logout } = authReducer.actions;
export default authReducer.reducer;
