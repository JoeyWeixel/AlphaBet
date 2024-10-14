import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home.tsx";
import Auth from "@/pages/auth/auth.tsx";

const UnauthenticatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Auth />
    },
]);

export default UnauthenticatedRouter;