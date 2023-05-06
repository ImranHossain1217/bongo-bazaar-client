import React, { useEffect } from "react";
import { useAuthLoginMutation } from "../../redux/api/authService";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [login, response] = useAuthLoginMutation();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email,
      password,
    };
    login(user);
  };

  useEffect(() => {
    if (response?.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);
       dispatch(setAdminToken(response?.data?.token));
       navigate('/dashboard/products');
    }
  }, [response?.isSuccess]);

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="p-5 bg-gray-800 w-10/12 md:w-8/12 lg:w-4/12 rounded-md shadow-md"
      >
        <h2 className="text-xl text-white capitalize mb-3">dashboard login</h2>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <div className="mb-3" key={i}>
              <p className="bg-red-100 text-red-600 mb-2 p-2 rounded-md">
                {error.msg}
              </p>
            </div>
          ))}
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
            value={response?.isLoading ? "Loading..." : "Login"}
            className="w-full p-2 rounded-md bg-indigo-600 text-white font-semibold uppercase cursor-pointer"
            placeholder="Enter Email..."
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
