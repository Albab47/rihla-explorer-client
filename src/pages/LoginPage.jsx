import loginImg from "../assets/login.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import useShowPassword from "../hooks/useShowPassword";
import { IoEye } from "react-icons/io5";

const LoginPage = () => {
  const {showPassword, handleShowPassword} = useShowPassword();
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-gray-50 h-screen">
      {/* container */}
      <div className="max-w-screen-xl mx-auto pt-36 px-4 flex flex-col items-center md:flex-row">
        <div className="w-full sm:w-1/2">
          <img src={loginImg} alt="" />
        </div>

        <div className="w-full max-w-md p-8 bg-white space-y-3 rounded-xl border text-gray-800">
          <Logo />
          <h1 className="text-2xl font-semibold pt-3">Login to your account</h1>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                id="email"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
            </div>

            {/* password field */}
            <div className="mb-5 relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                id="password"
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                placeholder="******"
                {...register("password", {required: true})}
              />
              <IoEye
                onClick={handleShowPassword}
                size={17}
                className={`${
                  showPassword && "text-blue-500"
                } cursor-pointer absolute top-10 right-3`}
              />
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="text-white w-full mb-5 bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Login
            </button>
            <p className="text-light text-sm">
              Don&apos;t have an account yet?{" "}
              <Link className="underline text-amber-400 font-bold" to="/register">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
