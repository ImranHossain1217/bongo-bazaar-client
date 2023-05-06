import { createSlice } from "@reduxjs/toolkit";

const adminTokenStorage = localStorage.getItem("admin-token");

const initialState = {
  adminToken: adminTokenStorage ? adminTokenStorage : null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;
