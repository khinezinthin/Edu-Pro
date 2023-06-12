import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import rain from "../../assets/shape-03-04-2.png";
import wave from "../../assets/shape-13-02-2.png";
import spot from "../../assets/shape-04-06-2.png";
import world from "../../assets/shape-16-2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const NewsLetter = () => {
  return (
    <div className=" bg-[#525FE1] overflow-hidden  w-full relative flex justify-center flex-col">

      <div className=" max-w[767px] h-[300px]     lg:h-[450px] md:h-[400px]  flex flex-col border-2 justify-center items-center">

        <div className=" w-[80%] flex flex-col gap-10 ">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="  flex justify-center flex-col items-center">
            <p className=" text-white font-semibold">SUBSCRIBE NEWSLETTER</p>
            <p className=" text-4xl text-white tracking-wide font-bold">
              Get Every Latest News
            </p>
          </div>
          <form className="lg:w-[50%] w-full md:w-[70%]  py-2 px-7 rounded m-auto bg-white  hover:border-[#F86F03] cursor-text border  flex justify-between items-center">
            <div className="  py-3 flex items-center gap-3 justify-start">
              <HiOutlineMailOpen />
              <input
                type="email"
                className="w-[80%] outline-none"
                placeholder={`Enter Your Email Address `}
              />
            </div>
            <FaLocationArrow className=" text-[#525FE1] cursor-pointer" />
          </form>
        </div>
        <div className="hidden md:block lg:block min-w-[820px]:hidden absolute top-[51px] left-[94px]">
          <img src={rain} alt="" />
        </div>
        <div className="hidden md:block lg:block min-w-[820px]:hidden absolute top-[70px] right-[0px]">
          <img src={spot} alt="" />
        </div>
        <div className="hidden md:block lg:block min-w-[820px]:hidden absolute bottom-[0px] left-[0px]">
          <img src={wave} alt="" />
        </div>
        <div className="hidden md:block lg:block min-w-[820px]:hidden absolute top-[73px] right-[-62px]">
          <img src={world} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
