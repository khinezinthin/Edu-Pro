import React from "react";
import groupReading from "../../assets/about-image-01-2.jpg";
import spinImg from "../../assets/badge-2.png";
import singleGirl from "../../assets/about-image-02-2.jpg";
import blur from "../../assets/shape-04-01-2.png";
import "./AboutUs.css";
import { SlBookOpen } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const AboutUs = () => {
  return (
    <div className="lg:h-screen md:h-screen flex h-auto  lg:scale-[1.1] mt-24 mb-24">
      <div className="   lg:m-auto md:m-auto mt-5 min-[820px]:my-5  min-[820px]:mx-2 flex  justify-center  lg:p-[15px]">
        <div className="w-full  flex flex-wrap  justify-center items-center max-w-[1200px]  ">
          {/* Left */}
          <div className=" w-full  md:w-1/2   lg:w-1/2  min-[820px]:w-full">
            <div className="  relative ">
              <div className="lg:p-[15px] md:p-[10px] flex flex-wrap justify-end ">
                {/* spinImages */}
                <div className=" absolute left-[-60px] top-[50px] z-10 hidden  min-[820px]:hidden lg:block md:block">
                  <div className=" rounded-[100%] bg-[#FFFFFF80] p-[10px]">
                    <div className="  spin-animation">
                      <img src={spinImg} alt="" className="" loading="lazy" />
                    </div>
                  </div>
                </div>
                {/* groupReadingImg */}
                <div className=" w-full h-full ">
                  <div className=" relative mb-[20px]">
                    <div className=" object-fit">
                      <img
                        src={groupReading}
                        alt=""
                        className=" w-[470px] rounded-[5px] max-w-[100%]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                {/* blur */}
                <div className=" min-[820px]:hidden w-auto  absolute left-[-19px] bottom-[19px]   z-[-1] hidden lg:block md:block">
                  <div>
                    <img
                      src={blur}
                      alt=""
                      className=" w-[87px] h-[116px]"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* singleGirl */}
                <div className="   left-[304px] bottom-[-8px] absolute hidden lg:block md:block">
                  <div className=" ">
                    <img src={singleGirl} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="w-full  min-[820px]:w-full   md:w-1/2   lg:w-1/2 overflow-hidden"
          >
            <div className="w-full   flex flex-col lg:gap-10 md:gap-8 gap-5">
              <div className="  mb-3">
                <div>
                  <span className=" text-[#525FE1] ">ABOUT US</span>
                  <h1 className=" text-4xl font-bold tracking-[--h1-lineHeight] ">
                    Creating A Community Of Life Long Learners
                  </h1>
                </div>
              </div>

              <div className=" tracking-wide">
                Online learning has become increasingly popular in recent years,
                offering a flexible and convenient way for individuals to pursue
                education and training.
              </div>
              <div className=" flex  items-center gap-5">
                <div className=" p-3 rounded-[100%] bg-[#F86F03] w-[50px]">
                  <SlBookOpen className=" text-2xl text-white" />
                </div>
                <div>
                  <h5 className=" text-xl tracking-wide font-semibold">
                    Flexible Classes
                  </h5>
                  <p className=" tracking-wide ">
                    Flexible Classes refers to the process of acquiring
                    knowledge or skills through the use of digital technologies
                    and the internet.
                  </p>
                </div>
              </div>
              <div className=" flex  items-center gap-4">
                <div className=" p-3 rounded-[100%] bg-[#F86F03] w-[50px]">
                  <SlBookOpen className=" text-2xl text-white" />
                </div>
                <div>
                  <h5 className=" text-xl tracking-wide font-semibold">
                    Learn From AnyWhere
                  </h5>
                  <p className=" tracking-wide">
                    Whether you are a busy professional, a stay-at-home parent,
                    or a student who prefers to study from home effectively.
                  </p>
                </div>
              </div>
              <div className="">
                <Link to={"/aboutUs"}>
                  <button className="rounded px-12 py-5 text-white flex justify-center items-center  bg-[--color-primary] hover:bg-[--color-dark]">
                    <p> Know About Us</p>
                    <AiOutlineArrowRight className=" inline-block" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
