import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Pagination = ({ page, perPage, count, path, theme }) => {
  const totalLinks = Math.ceil(count / perPage);
  let startLoop = page;
  let diff = totalLinks - page;
  if (diff <= 3) {
    startLoop = totalLinks - 3;
  }
  let endLoop = startLoop + 3;
  if (startLoop <= 0) {
    startLoop = 1;
  }
  const links = () => {
    const allLinks = [];
    for (let i = startLoop; i <= endLoop; i++) {
      allLinks.push(
        <li key={i} className="pagination-li">
          <Link
            className={` ${
              theme === "light" ? "pagination-link-light" : "pagination-link"
            } ${page === i && "bg-indigo-500 text-white"}`}
            to={`/dashboard/categories/${i}`}
          >
            {i}
          </Link>
        </li>
      );
    }
    return allLinks;
  };
  const next = () => {
    if (page < totalLinks) {
      return (
        <li className="pagination-li">
          <Link
            className={`${
              theme === "light" ? "pagination-link-light" : "pagination-link"
            }`}
            to={`/dashboard/categories/${page + 1}`}
          >
            <AiOutlineDoubleRight className="text-xl" />
          </Link>
        </li>
      );
    }
  };
  const prev = () => {
    if (page > 1) {
      return (
        <li className="pagination-li">
          <Link
            className={`${
              theme === "light" ? "pagination-link-light" : "pagination-link"
            }`}
            to={`/dashboard/categories/${page - 1}`}
          >
            <AiOutlineDoubleLeft className="text-xl" />
          </Link>
        </li>
      );
    }
  };
  return (
    count > perPage && (
      <ul className="flex mt-2">
        {prev()}
        {links()}
        {next()}
      </ul>
    )
  );
};

export default Pagination;
