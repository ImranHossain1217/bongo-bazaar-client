import React from "react";
import { FaProductHunt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} md:left-0 w-64 bg-gray-800 h-screen z-10 transition-all`}
    >
      <AiOutlineClose
        onClick={closeSidebar}
        className="absolute right-4 top-5 text-xl cursor-pointer md:hidden block"
      />
      <div className="bg-gray-50 px-5 py-3">
        <img className="w-36 md:w-44" src="/bongo-logo.png" alt="logo" />
      </div>
      <ul className="mt-5">
        <li className="flex items-center cursor-pointer transition-all px-4 py-2 hover:bg-gray-600">
          <FaProductHunt className="mr-2 text-white text-xl" />
          <Link className="text-white capitalize" to="/dashboard/products">
            products
          </Link>
        </li>
        <li className="flex items-center cursor-pointer transition-all px-4 py-2 hover:bg-gray-600">
          <FaShoppingBag className="mr-2 text-white text-xl" />
          <Link className="text-white capitalize" to="/dashboard/products">
            Orders
          </Link>
        </li>
        <li className="flex items-center cursor-pointer transition-all px-4 py-2 hover:bg-gray-600">
          <FaUsers className="mr-2 text-white text-xl" />
          <Link className="text-white capitalize" to="/dashboard/products">
            customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
