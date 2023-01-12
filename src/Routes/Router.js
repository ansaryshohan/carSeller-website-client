import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Main from "../Layouts/Main";
import ErrorPage from "../SharedComponent/ErrorPage/ErrorPage";
import Login from "../Components/Login&Register/Login"
import Register from "../Components/Login&Register/Register";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<LoginRegisterLayout></LoginRegisterLayout>,
        children:[
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/login/register',
            element:<Register></Register>
          }
        ]
      }
    ]
  }
])