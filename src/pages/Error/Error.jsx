import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="my-10 max-w-screen-xl mx-auto px-8 md:px-16">
            <div className="flex justify-center items-center h-[70vh]">
                <h2 className="text-4xl font-semibold">Oops!</h2>
            </div>
            <div>
                <Link to="/" >
                <button className="bg-indigo-400 px-4 py-1 text-xl font-semibold rounded-md">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;