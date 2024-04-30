import Lottie from "lottie-react";
import ErrorAnimation from "../../public/404-page.json";
import { Link } from "react-router-dom";
import { FaLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-amber-500 font-bold mb-6">Page not Found!</h1>
            <Link to="/">
              <button className="btn-secondary"><FaLeftLong className="mr-2" /> Back to Homepage</button>
            </Link>
            <Lottie animationData={ErrorAnimation} loop={true} />
        </section>
    );
};

export default ErrorPage;