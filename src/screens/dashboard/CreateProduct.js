import React, { useState } from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAllCategoriesQuery } from "../../redux/api/categoryApi";
import Spinner from "../../components/Spinner";
import { TwitterPicker } from "react-color";
import { v4 as uuidv4 } from "uuid";
import Colors from "../../components/Colors";
import SizeList from "../../components/SizeList";
import PreviewImages from "../../components/PreviewImages";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateProduct = () => {
  const { data = [], isFetching } = useAllCategoriesQuery();
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState({
    title: "",
    discount: 0,
    price: 0,
    stock: 0,
    category: "",
    colors: [],
    image1: "",
    image2: "",
    image3: "",
  });

  const [sizeList] = useState([
    { name: "sm" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
    { name: "28" },
    { name: "29" },
    { name: "30" },
    { name: "31" },
    { name: "32" },
    { name: "38" },
    { name: "40" },
    { name: "42" },
    { name: "44" },
  ]);

  const [sizes, setSizes] = useState([]);
  const [preview, setPreview] = useState({
    image1: "",
    image2: "",
    image3: "",
  });

  const handleImage = (e) => {
    if (e.target.files.length !== 0) {
      setProducts({ ...products, [e.target.name]: e.target.files[0] });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview({ ...preview, [e.target.name]: reader.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInput = (e) => {
    setProducts({ ...products, [e.target.name]: [e.target.value] });
  };

  const saveColors = (color) => {
    const filterColor = products.colors.filter(
      (clr) => clr.color !== color.hex
    );
    setProducts({
      ...products,
      colors: [...filterColor, { color: color.hex, id: uuidv4() }],
    });
  };

  const deleteColor = (color) => {
    const filtered = products.colors.filter((clr) => clr.color !== color.color);
    setProducts({ ...products, colors: filtered });
  };

  const chooseSize = (sizeObj) => {
    const filtered = sizes.filter((size) => size.name !== sizeObj.name);
    setSizes([...filtered, sizeObj]);
  };

  const hanldeSizeDelete = (sizeName) => {
    const filterSize = sizes.filter((size) => size.name !== sizeName);
    setSizes(filterSize);
  };
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/products"
          className="flex items-center justify-center capitalize font-medium bg-gray-900 px-4 py-2 w-44"
        >
          <AiOutlineArrowLeft className="mr-2" /> products list
        </Link>
      </ScreenHeader>
      <div className="flex flex-wrap">
        <form className="w-full md:w-8/12">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="title"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title.."
                className="bg-gray-900 p-3 rounded-sm outline-none w-full focus:ring-[3px] ring-gray-700 transition-all duration-500 placeholder:text-gray-500 placeholder:capitalize"
                onChange={handleInput}
                value={products.title}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="discount"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                discount
              </label>
              <input
                type="text"
                name="discount"
                id="discount"
                placeholder="discount.."
                className="bg-gray-900 p-3 rounded-sm outline-none w-full focus:ring-[3px] ring-gray-700 transition-all duration-500 placeholder:text-gray-500 placeholder:capitalize"
                onChange={handleInput}
                value={products.discount}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="price"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="price.."
                className="bg-gray-900 p-3 rounded-sm outline-none w-full focus:ring-[3px] ring-gray-700 transition-all duration-500 placeholder:text-gray-500 placeholder:capitalize"
                onChange={handleInput}
                value={products.price}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="stoct"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                placeholder="stock.."
                className="bg-gray-900 p-3 rounded-sm outline-none w-full focus:ring-[3px] ring-gray-700 transition-all duration-500 placeholder:text-gray-500 placeholder:capitalize"
                onChange={handleInput}
                value={products.stock}
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="category"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                categories
              </label>
              {isFetching ? (
                <Spinner />
              ) : (
                data?.categories?.length > 0 && (
                  <select
                    name="categoy"
                    id="category"
                    className="bg-gray-900 p-3 rounded-sm outline-none w-full focus:ring-[3px] ring-gray-700 transition-all duration-500 placeholder:text-gray-500 placeholder:capitalize"
                    onChange={handleInput}
                    value={products.category}
                  >
                    <option value="choose Category">Choose Category</option>
                    {data?.categories?.map((category) => (
                      <option key={category._id}>{category.name}</option>
                    ))}
                  </select>
                )
              )}
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="colors"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                choose colors
              </label>
              <TwitterPicker onChangeComplete={saveColors} />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label
                htmlFor="colors"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                choose sizes
              </label>
              {sizeList.length > 0 && (
                <div className="flex flex-wrap -mx-2">
                  {sizeList.map((size) => (
                    <div
                      key={size.name}
                      onClick={() => chooseSize(size)}
                      className="border ml-1.5 mt-1.5 border-gray-400 py-1.5 px-2 rounded-md cursor-pointer uppercase"
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:6/12 p-3">
              <label
                htmlFor="image1"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                first image
              </label>
              <input
                type="file"
                name="image1"
                id="image1"
                className="file:py-2 file:px-4 file:rounded file:cursor-pointer file:bg-indigo-500 file:text-white file:font-medium file:mr-3"
                onChange={handleImage}
              />
            </div>
            <div className="w-full md:6/12 p-3">
              <label
                htmlFor="image2"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                second image
              </label>
              <input
                type="file"
                name="image2"
                id="image2"
                className="file:py-2 file:px-4 file:rounded file:cursor-pointer file:bg-indigo-500 file:text-white file:font-medium file:mr-3"
                onChange={handleImage}
              />
            </div>
            <div className="w-full md:6/12 p-3">
              <label
                htmlFor="image3"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                third image
              </label>
              <input
                type="file"
                name="image3"
                id="image3"
                className="file:py-2 file:px-4 file:rounded file:cursor-pointer file:bg-indigo-500 file:text-white file:font-medium file:mr-3"
                onChange={handleImage}
              />
            </div>
            <div className="w-full md:6/12 p-3">
              <label
                htmlFor="description"
                className="block mb-2 text-base capitalize text-gray-400"
              >
                Description
              </label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                id="description"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Create Product"
                className="bg-indigo-600 px-4 py-2 rounded-md uppercase cursor-pointer transition-all hover:bg-indigo-700"
              />
            </div>
          </div>
        </form>
        <div className="w-full md:w-4/12">
          <Colors colors={products.colors} deleteColor={deleteColor} />
          <SizeList lists={sizes} hanldeSizeDelete={hanldeSizeDelete} />
          <PreviewImages url={preview.image1} heading="Image 1" />
          <PreviewImages url={preview.image2} heading="Image 2" />
          <PreviewImages url={preview.image3} heading="Image 3" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateProduct;
