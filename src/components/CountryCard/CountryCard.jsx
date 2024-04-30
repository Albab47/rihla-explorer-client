import PropTypes from "prop-types"; 


const CountryCard = ({ country }) => {
  return (
    <div className="relative drop-shadow-2xl">
      <img
        className="object-cover h-full max-w-full rounded-2xl hover:opacity-80 duration-300"
        src={country.img}
        alt=""
      />
      <div className="absolute bottom-1 left-3 max-w-sm">
        <h1 className="text-xl text-white font-bold">{country.name}</h1>
        <p className="text-xs md:text-sm text-white/80">{country.desc}</p>
      </div>
    </div>
  );
};



CountryCard.propTypes = {
    country: PropTypes.object
};

export default CountryCard;
