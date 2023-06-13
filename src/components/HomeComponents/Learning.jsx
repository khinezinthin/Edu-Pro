import React, { useEffect } from "react";
import "./Learning.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Learning = () => {
  return (
    <div className="  learning-div lg:overflow-hidden">
      <div className=" flex py-20 max-lg:pb-8 relative lg:flex-nowrap lg:flex-row md:flex-wrap md:flex-col-reverse  md:justify-center md:items-center max-md:flex-col-reverse max-md:justify-center max-md:items-center">
        <img
          src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-circle-2.png"
          alt=""
          className=" absolute left-[-230px] top-[185px] max-lg:hidden"
        />
        <div
          className=" xl:pl-20 lg:pl-5 md:pl-0 md:pt-10 font-semibold xl:w-[50%] z-10 max-lg:relative left-[-70px]
             max-md:static max-[540px]:relative max-[540px]:left-0 max-[440px]:left-[18px] max-[360px]:left-[14px]"
        >
          <h5
            className=" text-[#525FE1] tracking-widest pl-1 "
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            EXCELLENCE IN EDUCATION
          </h5>

          <h1
            className=" p-1 md:pt-2 xl:text-[65px] xl:w-[500px] lg:text-[55px] lg:w-[450px] md:text-[45px] md:w-[415px] max-md:text-[40px] max-md:w-[380px] max-[540px]:text-[33px] max-md:pt-2 xl:tracking-wide title text-gray-800 max-lg:leading-[60px] max-[540px]:leading-[45px] max-[540px]:pt-3 max-[440px]:text-[30px]
            max-[440px]:w-[350px] max-[360px]:text-[29px] max-[360px]:w-[300px] "
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Start Better Learning Future From Here
          </h1>

          <div
            className=" border-l-2 border-l-[#525FE1] max-lg:h-12 max-[540px]:h-20 max-[440px]:h-28 tracking-wider h-10 flex items-center mt-7 mb-14 max-[540px]:mt-6 max-[540px]:mb-10 "
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1600"
          >
            <p className=" pl-4 w-[500px] max-[540px]:w-[400px] max-[440px]:w-[300px] leading-7 text-gray-500 font-medium text-lg">
              Empower yourself with the knowledge and skills gained through
              online education! The key to your future!
            </p>
          </div>

          <div
            className=" pb-10 "
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1700"
          >
            <Link to={"/contactUs"}>
              <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] bg-[#525FE1] text-white tracking-wider rounded">
                <span className=" text-base font-semibold">
                  Get Started Today
                </span>
                <span className="flex items-center font-bold">
                  <AiOutlineArrowRight className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className=" pt-24 lg:w-[50%] md:w-auto max-md:flex-wrap max-md:justify-center flex items-center relative lg:ml-20 md:ml-0 lg:justify-normal">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-2.png"
            alt=""
            className=" absolute top-[70px] left-[-60px] max-lg:hidden"
          />
          <div className=" flex flex-col lg:items-end md:items-start relative">
            <div
              className=" bg-white p-4 w-[280px] max-md:w-[500px] max-[540px]:w-[400px] max-[440px]:w-[300px] max-[330px]:w-[250px] rounded lg:mt-8 md:mt-0 first-card card-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div className=" cursor-pointer relative box-border overflow-hidden ">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-33-590x430.webp"
                  alt=""
                  className=" w-[280px] max-md:w-[500px] rounded first-card-img duration-500"
                />
                <span className=" text-sm rounded-sm absolute top-2 left-2 py-1 px-3 bg-[#525FE1] text-white">
                  UI Design
                </span>
              </div>

              <div className=" flex items-center gap-4 py-3">
                <div className=" flex justify-center items-center gap-2">
                  <RiFileList3Line className=" text-[#f86f03] font-bold" />
                  <span className=" font-normal text-[15px] text-gray-500">
                    19 Lessons
                  </span>
                </div>
                <div className=" flex justify-center items-center gap-2">
                  <LuClock3 className=" text-[#f86f03] font-bold" />
                  <span className="font-normal text-[15px] text-gray-500">
                    15 hour
                  </span>
                </div>
              </div>

              <h1 className=" text-lg text-gray-800 pb-3 cursor-pointer hover:text-[#525FE1] duration-300 leading-7 max-md:font-bold">
                Learning How To Write As A Professional Author
              </h1>

              <p className=" text-gray-500 text-sm pb-1 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>

            <div
              className="bg-white p-5 w-[180px] rounded mt-8 second-card card-shadow"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/workshop-2.png"
                alt=""
              />

              <p className="text-lg text-gray-800 pt-3 pb-1">Design Workshop</p>

              <p className="text-gray-500 text-base font-medium">
                Today at 6:00 am
              </p>

              <div className="pt-6">
                <button className=" hover:bg-[#525FE1] duration-300 flex justify-center items-center gap-2 py-2 px-3 bg-[#f86f03] text-white tracking-wider rounded">
                  <span className=" text-sm font-semibold">Join Now</span>
                  <span className="flex items-center font-bold">
                    <AiOutlineArrowRight className="ml-1" />
                  </span>
                </button>
              </div>
            </div>
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-05-2.png"
              alt=""
              className=" absolute left-10 bottom-[-20px] max-lg:hidden"
            />
          </div>

          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/video-image-2.png"
            alt=""
            className=" lg:w-auto lg:static md:w-[361px] md:relative md:top-[-112px] max-[440px]:w-[300px] max-[440px]:mt-3 max-[330px]:w-[250px] z-10 third-card"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          />

          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png"
            alt=""
            className=" absolute right-0 bottom-20 max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
