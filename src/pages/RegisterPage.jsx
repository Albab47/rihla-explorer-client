import { Link } from "react-router-dom";
import registerImg from "../assets/register.svg";
import Logo from "../components/Logo/Logo";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import { IoEye } from "react-icons/io5";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <section className="bg-gray-50 h-screen">
      {/* container */}
      <div className="max-w-screen-xl mx-auto pt-36 px-4 flex flex-col items-center md:flex-row">
        <div className="w-full sm:w-1/2">
          <img src={registerImg} alt="" />
        </div>

        <div className="w-full max-w-md p-8 bg-white space-y-3 rounded-xl border text-gray-800">
          <Logo />
          <h1 className="text-2xl font-semibold pt-3">Create an account</h1>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name field */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register('name', {required: true})}
              />
            </div>
            
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
                    message: "Email is not valid"
                  }
                })}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg> }
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
                {...register('password', {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message: "Should contain at least one uppercase and one lowercase letter"
                  }
                })}
                onKeyUp={() => trigger('password')}
              />
              {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
              <IoEye onClick={handleShowPassword} size={17} className={`${showPassword && 'text-blue-500'} cursor-pointer absolute top-10 right-3`} />
            </div>

            {/* confirm pass field */}
            <div className="mb-5">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register('confirmPassword', {
                  required: true,
                  validate: value => value === watch("password", "") || "The Password did not match"
                })}
                onKeyUp={() => trigger("confirmPassword")}
              />
              {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>}
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-200 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  {...register('terms', {required: true})}
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-amber-600 hover:underline dark:text-amber-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="text-white w-full mb-5 bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Register new account
            </button>
            <p className="text-light text-sm">
              Already have an account?{" "}
              <Link className="underline text-amber-400 font-bold" to="/login">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
