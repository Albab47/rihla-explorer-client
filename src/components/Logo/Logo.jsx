import { FcGlobe } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <FcGlobe size={30} />
          <span className="self-center font-display text-xl md:text-2xl font-bold whitespace-nowrap dark:text-white">
            <span className="text-amber-400">Rihla</span>Explorer
          </span>
        </Link>
    );
};

export default Logo;