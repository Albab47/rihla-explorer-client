import Countries from "../components/Countries/Countries";
import HeroSliders from "../components/HeroSliders/HeroSliders";
import TouristSpots from "../components/TouristSpots/TouristSpots";

const HomePage = () => {
  return (
    <>
      <HeroSliders />
      <TouristSpots isHome={true} />
      <Countries />
    </>
  );
};

export default HomePage;
