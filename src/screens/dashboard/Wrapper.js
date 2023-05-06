import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AdminNav from "../../components/AdminNav";

const Wrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64");
  const openSidebar = () => {
    setSide("left-0");
  };
  const closeSidebar = () => {
    setSide("-left-64");
  };
  return (
    <>
      <Sidebar side={side} closeSidebar={closeSidebar} />
      <AdminNav openSidebar={openSidebar} />
      <section className="ml-0 md:ml-64 p-4 bg-gray-900 min-h-screen">
        <div className="text-white mt-24 p-3 bg-gray-800">{children}</div>
      </section>
    </>
  );
};

export default Wrapper;
