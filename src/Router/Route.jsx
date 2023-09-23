import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/Favourites";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader:()=>fetch("./phonesData.json"),
                element: <Home />
            },
            {
                path: "/favourites",
                element: <Favourites />
            },
            {
                path:"/login"
            }
        ]
    }
])
export default Route