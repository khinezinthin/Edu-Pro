import React from "react";
import "../pages/BlogDetails.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="image flex justify-center relative">
        <div className="w-[90%] my-14 flex flex-col gap-4">
          <h1 className=" text-4xl max-lg:text-3xl font-bold text-gray-800 leading-[45px]">
            Social Media Marketing MASTERY( A-Z ) Journey
          </h1>
          <div className="flex flex-wrap items-center gap-1">
            <p className=" text-gray-500 font-medium cursor-pointer">Home</p>
            <p>
              <MdKeyboardArrowRight className="pt-1 text-lg text-gray-500" />
            </p>
            <p className="text-gray-500 font-medium">Branding</p>
            <p>
              <MdKeyboardArrowRight className="pt-1 text-lg text-gray-500" />
            </p>
            <p className="text-gray-500 font-medium">
              Social Media Marketing MASTERY( A-Z ) Journey
            </p>
          </div>
        </div>
        <div className=" absolute bottom-2 max-xl:hidden">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-36.png"
            className="h-10"
            alt=""
          />
        </div>
        <div className=" absolute right-[400px] top-[20px] max-xl:hidden">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-01-02.png"
            className="h-7"
            alt=""
          />
        </div>
        <div className=" absolute right-0 top-[40px] max-xl:hidden">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-03.png"
            className="h-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
