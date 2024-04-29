import useSpotsData from "../../hooks/useSpotsData";
import SpotCard from "../SpotCard/SpotCard";

const TouristSpots = ({isHome = false}) => {
  const { spots: loadedSpots } = useSpotsData();
  const spots = isHome ? loadedSpots.slice(0, 6) : loadedSpots;

  return (
    <section className="my-24">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* heading */}
        <header className="text-center max-w-xl mx-auto space-y-5">
          <h1 className="text-3xl md:text-5xl font-display ">{isHome ? "Popular" : "Browse"} Tourists Spots</h1>
         {isHome && (
           <p className="text-sm sm:text-base text-light">
           Embark on a journey through the Middle East's iconic tourist spots.
           Explore ancient wonders, breathtaking landscapes in one
           unforgettable adventure.
         </p>
         )}
        </header>

        {/* Spots card */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mt-16 justify-center">
          {spots?.map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
};

import PropTypes from "prop-types"; 


TouristSpots.propTypes = {
  isHome: PropTypes.bool,
}

export default TouristSpots;
