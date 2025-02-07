import {createBrowserRouter  } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children : [
        {
          path :'/signup',
          element : <SignUp></SignUp>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
  ]);