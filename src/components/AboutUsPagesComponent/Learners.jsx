import React from "react";
import { RiAwardFill } from "react-icons/ri";
import { MdVideocam } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { MdFlag } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Learners = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] flex max-xl:flex-col gap-8 my-20">
        <div className="w-[50%] max-xl:w-[65%] max-md:w-[80%] max-sm:w-[100%]">
          <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/choose-us-image-01-2.webp" />
        </div>
        <div className="w-[50%] max-xl:w-[100%] gap-8 flex flex-col ">
          <div className=" flex flex-col gap-1">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <h2 className="ml-3 text-blue-600 font-medium tracking-wider">
                ABOUT US
              </h2>
              <h1 className=" text-4xl font-bold text-gray-700 leading-[50px]">
                Creating A Community Of Life Long Learners
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className=" pl-5 mt-10 border-l-2 border-l-blue-700"
            >
              <p className=" text-gray-500">
                Our online learning platform is designed to be flexible,
                enabling you to fit your learning around your busy schedule. You
                can access the courses on any device, including desktop
                computers, tablet & mobile devices.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className=" flex max-md:flex-col gap-8"
            >
              <div className="w-[45%] max-md:w-[90%] flex items-center gap-3">
                <p
                  style={{ backgroundColor: "#FB7C5626" }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg text-orange-500"
                >
                  <RiAwardFill />
                </p>
                <p className=" font-medium text-lg text-gray-800">
                  2000+ Verified Course
                </p>
              </div>
              <div className="w-[45%] max-md:w-[90%] flex items-center gap-3">
                <p
                  style={{ backgroundColor: "#FB7C5626" }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-orange-500"
                >
                  <MdVideocam />
                </p>
                <p className=" font-medium text-lg text-gray-800">
                  256+ Free Videos
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className=" flex max-md:flex-col gap-8"
            >
              <div className="w-[45%] max-md:w-[90%] flex items-center gap-3">
                <p
                  style={{ backgroundColor: "#FB7C5626" }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-orange-500"
                >
                  <TiUser />
                </p>
                <p className=" font-medium text-lg text-gray-800">
                  Expert Instructors
                </p>
              </div>
              <div className="w-[45%] max-md:w-[90%] flex items-center gap-3">
                <p
                  style={{ backgroundColor: "#FB7C5626" }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-orange-500"
                >
                  <MdFlag />
                </p>
                <p className=" font-medium text-lg text-gray-800">
                  Big Student Community
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="mt-3"
          >
            <Link to={'/courses'}>
              <button className=" bg-blue-600 px-7 py-4 rounded gap-2 text-lg text-white font-medium flex items-center hover:bg-blue-950 duration-500">
                Explore Courses
                <span>
                  <BiRightArrowAlt className=" text-2xl font-bolder pt-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learners;
