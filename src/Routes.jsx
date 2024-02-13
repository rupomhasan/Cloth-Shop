import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/Common/ErrorPage";
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
import Product from "./Components/Profile/Admin/DashBoard/Product";
import EmployeeProfile from "./Components/Profile/Admin/EmployeeProfile";
import AddProducts from "./Components/Profile/Admin/DashBoard/AddProducts";
import UpdateProduct from "./Components/Profile/Admin/DashBoard/UpdateProduct";
import PrivetRoute from "./Components/Common/PrivetRoute";
import User from "./Components/Profile/Admin/User/User";
import Employee from "./Components/Profile/Admin/User/Employee";

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
        element: (
          <PrivetRoute>
            <DeailyDeals />
          </PrivetRoute>
        ),
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
        element: (
          <PrivetRoute>
            <MyCart />,
          </PrivetRoute>
        ),
      },
      {
        path: "/shop",
        loader: () => fetch("http://localhost:2500/products"),
        element: <Shop />,
      },
      {
        path: `/productDetails/:id`,
        element: (
          <PrivetRoute>
            <ProductsDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/productDetails/${params.id}`),
      },
      {
        path: "/userProfile",
        element: (
          <PrivetRoute>
            <UserProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <ProfileNav />
          </PrivetRoute>
        ),
        children: [
          {
            path: ":id",
            loader: ({ params }) =>
              fetch(`http://localhost:2500/employee/${params.id}`),
            element: <EmployeeProfile />,
          },

          {
            path: "",
            element: <DashBoard />,
          },
          {
            path: "user",
            loader: () => fetch("http://localhost:2500/users"),
            element: <User />,
          },
          {
            path: "employee",
            loader: () => fetch("http://localhost:2500/employee"),
            element: <Employee />,
          },
          {
            path: "products",
            loader: () => fetch("http://localhost:2500/products"),
            element: <Product />,
          },
          {
            path: "addproducts",
            element: <AddProducts />,
          },
          {
            path: "updateProduct/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:2500/productDetails/${params.id}`),
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
