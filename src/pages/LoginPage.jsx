import loginImg from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import useShowPassword from "../hooks/useShowPassword";
import { IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { showPassword, handleShowPassword } = useShowPassword();
  const { LoginWithPassword, loginWithGoogle, loginWithTwitter } = useAuth();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const result = await LoginWithPassword(email, password);
      if (result.user) {
        reset()
        navigate('/')
        return toast.success("Login successful");
      }
    } catch (err) {
      const errorCode = err.code;
      if (errorCode === "auth/invalid-credential") {
        toast.error("Email and password do not match. Please try again.");
      }
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const result = await loginWithGoogle();
      if (result.user) {
        navigate('/')
        toast.success(`Logged in as ${result.user.displayName}`);
      }
    } catch (err) {
      const errorCode = err.code;
      toast.error(errorCode);
    }
  };

  const handleLoginWithTwitter = async() => {
    try {
      const result = await loginWithTwitter();
      console.log(result);
      // if (result.user) {
      //   navigate('/')
      //   toast.success(`Logged in as ${result.user.displayName}`);
      // }
    } catch (err) {
      const errorCode = err.code;
      toast.error(errorCode);
    }
  }

  return (
    <section className="bg-gray-50 h-screen dark:bg-gray-700">
      {/* container */}
      <div className="max-w-screen-xl mx-auto pt-36 px-4 flex flex-col items-center gap-4 md:flex-row">
        <div className="w-full flex justify-center sm:w-1/2">
          <img src={loginImg} alt="" className="h-64 sm:h-auto" />
        </div>

        <div className="w-full max-w-md p-8 bg-white space-y-3 rounded-xl border text-gray-800 dark:bg-gray-800 dark:border-gray-700">
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
                {...register("password", { required: true })}
              />
              <IoEye
                onClick={handleShowPassword}
                size={17}
                className={`${
                  showPassword ? "text-blue-500" : "text-gray-500"
                } cursor-pointer absolute top-10 right-3`}
              />
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="text-white w-full bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Login
            </button>
          </form>

          {/* hr line */}
          <div className="inline-flex relative items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>

          {/* social login */}
          <div className="grid gap-2">
            <button
              onClick={handleLoginWithGoogle}
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            >
              <FcGoogle size={20} className="mr-2" />
              Login with Google
            </button>
            <button
              onClick={handleLoginWithTwitter}
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-black dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <FaXTwitter size={16} className="mr-2" />
              Login with twitter
            </button>
          </div>

          <p className="text-light text-sm dark:text-gray-300">
            Don&apos;t have an account yet?{" "}
            <Link className="underline text-amber-400 font-bold" to="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
