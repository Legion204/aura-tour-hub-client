import Lottie from "lottie-react";
import errorAnimation from "../assets/error-animation.json"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center sm:p-16  dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                    <Lottie animationData={errorAnimation} loop={true} />
                    <p className="text-3xl">Page Not Found</p>
                    <Link to={"/"} className="px-8 py-3 font-semibold rounded bg-accent text-white">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;