import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeMsg } from "../../redux/reducers/globalReducer";

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMsg());
    }, 2000);
  }, []);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/create-category"
          className="flex items-center justify-center capitalize font-medium bg-gray-900 px-4 py-2 w-44"
        >
          add categories <AiOutlinePlus className="ml-2" />
        </Link>
      </ScreenHeader>
      {success && (
        <p className="bg-green-100 text-green-600 mb-2 p-2 rounded-md border-l-4 border-green-700">
          {success}
        </p>
      )}
    </Wrapper>
  );
};

export default Categories;
