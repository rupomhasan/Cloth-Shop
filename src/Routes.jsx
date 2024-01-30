import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Pages/Authentication/ErrorPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import MyCart from "./Pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <MyCart />,
      },
    ],
  },
]);

export default router;
