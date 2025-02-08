import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import CreateEvent from "../pages/CreateEvent";
import Home from "../pages/Home";
import MyEvent from "../pages/MyEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/create',
        element: <CreateEvent></CreateEvent>
      },
      {
        path : '/my-events',
        element : <MyEvent></MyEvent>
      }
    ]
  },
]);