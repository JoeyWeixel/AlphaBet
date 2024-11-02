import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/auth/auth.tsx";

const AuthenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default AuthenticatedRouter;