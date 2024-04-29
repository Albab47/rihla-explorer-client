import HeroSliders from "../components/HeroSliders/HeroSliders";
import TouristSpots from "../components/TouristSpots/TouristSpots";

const HomePage = () => {
  return (
    <>
      <HeroSliders />
      <TouristSpots isHome={true} />
    </>
  );
};

export default HomePage;
