import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// {"_id":{"$oid":"662e715d009a4cbf113c8db9"},"spotName":"Petra: one of the 7 wonders","country":"Jordan","location":"Ma'an Governorate, Jordan","avgCost":"100","season":"Summer","travelTime":"5 days","totalVisitors":"800000","photoURL":"https://i.ibb.co/m9D5RyS/petra-jordan.jpg",}

const SpotCard = ({ spot }) => {
  const { _id, spotName, photoURL, totalVisitors, season, travelTime, avgCost} = spot;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/spots/${_id}`}>
        <img
          className="rounded-t-lg object-cover object-center w-full h-64"
          src={photoURL}
          alt=""
        />
      </Link>

      <div className="p-5">
        <Link to={`/spots/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {spotName}
          </h5>
        </Link>
        
        <a
          href="#"
          className="btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
