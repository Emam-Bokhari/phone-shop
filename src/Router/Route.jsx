import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/Favourites";
import Error from "../pages/Error/Error";
import Login from './../pages/Login/Login';
import Phone from "../pages/Phone/Phone";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                loader: () => fetch("./phonesData.json"),
                element: <Home />
            },
            {
                path: "/favourites",
                element: <Favourites />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/phone/:id",
                loader:()=>fetch("./phonesData.json"),
                element: <Phone />
            }
        ]
    }
])
export default Route