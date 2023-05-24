import React from "react";

const Colors = ({ colors, deleteColor }) => {
  return (
    <div>
      {colors.length > 0 && (
        <h1 className="text-gray-400 text-xl mb-3 capitalize font-serif">
          colors list
        </h1>
      )}
      {colors.length > 0 && (
        <div className="flex flex-wrap">
          {colors.map((color) => (
            <div className="p-2" key={color.id}>
              <div
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                style={{ backgroundColor: color.color }}
                onClick={() => deleteColor(color)}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;
