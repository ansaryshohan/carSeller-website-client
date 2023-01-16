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
import MyProducts from "../Components/DashBoardTopics/MyProducts";
import AllUsers from "../Components/DashBoardTopics/AllUsers";
import Buyers from "../Components/DashBoardTopics/Buyers";
import Sellers from "../Components/DashBoardTopics/Sellers";
import Blog from "../Components/Blog/Blog";
import AllBookings from "../Components/DashBoardTopics/AllBookings";

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
        path:"/blog",
        element:<Blog/>
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
        element:<MyOrders/>
      },
      {
        path:'/dashboard/addaproduct',
        element:<AddAProduct/>
      },
      {
        path:'/dashboard/myproduct',
        element:<MyProducts/>
      },
      {
        path:'/dashboard/allusers',
        element:<AllUsers/>
      },
      {
        path:'/dashboard/buyers',
        element:<Buyers/>
      },
      {
        path:'/dashboard/sellers',
        element:<Sellers/>
      },
      {
        path:'/dashboard/allbookings',
        element:<AllBookings/>
      },
    ]
  }
])