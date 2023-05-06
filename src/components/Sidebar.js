import React from "react";
import { FaProductHunt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 bg-gray-800 h-screen">
      <div className="bg-gray-50 px-5 py-3">
        <img src="/bongo-logo.png" alt="logo" />
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
