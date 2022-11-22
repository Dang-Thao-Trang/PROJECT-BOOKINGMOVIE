import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";

import Home from "../modules/Home";
// import Auth from "../modules/Auth";
// import Signin from "../modules/Auth/Signin";
// import Signup from "../modules/Auth/Signup";
// import Checkout from "../modules/Checkout";
// import UserProjected from "./UserProjected";
import ErrorBoundary from "../components/ErrorBoundary";
import NotFound from "../components/NotFound/NotFound";
import AddMovie from "../modules/AddMovie";
// import Register from "../modules/Auth/Signin/Register";
import Signup from "../modules/Auth/Signup";
// trì hoãn việc tải component cho đến khi được gọi
const Auth = lazy(() => import("../modules/Auth"));
const Signin = lazy(() => import("../modules/Auth/Signin"));
const Movie = lazy(() => import("../modules/Movie"));
const Checkout = lazy(() => import("../modules/Checkout"));
const UserProjected = lazy(() => import("./UserProjected"));

const router = createBrowserRouter([
  { path: "/add-movie", element: <AddMovie /> },

  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      // home
      { index: true, element: <Home /> },
      // movies
      { path: "/movie/:movieId", element: <Movie /> },
      // checkout (đặt vé)
      {
        path: "/checkout/:checkoutId",
        element: (
          <UserProjected>
            <Checkout />
          </UserProjected>
        ),
      },
      // Authentication
      {
        path: "",
        element: <Auth />,
        children: [
          {
            path: "/signin",
            element: <Signin />,
          },
          { path: "/signup", element: <Signup /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
