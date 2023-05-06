import React from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Categories = () => {
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
    </Wrapper>
  );
};

export default Categories;
