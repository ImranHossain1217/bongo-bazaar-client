import React from "react";

const SizeList = ({ lists, hanldeSizeDelete }) => {
  return (
    <div className="mt-2">
      {lists.length > 0 && (
        <h1 className="text-gray-400 text-xl mb-3 capitalize font-serif">
          size lists
        </h1>
      )}
      {lists.length > 0 && (
        <div className="flex flex-wrap -mx-2">
          {lists.map((size) => (
            <div
              onClick={() => hanldeSizeDelete(size.name)}
              className="p-2"
              key={size.name}
            >
              <div className="border ml-2 mt-1.5 border-gray-400 py-1.5 px-2 rounded-md cursor-pointer uppercase">
                {size.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizeList;
