import Countries from "../components/Countries/Countries";
import Features from "../components/Features/Features";
import HeroSliders from "../components/HeroSliders/HeroSliders";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import TouristSpots from "../components/TouristSpots/TouristSpots";

const HomePage = () => {
  return (
    <div>
      <HeroSliders />
      <TouristSpots isHome={true} />
      <Countries />
      <Features />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
