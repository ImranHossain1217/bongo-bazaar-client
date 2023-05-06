import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
import Products from "../screens/dashboard/Products";
import Private from "./Private";
import Public from "./Public";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<Public><AdminLogin /></Public>}></Route>
        <Route path="/dashboard/products" element={<Private><Products/></Private>}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
