import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiCalendar2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import BlogImg1 from "../../assets/course-06-2-590x430.webp";
import BlogImg2 from "../../assets/course-26-590x430.webp";
import blur from "../../assets/shape-04-01-2.png";
import book from "../../assets/shape-17-2.png";
import wave from "../../assets/shape-13-03-2.png";
import star from "../../assets/shape-15-02-2.png";
import "./BlogsAndNews.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const BlogAndNew = () => {
  return (
    <section className="backgroundOfBlogsAndNews lg:h-[1100px] md:h-[1000px] h-auto  relative flex flex-col justify-center ">
      <div className=" p-3 pb-14">
        <div className="  m-auto  ">
          <div className="  m-auto flex flex-col  lg:gap-16 md:gap-10 gap-7 justify-center max-w-[1300px]">
            <section className="p-3  block md:flex lg:flex min-[820px]:block  justify-between flex-wrap ">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                className=" flex flex-col justify-center pb-9 "
              >
                <p className=" font-semibold text-[--color-primary]">
                  BLOG & NEWS
                </p>
                <p className=" text-4xl font-bold">Trending on Our Blogs</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <Link to={'/blog'}>
                  <button className="rounded px-12 py-5 text-white flex justify-center items-center  bg-[--color-primary] hover:bg-[--color-dark]">
                    <p> Read More Blogs</p>
                    <AiOutlineArrowRight className=" inline-block" />
                  </button>
                </Link>
              </div>
            </section>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className="   flex justify-between flex-wrap gap-5 lg:gap-0 md:gap-0 "
            >
              <div className="  lg:w-1/2 md:w-1/2 min-[820px]:w-1/2 flex justify-center ">
                <div className="shadow bg-[--color-white]  w-[95%] p-6  flex flex-col lg:gap-10 md:gap-8 gap-5 hoverCustom ">
                  <div className="content  flex flex-col lg:gap-10 md:gap-8 gap-5 hoverCustom ">
                    <div>
                      <p className="font-semibold hoverCustom text-[--color-primary] cursor-pointer">
                        SOCIAL MEDIA
                      </p>
                      <h1 className=" font-semibold hoverCustom transition-all text-3xl hover:text-[--color-primary] cursor-pointer">
                        The Complete Web Developer Guideline 2023
                      </h1>
                    </div>
                    <div className=" flex justify-between">
                      <div className=" flex items-center gap-2">
                        <RiCalendar2Line />
                        <p>17 Feb, 2023</p>
                      </div>
                      <div className="hoverCustom flex items-center gap-2">
                        <CiUser className=" " />
                        posted by
                        <span className="hoverCustom cursor-pointer text-[--color-primary]">
                          J FRAMING
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" thumnail ">
                    <div className="hoverCustom  overflow-hidden rounded">
                      <img
                        src={BlogImg1}
                        className="w-full rounded transition-all hoverItem overflow-hidden "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:w-1/2 md:w-1/2 min-[820px]:w-1/2  flex  justify-center">
                <div className="bg-[--color-white]  shadow w-[95%] p-6     flex flex-col lg:gap-10 md:gap-8 gap-5 hoverCustom ">
                  <div className="content flex flex-col lg:gap-10 md:gap-8 gap-5 hoverCustom ">
                    <div>
                      <p className="hoverCustom font-semibold text-[--color-primary] cursor-pointer">
                        BRANDING
                      </p>
                      <h1 className="font-semibold hoverCustom transition-all text-3xl hover:text-[--color-primary] cursor-pointer">
                        Social Media Marketing MASTERY( A-Z ) Journey
                      </h1>
                    </div>
                    <div className=" flex justify-between">
                      <div className=" flex items-center gap-2">
                        <RiCalendar2Line />
                        <p>09 Feb, 2023</p>
                      </div>
                      <div className="hoverCustom flex items-center gap-2">
                        <CiUser className=" " />
                        posted by
                        <span className="hoverCustom cursor-pointer text-[--color-primary]">
                          J FRAMING
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" thumnail">
                    <div className="hoverCustom object-cover  overflow-hidden rounded">
                      <img
                        src={BlogImg2}
                        className="w-full rounded transition-all hoverItem overflow-hidden "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hidden lg:block md:block min-[820px]:hidden absolute left-[-60px] top-[182px] ">
                <div className=" ">
                  <img
                    src={blur}
                    alt=""
                    className="moveUpDownClass  rounded-[50%]"
                  />
                </div>
              </div>
              <div className=" hidden lg:block md:block min-[820px]:hidden  absolute left-[-60px] bottom-[-60px] z-30">
                <img src={book} alt="" />
              </div>
              <div className=" hidden lg:block md:block min-[820px]:hidden absolute right-0 bottom-[-60px] z-30">
                <img src={wave} alt="" />
              </div>
              <div className=" hidden lg:block md:block min-[820px]:hidden absolute right-0 top-[0px] z-30">
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndNew;
