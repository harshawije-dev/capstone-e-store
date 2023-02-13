import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/404.pages";
import Shop from "./pages/Shop.pages";
import Profile from "./pages/Profile.pages";
import Navigation from "./components/Navigation";
import ShoppingCart from "./pages/Cart.pages";
import Product from "./pages/Product.page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "/shop/item/:itemId",
        element: <Product />,
      },
    ],
  },
]);

const router = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
