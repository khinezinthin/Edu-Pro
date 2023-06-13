import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "./courseCategories.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const CourseCategories = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-one-service-2.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center"
    >
      <div className=" flex flex-col gap-14 justify-center my-24">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="mx-auto flex gap-3 w-[90%] flex-col justify-center"
        >
          <h1 className=" text-blue-700 tracking-wider font-medium text-center">
            COURSE CATEGORIES
          </h1>
          <h1 className=" text-gray-700 max-sm:text-3xl text-4xl font-bold text-center">
            Popular Topics To Learn
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="flex gap-10 lg:gap-7 max-lg:flex-wrap justify-center relative"
        >
          <div className=" flex flex-col gap-1 sm:w-[45%] w-[90%] lg:w-[20%] bg-white rounded-md relative under under-left go-up z-10">
            <img
              src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-26-590x430.webp"
              className="w-full rounded-t-md cursor-pointer"
            />
            <p className="text-blue-500 font-medium mx-auto mt-6">5 Courses</p>
            <p className=" text-xl font-medium mt-1 mx-auto text-gray-800 cursor-pointer hover:text-blue-600 duration-500">
              Business Analysis
            </p>
            <div className=" flex justify-center mt-4 mb-7 mx-7">
              <p className=" text-slate-500 font-normal text-center">
                The course covers the tools used in business analysis.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-1 sm:w-[45%] w-[90%] lg:w-[20%] bg-white rounded-md relative under under-left go-up z-10">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-29-590x430.webp"
              className="w-full rounded-t-md cursor-pointer"
            />
            <p className="text-blue-500 font-medium mx-auto mt-6">3 Courses</p>
            <p className=" text-xl font-medium mx-auto mt-1 text-gray-800 cursor-pointer hover:text-blue-600 duration-500 ">
              Sales Marketing
            </p>
            <div className=" flex justify-center mt-4 mb-7 mx-7">
              <p className=" text-slate-500 font-normal text-center ">
                You'll learn how to promote or sell services to customers.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-1 sm:w-[45%] w-[90%] lg:w-[20%] bg-white rounded-md relative under under-left go-up z-10">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/data-analysis-590x430.webp"
              className="w-full rounded-t-md cursor-pointer"
            />
            <p className="text-blue-500 font-medium mx-auto mt-6">4 Courses</p>
            <p className=" text-xl font-medium mx-auto mt-1 text-gray-800 cursor-pointer hover:text-blue-600 duration-500 ">
              Data Science
            </p>
            <div className=" flex justify-center mt-4 mb-7 mx-7">
              <p className=" text-slate-500 font-normal text-center ">
                Students will learn about how data analysis methods works.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-1 sm:w-[45%] w-[90%] lg:w-[20%] bg-white rounded-md relative under under-left go-up z-10">
            <img
              src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-26-590x430.webp"
              className="w-full rounded-t-md cursor-pointer"
            />
            <p className="text-blue-500 font-medium mx-auto mt-6">6 Courses</p>
            <p className=" text-xl font-medium mx-auto mt-1 text-gray-800 cursor-pointer hover:text-blue-600 duration-500 ">
              Creativity
            </p>
            <div className=" flex justify-center mt-4 mb-7 mx-7">
              <p className=" text-slate-500 font-normal text-center ">
                Students in this course will learn about creative process.
              </p>
            </div>
          </div>
          <div className=" absolute right-[50px] bottom-[-37px] max-xl:hidden">
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className=" mx-auto"
        >
          <Link to={"/courses"}>
            <button className=" bg-blue-600 px-7 py-4 rounded gap-2 text-lg text-white font-medium flex items-center hover:bg-blue-950 duration-500">
              Creative Courses
              <span>
                <BiRightArrowAlt className=" text-2xl font-bolder pt-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
