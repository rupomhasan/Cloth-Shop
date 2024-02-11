import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Pages/Authentication/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import MyCart from "./Pages/MyCart";
import DeailyDeals from "./Pages/Home/DeilyDeals/DeailyDeals";
import ProductsDetails from "./Components/Product/Details/ProductsDetails";
import Shop from "./Pages/Shop/Shop";
import UserProfile from "./Components/Profile/UserProfile/UserProfile";
import ProfileNav from "./Components/Profile/Admin/ProfileNav";
import DashBoard from "./Components/Profile/Admin/DashBoard/DashBoard";
import AddUser from "./Components/Profile/Admin/User/AddUser";
import Product from "./Components/Profile/Admin/Product";
import EmployeeProfile from "./Components/Profile/Admin/EmployeeProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:2500/products"),
        element: <Home />,
      },
      {
        path: "/",
        element: <DeailyDeals />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myCart",
        loader: () => fetch("http://localhost:2500/addedCart"),
        element: <MyCart />,
      },
      {
        path: "/shop",
        loader: () => fetch("http://localhost:2500/products"),
        element: <Shop />,
      },
      {
        path: `/productDetails/:id`,
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:2500/productDetails/${params.id}`),
      },
      {
        path: "/profile",
        element: <ProfileNav />,
        children: [
          {
            path: "",
            element: <EmployeeProfile />,
          },

          {
            path: "dashboard",
            element: <DashBoard />,
          },
          {
            path: "adduser",
            element: <AddUser />,
          },
          {
            path: "products",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

export default router;
