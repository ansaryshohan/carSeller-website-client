import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import Main from "../Layouts/Main";
import ErrorPage from "../SharedComponent/ErrorPage/ErrorPage";
import Login from "../Components/Login&Register/Login"
import Register from "../Components/Login&Register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoard from "../Components/DashBoard/DashBoard";
import PrivateRouter from "./PrivateRouter";
import ElectricCar from "../Components/Products/ElectricCar";
import LuxuryCar from "../Components/Products/LuxuryCar";
import Microbus from "../Components/Products/Microbus";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/microbus",
        element:<Microbus/>
      },
      {
        path:"/luxurycar",
        element:<LuxuryCar/>
      },
      {
        path:"/electriccar",
        element:<ElectricCar/>
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
  },
  {
    path:"/dashboard",
    element:<PrivateRouter><DashBoardLayout></DashBoardLayout></PrivateRouter>,
    children:[
      {
        path:'/dashboard',
        element:<PrivateRouter><DashBoard></DashBoard></PrivateRouter>
      },
      // {
      //   path:'/login/register',
      //   element:<Register></Register>
      // }
    ]
  }
])