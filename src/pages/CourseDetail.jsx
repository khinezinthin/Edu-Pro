import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

import {
  BsStarFill,
  BsFillCheckSquareFill,
  BsPlayFill,
  BsClock,
  BsFillHeartFill,
  BsPeople,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// data-aos="fade-up"

const CourseDetail = () => {
  return (
    <div>
      {/* Banner */}
      <div className=" bg-[url(https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-testimonial-2.jpg)] bg-cover h-[215px] relative">
        <img
          className=" absolute w-[40px] h-[40px] top-3 left-5"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-11-07.png"
          alt=""
        />
        <img
          className=" absolute top-5 left-20"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-01-02.png"
          alt=""
        />
        <img
          className=" absolute top-10 left-40"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-03.png"
          alt=""
        />
        <img
          className=" absolute bottom-0 right-1/2"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-13-12.png"
          alt=""
        />
        <img
          className=" absolute top-1/2 left-2/3"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-36.png"
          alt=""
        />
        <img
          className=" absolute top-2/4 right-1/2"
          src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-05-07.png"
          alt=""
        />
        <div className=" flex flex-col gap-5 items-start ms-32 pt-14">
          <div>
            <h2 className=" text-[40px] font-bold text-[#231F40]">
              Archives: Courses
            </h2>
          </div>
          <div className=" flex flex-wrap items-baseline gap-5 text-[16px] text-[#6F6B80]">
            <Link to={"/"}>
              <button>Home</button>
            </Link>
            <p className=" text-xs">
              <IoIosArrowForward />
            </p>
            <p>Courses</p>
          </div>
        </div>
      </div>
      {/* main image  */}
      <div className=" w-full h-80 md:h-96 lg:h-[570px] relative mt-10  ">
        <img
          className=" object-cover w-full h-full px-4 lg:px-0 lg:rounded-none rounded-[2.5%]"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27.webp"
          alt=""
        />
      </div>
      {/* left & right sides  */}
      <div className=" flex flex-col md:flex-col lg:flex-wrap ">
        {/* left side  */}
        <div
          data-aos="fade-up"
          className=" mt-14 w-[60%] ms-16 flex flex-col gap-4">
          {/* starfill & pfp icon & name  */}
          <div className=" flex gap-16 items-center ">
            <div className=" flex gap-3 items-center ">
              <img
                className=" w-[34px] h-[34px] rounded-[100%]"
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                alt=""
              />
              <p className=" text-[16px] text-[#231f40] font-semibold">
                By James Carlson
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <div className=" flex gap-2">
                <p className=" text-[#ffa41b]">
                  <BsStarFill />
                </p>
                <p className=" text-[#ffa41b]">
                  <BsStarFill />
                </p>
                <p className=" text-[#ffa41b]">
                  <BsStarFill />
                </p>
                <p className=" text-[#ffa41b]">
                  <BsStarFill />
                </p>
                <p className=" text-[#ffa41b]">
                  <BsStarFill />
                </p>
              </div>
              <div>
                <p className=" text-[#6f6b80]">( 1 Review )</p>
              </div>
            </div>
          </div>
          {/* title  */}
          <p className=" text-[40px] text-[#231f40] font-bold">
            Grow Personal Financial Security Thinking & Principles
          </p>
          <hr className=" border-1 border-[#333333] cursor-pointer px-1 me-5 mt-4" />
          {/* desc  */}
          <div className=" mt-10">
            <div className=" flex gap-4 items-center">
              <p className=" text-lg text-[#525fe1]">
                <BsFillCheckSquareFill />
              </p>
              <p className=" text-[#333333] text-[24px] font-bold">
                Course Description
              </p>
            </div>
            <p className=" mt-7 ps-6 pe-20 text-[16px] text-[#6f6b80] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p className=" mt-10 ps-6 pe-20 text-[16px] text-[#6f6b80]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          {/* instructor  */}
          <div className=" mt-10">
            <div className=" flex gap-4 items-center">
              <p className=" text-lg text-[#525fe1]">
                <BsFillCheckSquareFill />
              </p>
              <p className=" text-[#333333] text-[24px] font-bold">
                Instructor
              </p>
            </div>
            <div className=" flex gap-10 mt-10">
              <img
                className=" w-[200px] h-[232px] rounded-md"
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2.webp"
                alt=""
              />
              <div className=" flex flex-col gap-4">
                <div>
                  <p className=" text-[#333333] text-[24px] font-semibold">
                    James Hall
                  </p>
                  <p className=" text-[#525fe1] text-[16px] font-semibold">
                    Senior Developer
                  </p>
                </div>
                <p className=" pe-20 text-[16px] text-[#6f6b80]">
                  James Carlson is an instructor and developer living in a
                  suburb of Washington, DC. She has been assigned to aspen
                  ecosystems research and has been involved in several special
                  assignments.
                </p>
                <div className=" flex gap-3 pt-3">
                  <p className=" text-[#525fe1] w-10 h-10 border border-gray-400 hover:text-white hover:bg-[#525fe1] rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </p>
                  <p className=" text-[#525fe1]  w-10 h-10 border border-gray-400 hover:text-white hover:bg-[#525fe1] rounded-full flex items-center justify-center">
                    <FaLinkedinIn />
                  </p>
                  <p className=" text-[#525fe1]  w-10 h-10 border border-gray-400 hover:text-white hover:bg-[#525fe1] rounded-full flex items-center justify-center">
                    <FaPinterestP />
                  </p>
                  <p className=" text-[#525fe1]  w-10 h-10 border border-gray-400 hover:text-white hover:bg-[#525fe1] rounded-full flex items-center justify-center">
                    <FaTwitter />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className=" absolute right-0 top-[750px] rounded-[8px] flex flex-col items-center w-[30%] bg-white shadow-lg me-5 ">
          {/* YT link  */}
          <div className=" relative m-4">
            <img
              className=" rounded-[3px]"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/course-preview.png"
              alt=""
            />
            <button className=" absolute top-20 left-40 text-[#525fe1] w-12 h-12 rounded-full bg-white hover:bg-[#525fe1] hover:text-white flex justify-center items-center text-3xl">
              <a href="https://www.youtube.com/watch?v=pNje3bWz7V8b">
                <BsPlayFill />
              </a>
            </button>
          </div>
          {/* Info  */}
          <div>
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
            <hr />
            <div className=" flex gap-40 py-5">
              <div className=" flex gap-2 items-center text-[#6f6b80] text-[16px] font-semibold">
                <BsClock className=" text-[#525fe1]  text-sm" /> Duration
              </div>
              <div className=" text-[#6f6b80] text-[16px] font-semibold">
                17 Weeks
              </div>
            </div>
          </div>
          {/* button  */}
          <div className=" flex flex-col gap-3 mt-4">
            <button className="px-16 py-3 rounded-md border border-[#525fe1] bg-[#cfd1e9] hover:bg-[#525fe1] hover:text-white text-lg font-semibold">
              Price : $ 39.00
            </button>
            <button className="px-16 py-3 rounded-md border bg-[#525fe1] text-white hover:bg-[#12153d] text-lg font-semibold">
              Buy Now
            </button>
          </div>
          {/* share  */}
          <div className=" flex gap-5 my-5 items-center text-[#6f6b80] ">
            <p className=" text-black font-semibold hover:text-black">
              Share :
            </p>
            <p className=" hover:text-[#525fe1]">
              <FaLinkedinIn />
            </p>
            <p className=" hover:text-[#525fe1]">
              <FaFacebookF />
            </p>
            <p className=" hover:text-[#525fe1]">
              <FaPinterestP />
            </p>
            <p className=" hover:text-[#525fe1]">
              <FaTwitter />
            </p>
          </div>
        </div>
      </div>
      {/* more courses  */}
      <div>
        <div className=" mt-24 mb-10 ms-20">
          <p className=" text-[16px] text-[#525fe1] font-bold">RELATED COURSES</p>
          <p className=" text-[40px] text-[#231f40] font-bold">Courses You May Like</p>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-10">
          <div className=" flex justify-center items-center">
            <div className=" bg-slate-100 hover:bg-white hover:shadow-lg w-[330px] h-auto p-3 group">
              <div className="">
                <div className=" overflow-hidden ">
                  <div className=" w-[310px] transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
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
                  <div className=" absolute flex gap-44 font-semibold pt-3 text-white top-[-230px] left-0">
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

          <div className=" flex justify-center items-center">
            <div className=" bg-slate-100 hover:bg-white hover:shadow-lg w-[330px] h-auto p-3 group">
              <div className="">
                <div className=" overflow-hidden ">
                  <div className=" w-[310px] transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
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
                  <div className=" absolute flex gap-44 font-semibold pt-3 text-white top-[-230px] left-0">
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

          <div className=" flex justify-center items-center">
            <div className=" bg-slate-100 hover:bg-white hover:shadow-lg w-[330px] h-auto p-3 group">
              <div className="">
                <div className=" overflow-hidden ">
                  <div className=" w-[310px] transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
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
                  <div className=" absolute flex gap-44 font-semibold pt-3 text-white top-[-230px] left-0">
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
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
