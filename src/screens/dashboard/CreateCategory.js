import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { Link, useNavigate } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCreateMutation } from "../../redux/api/categoryApi";
import { useDispatch } from "react-redux";
import { setSuccessMsg } from "../../redux/reducers/globalReducer";

const CreateCategory = () => {
  const [createCategory, response] = useCreateMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleCategory = (e) => {
    e.preventDefault();
    const name = e.target.category.value;
    console.log(name);
    createCategory({ name });
  };

  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccessMsg(response?.data?.msg));
      navigate("/dashboard/categories");
    }
  }, [response?.isSuccess]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/categories"
          className="flex items-center justify-center capitalize font-medium bg-gray-900 px-4 py-2 w-44"
        >
          <AiOutlineArrowLeft className="mr-2" /> category list
        </Link>
      </ScreenHeader>
      <form
        onSubmit={handleCategory}
        className="w-full md:w-8/12 bg-gray-900 mx-auto p-5 rounded-md"
      >
        <h3 className="text-lg text-white uppercase mb-3">create category</h3>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <div className="mb-3" key={i}>
              <p className="bg-red-100 text-red-600 mb-2 p-2 rounded-md border-l-4 border-red-700">
                {error.msg}
              </p>
            </div>
          ))}
        <input
          type="text"
          placeholder="Category Name..."
          className="w-full p-2 rounded-sm outline-none bg-gray-700 mb-4"
          name="category"
        />
        <input
          type="submit"
          value="create-category"
          className="bg-indigo-600 px-4 py-2 rounded-md uppercase cursor-pointer transition-all hover:bg-indigo-700"
        />
      </form>
    </Wrapper>
  );
};

export default CreateCategory;
