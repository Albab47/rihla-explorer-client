import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";


const CountryCard = ({ country }) => {
  return (
    <Link to={`/tourist-spots/${country.name}`} className="relative drop-shadow-2xl">
      <img
        className="object-cover h-full max-w-full rounded-2xl hover:opacity-80 duration-300"
        src={country.img}
      />
      <div className="absolute bottom-1 left-3 max-w-sm">
        <h1 className="text-xl text-white font-bold">{country.name}</h1>
        <p className="text-xs md:text-sm text-white/80">{country.desc}</p>
      </div>
    </Link>
  );
};



CountryCard.propTypes = {
    country: PropTypes.object
};

export default CountryCard;
