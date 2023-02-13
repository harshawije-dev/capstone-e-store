import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import * as Products from "../data/products.json";

const Product = () => {
  const { itemId } = useParams();
  const products = { productKey: Products };
  const [productItem, setProductItem] = useState(0);

  useEffect(() => {
    const item = products.productKey.shirts
      .filter(({ id }) => id === itemId)
      .at(0);
    return setProductItem(item);
  }, []);

  return (
    <div className="mx-6">
      <div className="flex flex-row w-full">
        <div className="flex bg-slate-100 w-1/2 h-screen">
          <figure className="w-60 h-72">
            <img
              src={productItem.img}
              alt={productItem.title}
              className="w-full h-full"
            />
            <figcaption></figcaption>
          </figure>
        </div>
        <div className="flex w-1/2 h-screen">
          <div className="flex flex-col">
            <h2 className="font-extrabold text-lg text-gray-800">
              {productItem.title}
            </h2>
            <h3>Rs. {productItem.amount}</h3>
            <button
              type="button"
              className="px-5 py-3 bg-blue-500 text-white text-base font-semibold rounded-sm"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
