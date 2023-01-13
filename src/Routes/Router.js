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
import MyOrders from "../Components/DashBoardTopics/MyOrders";
import AddAProduct from "../Components/DashBoardTopics/AddAProduct";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
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
        element:<LoginRegisterLayout/>,
        children:[
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/login/register',
            element:<Register/>
          }
        ]
      }
    ]
  },
  {
    path:"/dashboard",
    element:<PrivateRouter><DashBoardLayout/></PrivateRouter>,
    children:[
      {
        path:'/dashboard',
        element:<PrivateRouter><DashBoard/></PrivateRouter>
      },
      {
        path:'/dashboard/myorders',
        element:<PrivateRouter><MyOrders/></PrivateRouter>
      },
      {
        path:'/dashboard/addaproduct',
        element:<PrivateRouter><AddAProduct/></PrivateRouter>
      }
    ]
  }
])