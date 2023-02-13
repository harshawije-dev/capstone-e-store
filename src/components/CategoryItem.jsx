import React from "react";

const CategoryItem = ({ title, img }) => {
  return (
    <div className="border rounded-md">
      <figure className="flex flex-1 justify-center items-center p-5 w-auto">
      <div
        className=""
        style={{ backgroundImage: `url(${img})` }}
      />
      <figcaption className="w-full text-center flex flex-col gap-2">
        <h2 className="font-semibold text-2xl capitalize">{title}</h2>
        <a href="#" className="text-lg font-base capitalize">shop now</a>
      </figcaption>
    </figure>
    </div>
  );
};

export default CategoryItem;
