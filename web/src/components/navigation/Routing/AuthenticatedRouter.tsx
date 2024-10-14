import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const AuthenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default AuthenticatedRouter;