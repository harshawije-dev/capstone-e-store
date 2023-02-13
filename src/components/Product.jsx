import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UseContext, { ProductContext } from "../utils/context";

const Product = ({ id, img, title, category, brand, price }) => {
  const { productItemSetter } = useContext(UseContext);

  return (
    <ProductContext>
      <figure className="flex flex-col w-auto px-5 py-3 rounded-md border">
        <img src={img} alt={title} className="w-[350px] h-[350px]" />
        <figcaption className="p-4 mx-1 my-1">
          <div className="flex items-center">
            <h3 className="flex flex-1 font-bold text-xl">{title}</h3>
            <span>{category}</span>
          </div>
          <span>{brand}</span>
          <h2>Rs. {price}</h2>
          <div className="flex space-x-2 mt-6">
            <button
              type="button"
              className="px-5 py-3 bg-blue-500 text-white text-base font-semibold rounded-sm"
              onClick={() => {
                productItemSetter(title, price);
              }}
            >
              Add +
            </button>
            <Link to={`/shop/item/${id}`}>
              <p className="px-5 py-3 bg-blue-500 text-white text-base font-semibold rounded-sm">
                View
              </p>
            </Link>
          </div>
        </figcaption>
      </figure>
    </ProductContext>
  );
};

export default Product;
