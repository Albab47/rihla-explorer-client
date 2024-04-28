import useSpotsData from "../../hooks/useSpotsData";
import SpotCard from "../SpotCard/SpotCard";

const TouristSpots = () => {
  const { spots } = useSpotsData();
  console.log(spots);

  return (
    <section className="my-24">
      <div className="max-w-screen-xl mx-auto px-5">
        {/* heading */}
        <header className="text-center max-w-xl mx-auto space-y-5">
          <h1 className="text-3xl md:text-5xl font-display ">Tourists Spots</h1>
          <p className="text-sm sm:text-base text-light">
            Embark on a journey through the Middle East's iconic tourist spots.
            Explore ancient wonders, breathtaking landscapes in one
            unforgettable adventure.
          </p>
        </header>

        {/* Spots card */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {spots?.map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;
