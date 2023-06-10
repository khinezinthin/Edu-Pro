import React from "react";
import "./FreeWorkShop.css";
import videoBackground from "../../assets/video-popup-bg-02-2.jpg";
import { FaPlay } from "react-icons/fa";
import "../HomeComponents/WhyChooseUs.css";
import square from "../../assets/shape-04-05-2.png";
import wave from "../../assets/shape-13-02-2.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import shady from "../../assets/shape-09-01-2.png";
const FreeWorkshop = () => {
  return (
    <div className="relative lg:h-[650px] bg-[--color-primary] flex justify-center flex-col items-center backgroundOfFreeWorkshop">
      <div className=" z-40 container lg:h-[95%]   m-auto flex justify-center items-center backgroundOfFreeWorkshop">
        <div className="w-full lg:w-[85%] md:w-[90%]  h-[90%] flex justify-center items-center m-auto  flex-wrap lg:flex-col flex-col-reverse md:flex-col-reverse ">
          <div className="w-full lg:w-[50%] md:w-[90%] mb-8 lg:p-7 p-4 md:p-7 flex justify-center gap-14 flex-col">
            <div className=" flex flex-col justify-center gap-2 mb-7">
              <p className=" text-white ">FREE WORKSHOP</p>
              <h1 className="fsh text-white lg:text-4xl tracking-wide  font-extrabold">
                Join Our Free Workshops
              </h1>
            </div>
            <p className=" text-white tracking-wide  font-[--p-medium]">
              Join us at our “Free Workshop” event to expand your knowledge,
              gain new insights, and connect with like-minded individuals. Our
              expert speakers will provide valuable insights on a range of
              topics.
            </p>
            <div className="animate__animated  animate__fadeInUp">
              <button className="rounded px-12 py-5 text-[--color-primary] flex justify-center items-center  bg-[--color-white] hover:bg-[--color-secondary]">
                <p className="  font-[--p-semi-bold]">More UpComing Workshop</p>
                <AiOutlineArrowRight className=" inline-block" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] md:w-[90%] h-[90%]  p-4 flex flex-col justify-center items-center">
            <div className=" relative select-none h-[95%] ">
              <img src={videoBackground} alt="" className=" rounded" />
              <a
                href="https://www.youtube.com/watch?v=pNje3bWz7V8"
                target="_blank">
                <div className="iconHoverParent play-btn w-[60px] h-[60px] absolute top-[45%] left-[44%] p-4 rounded-[50%] bg-white hover:bg-[--color-secondary] transform  flex justify-center items-center ">
                  <FaPlay className=" text-[--color-secondary] iconHoverChild " />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-[79px] right-[170px] ">
        <img src={square} alt="" className="" />
      </div>
      <div className=" absolute bottom-[80px] left-[0px] ">
        <img src={wave} alt="" className="" />
      </div>
      <div className=" absolute top-[0px] right-[0px] ">
        <img src={shady} alt="" className="" />
      </div>
    </div>
  );
};

export default FreeWorkshop;
