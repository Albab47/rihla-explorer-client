const Button = ({children}) => {
  return (
    <button
      type="button"
      className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
    >
      {children}
    </button>
  );
};

export default Button;
