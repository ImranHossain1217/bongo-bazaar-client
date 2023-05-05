import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <form className="p-5 bg-gray-800 w-10/12 md:w-8/12 lg:w-4/12 rounded-md shadow-md">
        <h2 className="text-xl text-white capitalize mb-3">dashboard login</h2>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded-md outline-none bg-gray-900 text-white"
            placeholder="Enter Email..."
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="w-full p-2 rounded-md outline-none bg-gray-900 text-white"
            placeholder="Enter Password..."
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Login &rarr;"
            className="w-full p-2 rounded-md bg-indigo-600 text-white font-semibold uppercase cursor-pointer"
            placeholder="Enter Email..."
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
