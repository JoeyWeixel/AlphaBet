import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/Leaderboards",
    element: <Home />,
  },
]);

export default Router;