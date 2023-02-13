import React, {  } from "react";
import Product from "../components/Product";
import * as Products from "../data/products.json";

const Shop = () => {
  const products = { productKey: Products };

  return (
    <div>
      <h2>Shop Page</h2>
      <section className="flex flex-row gap-3 mx-4 px-5">
        {products.productKey.shirts.map(
          ({ id, title, amount, img, brand, category }) => {
            return (
              <Product
                key={id}
                title={title}
                brand={brand}
                img={img}
                category={category}
                price={amount}
                id={id}
              />
            );
          }
        )}
      </section>
    </div>
  );
};

export default Shop;
