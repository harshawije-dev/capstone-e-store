import React, { useContext } from "react";
import UseContext, { ProductContext } from "../utils/context";

const ShoppingCart = () => {
  const { item } = useContext(UseContext);

  return (
    <>
      <div>ShoppingCart</div>
      {item.map((product) => {
        return (
          <div>
            <p>{product.title}</p>
            <p>{product.amount}</p>
          </div>
        );
      })}
    </>
  );
};

export default ShoppingCart;
