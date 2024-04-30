import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { WiTime2 } from "react-icons/wi";
import { FaPeopleLine } from "react-icons/fa6";
import { FaCloudSunRain } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const SpotCard = ({ spot }) => {
  const {
    _id,
    spotName,
    photoURL,
    totalVisitors,
    season,
    travelTime,
    avgCost,
  } = spot;

  return (
    <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
      {/* Card img */}
      <Link>
        <img
          className="rounded-t-lg object-cover object-center w-full h-64"
          src={photoURL}
          alt=""
        />
      </Link>

      {/* Card content */}
      <div className="p-5 flex flex-col h-[calc(50%-1.25rem)]">
        <Link>
          <h5 className="mb-2 flex-grow text-2xl font-semibold tracking-tight text-dark dark:text-white">
            {spotName}
          </h5>
        </Link>

        <div className="space-y-2 *:text-light mb-6">
            <p><HiOutlineCurrencyDollar className="inline -mt-1 size-5 text-amber-500 mr-1" /> Average cost: ${avgCost}</p>
            <p><WiTime2 className="inline -mt-1 size-5 text-amber-500 mr-1" /> Travel time: {travelTime}</p>
            <p><FaPeopleLine className="inline -mt-1 size-5 text-amber-500 mr-1" /> Total Visitors Per Year: {totalVisitors}</p>
            <p><FaCloudSunRain className="inline -mt-1 size-5 text-amber-400 mr-1" /> Seasonality: {season}</p>
        </div>

        <Link type="button" to={`/spots/${_id}`} className="btn-secondary flex justify-center mt-auto">
          View details <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
