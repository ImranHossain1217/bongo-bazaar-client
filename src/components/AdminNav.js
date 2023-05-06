import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const AdminNav = ({ openSidebar }) => {
  return (
    <nav className="fixed left-0 md:left-64 top-4 right-0 mx-3">
      <div className="bg-gray-800 w-full p-4 flex justify-between md:justify-end items-center">
        <AiOutlineMenu
          onClick={openSidebar}
          className="text-white text-2xl cursor-pointer md:hidden block"
        />
        <Link
          to="/"
          className="bg-indigo-600 px-4 py-2 text-white font-semibold capitalize rounded-md transition-all hover:bg-indigo-700"
        >
          logout
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
