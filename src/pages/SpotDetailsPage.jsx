import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

const SpotDetailsPage = () => {
  const spot = useLoaderData();
  const {
    spotName,
    photoURL,
    totalVisitors,
    season,
    travelTime,
    avgCost,
    desc,
    country,
    location
  } = spot;

  return (
    <article className="my-28">
      <div className="flex flex-col gap-6 bg-white md:flex-row md:max-w-screen-xl mx-auto px-5 dark:border-gray-800 dark:bg-gray-800">
        {/* details image */}
        <img
          className="object-cover w-full rounded h-96 md:h-auto md:w-2/5"
          src={photoURL}
          alt=""
        />
        {/* content */}
        <div className="flex flex-col leading-normal max-w-xl">
          <h5 className="mb-3 text-2xl md:text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
            {spotName}
          </h5>
          <div className="space-y-3 sm:space-y-0 md:flex items-center justify-between mb-6">
            <p className="text-sm lg:text-base">
                <IoEarthSharp className="inline -mt-1 mr-2 text-light" />
                <span className="font-bold">Country: </span>
                <span className="text-light">{country}</span>
            </p>
            <p className="text-sm lg:text-base">
                <FaMapMarkerAlt className="inline -mt-1 mr-2 text-light" />
                <span className="font-bold">Location: </span>
                <span className="text-light">{location}</span>
            </p>
          </div>
          
          <p className="mb-3 font-normal text-light dark:text-gray-400">
            <span className="text-dark font-semibold">Description:</span> {desc}
          </p>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <h3 className="mb-2 font-bold">Spot details:</h3>
          <ul className="list-disc list-inside pl-2">
            <li>Average const - ${avgCost} - $100</li>
            <li>Season - {season}</li>
            <li>Travel time - {travelTime}</li>
            <li>Total visitors per year - {totalVisitors}</li>
          </ul>

        </div>
      </div>
    </article>
  );
};

const spotLoader = async ({ params }) => {
  const res = await fetch(`https://rihla-explorer-server.vercel.app/spots/${params.id}`);
  const data = await res.json();
  return data;
};

export { SpotDetailsPage as default, spotLoader };
