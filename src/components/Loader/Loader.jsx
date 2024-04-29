import HashLoader from "react-spinners/HashLoader";

const Loader = ({loading, size}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <HashLoader
        color="#fbbf24"
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

import PropTypes from "prop-types"; 


Loader.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default Loader;
