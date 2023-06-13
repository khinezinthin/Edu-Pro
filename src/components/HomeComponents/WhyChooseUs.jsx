import React from "react";
import { TbUsers } from "react-icons/tb";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { VscBook } from "react-icons/vsc";
import { TfiAlarmClock } from "react-icons/tfi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import "./whyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center text-center">
      <div className=" w-[100%] flex max-xl:flex-col xl:ml-20 max-xl:w-[90%] max-xl:gap-10 my-20 items-center">
        <div className="w-[45%] max-xl:w-[100%] flex flex-col gap-5">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex flex-col gap-3"
          >
            <p className=" font-bold text-blue-600 tracking-wider text-start">
              WHY CHOOSE US
            </p>
            <h1 className=" text-4xl text-gray-700 font-bold text-start">
              Our Core Features
            </h1>
          </div>
          <div className="flex flex-wrap max-md:flex-col gap-5">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className=" w-[45%]  max-md:w-[100%] flex flex-col gap-7 mt-10"
            >
              <TbUsers className=" text-5xl text-orange-500" />
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl text-gray-600 font-bold text-start">
                  Virtual Classroom
                </h2>
                <p className=" font-medium text-gray-400 text-start">
                  Students can access course materials, participate in debate &
                  discussions.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className=" w-[45%] max-md:w-[100%] flex flex-col gap-7 mt-10"
            >
              <TfiRulerAlt2 className=" text-5xl text-orange-500" />
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl text-gray-600 font-bold text-start">
                  Remote Education
                </h2>
                <p className=" font-medium text-gray-400 text-start">
                  Students can access course materials, participate in debate &
                  discussions.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className=" w-[45%] max-md:w-[100%] flex flex-col gap-7 mt-10"
            >
              <VscBook className=" text-5xl text-orange-500" />
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl text-gray-600 font-bold text-start">
                  Digital Learning
                </h2>
                <p className=" font-medium text-gray-400 text-start">
                  Students can access course materials, participate in debate &
                  discussions.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
              className=" w-[45%] max-md:w-[100%] flex flex-col gap-7 mt-10"
            >
              <TfiAlarmClock className=" text-5xl text-orange-500" />
              <div className="flex flex-col gap-3">
                <h2 className=" text-xl text-gray-600 font-bold text-start">
                  Educator Support
                </h2>
                <p className=" font-medium text-gray-400 text-start">
                  Students can access course materials, participate in debate &
                  discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[50%] max-xl:w-[60%] max-md:w-[60%] flex justify-center items-center relative">
          <div className="image one relative">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/choose-us-image-01-2.jpg"
              alt="Image"
            />
            <Link to={"https://youtu.be/pNje3bWz7V8"}>
              <button className="play-btn w-[60px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                <TbPlayerPlayFilled className="text-orange-500 text-2xl mx-auto" />
              </button>
            </Link>
          </div>
          <div className="shape absolute"></div>
          <div className="shape-two absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
