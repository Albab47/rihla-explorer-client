import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth.js";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSpotPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate()

  const spot = useLoaderData()

  const onUpdateSpot = (data) => {

    fetch(`http://localhost:5000/update-spot/${spot._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Spot Updated successfully");
          reset();
          navigate('/tourist-spots')
        }
      });
  };

  return (
    <section className="bg-gray-50 h-screen">
      {/* container */}
      <div className="max-w-3xl mx-auto pt-24 px-4 flex flex-col items-center md:flex-row">
        <div className="w-full p-8 bg-white space-y-3 rounded-xl border text-gray-800">
          <h1 className="text-2xl mb-8 font-semibold pt-3 text-center">
            Update existing spot
          </h1>

          {/* form */}
          <form
            onSubmit={handleSubmit(onUpdateSpot)}
            className="grid sm:grid-cols-6 gap-5"
          >
            {/* name field */}
            <div className="sm:col-span-3">
              <label
                htmlFor="spotName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Spot name
              </label>
              <input
                type="text"
                id="spotName"
                placeholder="Spot"
                defaultValue={spot.spotName}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("spotName", { required: true })}
              />
            </div>

            {/* season options */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                id="country"
                {...register("country")}
                className="block w-full p-2 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              >
                <option defaultValue={spot.country}>{spot.country}</option>
                <option value="Jordan">Jordan</option>
                <option value="Oman">Oman</option>
                <option value="Yemen">Yemen</option>
                <option value="UAE">UAE</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Baalbek">Baalbek</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Location"
                defaultValue={spot.location}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("location", { required: true })}
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="avgCost"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Average Const
              </label>
              <input
                type="number"
                id="avgCost"
                placeholder="Average Const"
                defaultValue={spot.avgCost}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("avgCost", { required: true })}
              />
            </div>

            {/* season options */}
            <div className="sm:col-span-2">
              <label
                htmlFor="season"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seasonality
              </label>
              <select
                id="season"
                {...register("season")}
                className="block w-full p-2 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              >
                <option defaultValue={spot.season}>{spot.season}</option>
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
                <option value="Year-round">Year round</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="travelTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Travel time
              </label>
              <input
                type="text"
                id="travelTime"
                placeholder="Travel time i.e. 7 days"
                defaultValue={spot.travelTime}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("travelTime", { required: true })}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="totalVisitorsr"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Visitors
              </label>
              <input
                type="number"
                id="totalVisitors"
                placeholder="Per Year i.e. 10000"
                defaultValue={spot.totalVisitors}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("totalVisitors", { required: true })}
              />
            </div>

            {/* photo URL field */}
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your photo
              </label>
              <input
                type="text"
                id="photo"
                placeholder="Photo URL"
                defaultValue={spot.photoURL}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("photoURL", { required: false })}
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                placeholder="Write a short description..."
                defaultValue={spot.desc}
                {...register("desc", { required: true })}
              ></textarea>
            </div>

            {/* email field */}
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                You email
              </label>
              <input
                id="email"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                defaultValue={spot.email}
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

            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                defaultValue={spot.username}
                className="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:shadow-sm-light"
                {...register("username", { required: true })}
              />
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="col-span-full text-white w-full mb-5 bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Update Spot
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateSpotPage;
