import React from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Products = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/create-product"
          className="flex items-center justify-center capitalize font-medium bg-gray-900 px-4 py-2 w-44"
        >
          create product<AiOutlinePlus className="ml-2" />
        </Link>
      </ScreenHeader>
    </Wrapper>
  );
};

export default Products;
