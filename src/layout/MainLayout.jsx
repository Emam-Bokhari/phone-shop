
import { NavLink, Outlet } from "react-router-dom";
import Error from "../pages/Error/Error";

const MainLayout = () => {
    return (
        <div>

            <section className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">
                <div className="flex justify-evenly items-center shadow-md py-4 rounded-md">
                    <div>
                        <h2 className="text-2xl font-semibold">Phone Shop</h2>
                    </div>

                    {/* Start Navbar */}
                    <nav>
                        <ul className="flex gap-5 text-xl">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-green-500" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/favourites"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-green-500" : ""
                                    }
                                >
                                    Favourites
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-green-500" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* OUtlet */}
                <div>
                    <Outlet />
                </div>
            </section>

        </div>
    );
};

export default MainLayout;

