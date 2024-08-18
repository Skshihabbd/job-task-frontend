// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/Login";
import Registration from "./pages/Registration";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Products from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/",
        element: <Login />,
      },
      { path: "registration", 
        element: <Registration /> 
      },
      {
        path:'product',
        element:<Products></Products>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authorization>
    <RouterProvider router={router} />
  </Authorization>
  
);
