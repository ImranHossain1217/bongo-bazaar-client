import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { adminToken } = useSelector((state) => state.authReducer);
  return adminToken ? children : <Navigate to="/admin-login" />;
};

export default Private;
