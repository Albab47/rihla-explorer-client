import PropTypes from "prop-types"; 

const Button = ({children, btnGhost = false}) => {
  return (
    <button
      type="button"
      className={`${btnGhost ? "hover:text-amber-400 text-dark dark:text-white" : "text-white bg-amber-600 hover:bg-amber-700"} focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-400 dark:focus:ring-amber-500`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  btnGhost: PropTypes.bool,
};

export default Button;
