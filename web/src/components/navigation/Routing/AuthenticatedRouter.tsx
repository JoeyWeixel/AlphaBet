import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/auth/auth.tsx";
import FriendPage from "@/pages/friends/FriendPage.tsx";

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
    path: "/friends",
    element: <FriendPage/>,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default AuthenticatedRouter;