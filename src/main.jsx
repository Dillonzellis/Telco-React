import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Checking from "./routes/Checking";
import Products from "./routes/Products";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Checking />,
  },
  // {
  //   path: "/products/",
  //   element: <Products />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
