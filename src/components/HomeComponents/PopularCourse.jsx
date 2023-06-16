import React from "react";
import {
  BsStarFill,
  BsPeople,
  BsArrowRight,
  BsClock,
  BsFillHeartFill,
} from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./popular.css";

const PopularCourse = () => {
  return (
    <div className=" mt-14 mb-28">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        className=" flex flex-col gap-1 items-center py-10">
        <h2 className=" text-[16px] font-sans text-[#525fe1] font-semibold tracking-widest ">
          POPULAR COURSES
        </h2>
        <h2 className=" text-[32px] lg:text-[40px] break-words w-[250px] md:w-auto lg:w-auto text-center flex justify-center items-center font-bold font-sans text-slate-800 ">
          Featured On This Month
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
        className=" flex flex-wrap items-center justify-center gap-10">
        <div className=" flex justify-center items-center item ">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" mainImg transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp"
                      alt="course-27"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 font-semibold pt-3 invisible md:visible lg:visible  text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 15 Week</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                    alt=""
                  />
                  <h2> Janet Fleming </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(5.0)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  The Complete HTML & CSS Bootcamp 2023 Edition
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">229 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">16 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                $45.00
              </button>
              {/* <p className="text-gray-500 line-through text-[16px]">$59.00</p> */}
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center item">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-32-590x430.webp"
                      alt="course-32"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 invisible md:visible lg:visible font-semibold pt-3 text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 17 Week</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2-100x100.webp"
                    alt=""
                  />
                  <h2> James Carlson </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(5.0)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  Grow Personal Financial Security Thinking & Principles
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">189 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">18 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                $49.00
              </button>
              <p className="text-gray-500 line-through text-[16px]">$59.00</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center item">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-38-590x430.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 invisible md:visible lg:visible font-semibold pt-3 text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 20 Hour</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-08-2-100x100.webp"
                    alt=""
                  />
                  <h2> Troy Hall </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(5.0)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  The Complete Guide to Build RESTful API Application
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">427 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">15 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                Free
              </button>
              {/* <p className="text-gray-500 line-through text-[16px]">$59.00</p> */}
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center item">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-30-590x430.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 invisible md:visible lg:visible font-semibold pt-3 text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 25 Hour</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp"
                    alt=""
                  />
                  <h2> Isabelle Bruner </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(5.0)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  Competitive Strategy Law for Management Consultants
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">364 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">13 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                $75.00
              </button>
              {/* <p className="text-gray-500 line-through text-[16px]">$59.00</p> */}
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center item">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-39-590x430.webp"
                      alt="course-39"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 invisible md:visible lg:visible font-semibold pt-3 text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 30 Hour</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                    alt=""
                  />
                  <h2> Janet Fleming </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(4.5)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  Machine Learning A-Z : Hands-On Python and java
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">674 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">13 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                $79.00
              </button>
              <p className="text-gray-500 line-through text-[16px]">$99.00</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center item">
          <div className=" bg-slate-100 hover:bg-white hover:shadow-lg mainDiv h-auto p-3 group">
            <div className="">
              <div className=" overflow-hidden ">
                <div className=" transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                  <div className="  overflow-hidden relative">
                    <img
                      className=""
                      src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-33-590x430.webp"
                      alt="course-33"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex py-4 justify-between relative">
                <div className=" absolute flex gap-60 invisible md:visible lg:visible font-semibold pt-3 text-white top-[-230px] left-0">
                  <div className=" static flex items-center gap-1 bg-orange-500 px-3 py-1">
                    <p className=" font-bold">
                      <BsClock />
                    </p>
                    <p> 15 Hour</p>
                  </div>
                  <div className=" bg-slate-500 w-8 h-8 flex justify-center rounded-full ">
                    <button className=" text-lg ">
                      <BsFillHeartFill />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <img
                    className=" w-[34px] h-[34px] rounded-[100%]"
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp"
                    alt=""
                  />
                  <h2> Isabelle Bruner </h2>
                </div>
                <div className=" flex items-center gap-5">
                  <p className=" text-yellow-500">
                    <BsStarFill />
                  </p>
                  <span>(5.0)</span>
                </div>
              </div>
              <div>
                <a
                  className=" cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                  href="#">
                  Learning How To Write As A Professional Author
                </a>
                <div className=" flex items-center gap-9 pt-5">
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <BsPeople />
                    </p>
                    <p className=" text-[16px] text-gray-500">425 Students</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <p className=" text-gray-500 text-lg ">
                      <IoNewspaperOutline />
                    </p>
                    <p className=" text-[16px] text-gray-500">19 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" mt-4" />
            <div className=" flex items-center gap-3 mt-4">
              <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                $29.00
              </button>
              <p className="text-gray-500 line-through text-[16px]">$39.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center mb-3 mt-20">
        <Link to={"/courses"}>
          <button className=" bg-[#525fe1] hover:bg-[#070c44] px-8 py-4 flex items-center gap-3 rounded-md text-white font-semibold text-xl">
            View All Courses
            <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourse;
