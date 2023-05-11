import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeMsg } from "../../redux/reducers/globalReducer";
import { useGetCategoriesQuery } from "../../redux/api/categoryApi";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

const Categories = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isLoading } = useGetCategoriesQuery(page);
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
      {isLoading ? (
        <Spinner />
      ) : (
        data?.categories.length > 0 && (
          <>
            <div>
              <table className="w-full bg-gray-900 rounded-md">
                <thead>
                  <tr className="border-b border-gray-800 text-left">
                    <th className="p-3 uppercase text-gray-500 font-medium">
                      name
                    </th>
                    <th className="p-3 uppercase text-gray-500 font-medium">
                      edit
                    </th>
                    <th className="p-3 uppercase text-gray-500 font-medium">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.categories?.map((category) => (
                    <tr className="odd:bg-gray-800" key={category._id}>
                      <td className="p-3 capitalize font-normal text-gray-100">
                        {category.name}
                      </td>
                      <td className="p-3 capitalize font-normal text-gray-100">
                        edit
                      </td>
                      <td className="p-3 capitalize font-normal text-gray-100">
                        delete
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
            />
          </>
        )
      )}
    </Wrapper>
  );
};

export default Categories;
