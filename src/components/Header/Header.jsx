import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser, logoutUser } = useAuth();

  const handleUserDropdownOpen = () => {
    setUserDropdownOpen(true);
  };
  const handleUserDropdownClose = () => {
    setUserDropdownOpen(false);
  };
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("logout successful");
    } catch (err) {
      toast.success("Failed to logout");
    }
    // logoutUser().then(() => {
    // })
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-white bg-amber-400 rounded md:bg-transparent md:text-amber-400 md:p-0 md:dark:text-amber-500"
      : "block py-2 px-3 text-gray-600 rounded md:p-0 dark:text-gray-100";

  return (
    <nav className="bg-white dark:bg-gray-900 h-16 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
        {/* website logo */}
        <Logo />

        {/* User dropdown + menu btn */}
        <div className="flex items-center relative md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {currentUser ? (
            <div
              onMouseLeave={handleUserDropdownClose}
              onMouseEnter={handleUserDropdownOpen}
            >
              <button
                type="button"
                className="flex text-sm border-4 shadow-md duration-300 border-gray-300 bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={currentUser.photoURL}
                  alt="user photo"
                />
              </button>

              {/* <!-- Dropdown content --> */}
              <div
                className={`z-50 my-4 ${
                  userDropdownOpen ? "" : "hidden"
                } top-4 -right-1 absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {currentUser.displayName || "Unknown"}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {currentUser.email || "Unknown"}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex md:order-2 gap-4 md:space-x-0 rtl:space-x-reverse">
              <Link to="/login">
                <Button btnGhost={true}>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}

          {/* Hamburger Menu btn */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? <IoIosClose size={35} /> : <FcMenu size={25} />}
          </button>
        </div>

        {/* Navbar */}
        <div
          className={`items-center justify-between duration-500 absolute top-12 right-0 ${
            menuOpen ? "" : "hidden"
          } md:static w-56 md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={navLinkStyles} aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tourist-spots"
                className={navLinkStyles}
                aria-current="page"
              >
                Tourists Spots
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-spot"
                className={navLinkStyles}
                aria-current="page"
              >
                Add Spots
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-list"
                className={navLinkStyles}
                aria-current="page"
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
