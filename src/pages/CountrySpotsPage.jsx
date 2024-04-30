import { useLoaderData, useNavigation } from "react-router-dom";
import SpotCard from "../components/SpotCard/SpotCard";
import { useState } from "react";
import Loader from "../components/Loader/Loader";

const CountrySpotsPage = () => {
  const loadedSpots = useLoaderData();
  const navigation = useNavigation()
  const [spots, setSpots] = useState(loadedSpots)
  const isLoading = navigation.state === "loading";

  if(isLoading) {
    return <Loader />
  }
  
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      {/* heading */}
      <header className="text-center max-w-xl mx-auto space-y-5">
        <h1 className="text-3xl md:text-5xl font-display ">
           Tourists Spots
        </h1>
        <p className="text-sm sm:text-base text-light">
          Embark on a journey through the Middle East's iconic tourist spots.
          Explore ancient wonders, breathtaking landscapes in one unforgettable
          adventure.
        </p>
      </header>

      {/* Spots cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mt-8 justify-center">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

const countrySpotsLoader = async ({ params }) => {
  const res = await fetch(`https://rihla-explorer-server.vercel.app/tourist-spots/${params.country}`);
  const data = await res.json();
  return data;
};

export { CountrySpotsPage as default, countrySpotsLoader };
