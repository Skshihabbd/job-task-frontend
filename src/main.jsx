import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/Login";
import Registration from "./pages/Registration";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "registration", 
        element: <Registration /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  
);
