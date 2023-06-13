import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import {
  BsStarFill,
  BsPeople,
  BsArrowRight,
  BsClock,
  BsFillHeartFill,
} from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import coursesData from "../components/coursesData.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
AOS.init();

const Courses = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    setData(coursesData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <section>
        <Navbar value={2} />
      </section>
      <div>
        {/* Banner */}
        <section>
          <Banner title1={"Courses"} />
        </section>

        <div className=" flex flex-col justify-center mt-10">
          {/* search */}
          <div className=" flex justify-between mx-28 mt-28">
            <p className=" text-lg">
              Showing <span className=" font-bold">{currentPage}</span> Of{" "}
              <span className=" font-bold">{totalPages} </span> pages
            </p>
            <div className=" bg-slate-200 flex rounded-md items-center gap-3">
              <input
                placeholder="Search ..."
                type="text"
                className=" bg-slate-200 px-6 py-3 rounded-md outline-none"
              />
              <p className=" px-3 py-1 text-2xl cursor-pointer">
                <BiSearch />
              </p>
            </div>
          </div>

          {/* Courses */}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1200"
            className=" flex flex-wrap items-center justify-center gap-10 mt-10">
            {currentItems.map((data) => (
              <div key={data.id}>
                <div className=" flex justify-center items-center">
                  <div className=" bg-slate-100 hover:bg-white hover:shadow-lg w-[330px] h-auto p-3 group">
                    <div className="">
                      <div className=" overflow-hidden ">
                        <div className=" w-[310px] transition-transform duration-500 ease-in-out hover:transform-gpu group-hover:scale-110 ">
                          <div className="  overflow-hidden relative">
                            <img
                              className=""
                              src={data.image}
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
                            <p>{data.hour}</p>
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
                            src={data.pfpImage}
                            alt=""
                          />
                          <h2> {data.name} </h2>
                        </div>
                        <div className=" flex items-center gap-5">
                          <p className=" text-yellow-500">
                            <BsStarFill />
                          </p>
                          <span>{data.rate}</span>
                        </div>
                      </div>
                      <div>
                        <Link to={`/courseDetail/${data.id}`}>
                          <btn
                            key={data.id}
                            className=" linkBtn cursor-pointer font-semibold tracking-wide inline-block leading-6 text-[20px]"
                            href="#">
                            {data.title}
                          </btn>
                        </Link>
                        <div className=" flex items-center gap-9 pt-5">
                          <div className=" flex items-center gap-3">
                            <p className=" text-gray-500 text-lg ">
                              <BsPeople />
                            </p>
                            <p className=" text-[16px] text-gray-500">
                              {data.noStudent} Students
                            </p>
                          </div>
                          <div className=" flex items-center gap-3">
                            <p className=" text-gray-500 text-lg ">
                              <IoNewspaperOutline />
                            </p>
                            <p className=" text-[16px] text-gray-500">
                              {data.noLesson} Lessons
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className=" mt-4" />
                    <div className=" flex items-center gap-3 mt-4">
                      <button className=" bg-[#525fe1] text-[16px] text-white px-4 py-1 rounded">
                        {data.price}
                      </button>
                      <p className="text-gray-500 line-through text-[16px]">
                        {data.prePrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className=" flex justify-center gap-5 my-20 text-lg ">
          <button
            className="  w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-[#eeeff9] text-gray-700 focus:bg-blue-500 focus:text-white hover:bg-[#525fe1] hover:text-white"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            <IoIosArrowBack />
          </button>

          {/* Render three pagination buttons */}
          {pageNumbers.map((number) => (
            <button
              className=" w-10 h-10 rounded-full border border-gray-100 bg-[#eeeff9] text-center leading-8 text-gray-700 focus:bg-blue-500 focus:text-white hover:bg-[#525fe1] hover:text-white"
              key={number}
              onClick={() => setCurrentPage(number)}
              disabled={number === currentPage}>
              {number}
            </button>
          ))}

          {/* Next page button */}
          <button
            className="  w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-[#eeeff9] text-gray-700 focus:bg-blue-500 focus:text-white hover:bg-[#525fe1] hover:text-white"
            disabled={indexOfLastItem >= data.length}
            onClick={() => setCurrentPage(currentPage + 1)}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Courses;
