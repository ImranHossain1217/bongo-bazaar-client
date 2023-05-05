import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
