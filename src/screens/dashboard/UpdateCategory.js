import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
} from "../../redux/api/categoryApi";
import Spinner from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { setSuccessMsg } from "../../redux/reducers/globalReducer";

const UpdateCategory = () => {
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const { data, isFetching } = useFetchCategoryQuery(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [update, response] = useUpdateCategoryMutation();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleUpdate = (e) => {
    e.preventDefault();
    update({ name: category, id });
  };

  useEffect(() => {
    if (data?.category?.name) {
      setCategory(data?.category?.name);
    }
  }, [data?.category?.name]);

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
      {!isFetching ? (
        <form
          onSubmit={handleUpdate}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-sm outline-none bg-gray-700 mb-4"
            name="category"
          />
          <input
            type="submit"
            value="Update"
            className="bg-indigo-600 px-4 py-2 rounded-md uppercase cursor-pointer transition-all hover:bg-indigo-700"
          />
        </form>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default UpdateCategory;
