import UseContext, { ProductContext } from "../utils/context";
import { Outlet, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const Navigation = () => {

  return (
    <ProductContext>
      <nav className="flex flex-1 h-12 items-center gap-2 w-full px-10">
        <div className="flex flex-1">
          <Link to={`/`}>
            <h2>Crown Shop</h2>
          </Link>
        </div>
        <ul className="flex gap-2 justify-end">
          <li>
            <Link to={`shop`}>
              <h3>Shop</h3>
            </Link>
          </li>
          <li>
            <Link to={`profile`}>
              <h3>Profile</h3>
            </Link>
          </li>
          <li>
            <Link to={`cart`}>
              <h3>Cart</h3>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </ProductContext>
  );
};

export default Navigation;
