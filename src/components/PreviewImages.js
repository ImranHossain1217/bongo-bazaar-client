import React from "react";

const PreviewImages = ({ url, heading }) => {
  return (
    <div>
      {url && (
        <div>
          <h2 className="text-xl font-serif my-2">{heading}</h2>
          <div className="w-full">
            <img
              className="h-[200px] w-full object-contain"
              src={url}
              alt={heading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewImages;
