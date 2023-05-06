import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducer";

const AdminNav = ({ openSidebar }) => {
  const dispatch = useDispatch();

  const adminLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="fixed left-0 md:left-64 top-4 right-0 mx-3">
      <div className="bg-gray-800 w-full p-4 flex justify-between md:justify-end items-center">
        <AiOutlineMenu
          onClick={openSidebar}
          className="text-white text-2xl cursor-pointer md:hidden block"
        />
        <button
          onClick={adminLogout}
          className="bg-indigo-600 px-4 py-2 text-white font-semibold capitalize rounded-md transition-all hover:bg-indigo-700"
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
