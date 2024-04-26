import PropTypes from "prop-types"; 

const Button = ({children}) => {
  return (
    <button
      type="button"
      className="text-gray-800 bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-100 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-400 dark:focus:ring-amber-500"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
