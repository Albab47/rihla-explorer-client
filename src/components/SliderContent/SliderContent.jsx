// lg:max-w-md xl:max-w-3xl

import { Link } from "react-router-dom";

const SliderContent = ({ title, desc }) => {
  return (
    <div className="absolute max-w-screen-md">
      <div className="text-center">
        <h1 className="font-display text-5xl leading-none sm:text-7xl">
          {title}
        </h1>
        <p className="text-white/85 mt-6 mb-8 text-lg sm:mb-12">
          {desc}
        </p>
        <div>
          <Link className="px-8 py-3 text-lg font-semibold rounded bg-amber-600 text-gray-50">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
