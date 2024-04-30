import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-amber-50 dark:bg-gray-900 ">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10 lg:py-14">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo />
            <div className="mt-5 max-w-xs">
              <p className="text-light">
                RihlaExplorer is a site where we can add any Middle East
                countries tourist spots. Anyone can add spot.
              </p>
              <div className="flex gap-3 mt-4">
                <Link to="#">
                  <FaGithub className="text-gray-500 hover:text-gray-900 dark:hover:text-white size-4" />
                  <span className="sr-only">Github account</span>
                </Link>
                <Link to="#">
                  <FaFacebook className="text-gray-500 hover:text-blue-500 dark:hover:text-white size-4" />
                  <span className="sr-only">Facebook page</span>
                </Link>
                <Link to="#">
                  <FaXTwitter className="text-gray-500 hover:text-gray-900 dark:hover:text-white size-4" />
                  <span className="sr-only">Facebook page</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 w-3/5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Nav links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/tourist-spots" className="hover:underline">
                    All tourist spots
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline">Add new spot</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link className="hover:underline ">Github</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
            <div className="max-w-sm">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact us
              </h2>
              <p className="text-light">You can contact us by our email or you can directly call us at rihla@gmail.com</p>
            </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to={"/"} className="hover:underline">
              RihlaExplorer™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
