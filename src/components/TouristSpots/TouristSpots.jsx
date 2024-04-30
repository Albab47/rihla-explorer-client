import useSpotsData from "../../hooks/useSpotsData";
import SpotCard from "../SpotCard/SpotCard";
import { FaFilter } from "react-icons/fa";

const TouristSpots = ({ isHome = false }) => {
  const [spots, setSpots] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/spots");
      const data = await res.json();
      if (isHome) {
        return setSpots(data.slice(0, 6));
      }
      setSpots(data);
    };
    fetchData();
  }, [isHome, toggle]);

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleAllSpotClick = () => {
    setToggle(!toggle);
  };

  const handleFilterByCost = async () => {
    const res = await fetch("http://localhost:5000/spots/sort-by-avg");
    const data = await res.json();
    setSpots(data);
  };

  return (
    <section className="my-24">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* heading */}
        <header className="text-center max-w-xl mx-auto space-y-5">
          <h1 className="text-3xl md:text-5xl font-display ">
            {isHome ? "Popular" : "Browse"} Tourists Spots
          </h1>
          {isHome && (
            <p className="text-sm sm:text-base text-light">
              Embark on a journey through the Middle East's iconic tourist
              spots. Explore ancient wonders, breathtaking landscapes in one
              unforgettable adventure.
            </p>
          )}
        </header>

        {!isHome && (
          <>
            {/* sort options */}
            <div className="max-w-screen-xl mx-auto relative flex flex-col items-end">
              <button onClick={handleFilterOpen} className="btn-primary">
                Filter <FaFilter className="ml-2 size-3" />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className={`z-10 absolute ${
                  filterOpen ? "" : "hidden"
                } top-12 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li
                    onClick={handleFilterByCost}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cost low to high
                  </li>
                  <li
                    onClick={handleAllSpotClick}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    All spots (default)
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Spots card */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mt-8 justify-center">
          {spots.map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

TouristSpots.propTypes = {
  isHome: PropTypes.bool,
};

export default TouristSpots;
