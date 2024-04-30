import { FcApproval } from "react-icons/fc";
import Lottie from "lottie-react";
import desertTreeAnimation from '../../../public/desert-tree.json';

const Features = () => {
  return (
    <section className="text-gray-800">
      <div className="max-w-screen-xl flex flex-col-reverse px-4 mx-auto lg:flex-row">

        <div className="flex flex-col justify-center px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2">
          <h1 className="text-2xl font-bold text-amber-700 dark:text-amber-500">What is Rihla Explorer?</h1>
          <div className="flex space-x-2 sm:space-x-4">
            <FcApproval className="size-7" />
            <div className="space-y-2 text-light dark:text-gray-300">
              <p className="text-lg font-medium leading-snug">
                We provide all the best places info
              </p>
              <p className="leading-snug">
                For all the travel lovers we gather popular tourist spots from middle east
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <FcApproval className="size-7" />
            <div className="space-y-2 text-light dark:text-gray-300">
              <p className="text-lg font-medium leading-snug">
                We let people add new tourist spots
              </p>
              <p className="leading-snug">
                Anyone can add new tourist spots with all the required information.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <FcApproval className="size-7" />
            <div className="space-y-2 text-light dark:text-gray-300">
              <p className="text-lg font-medium leading-snug">
                People can edit and delete there added spots
              </p>
              <p className="leading-snug">
                After adding new spot to collection user can manage there added spots.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <Lottie animationData={desertTreeAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
