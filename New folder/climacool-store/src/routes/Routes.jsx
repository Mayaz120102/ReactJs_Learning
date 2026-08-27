import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Footwears from "../pages/Footwears";
import FootWearDetails from "../pages/FootWearDetails";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/footwears",
        element: <Footwears />,
      },
      {
        path: "/footwears/:id",
        element: (
          <ProtectedRoutes>
            <FootWearDetails />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
