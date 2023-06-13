import React from "react";
import { RiCalendar2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { AiOutlineEye } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { Input } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetails = () => {
  return (
    <>
      <section>
        <Navbar value={2}/>
      </section>
      <section>
        <Banner title1={"Social Media Marketing MASTERY( A-Z ) Journey"} title2={"Branding"} />
      </section>
      <div className=" flex justify-center">
        <div className="flex max-lg:flex-col max-lg:gap-16 justify-between w-[90%] gap-5 lg:my-32 my-20">
          <div className="w-[60%] max-lg:w-[100%] flex flex-col gap-8">
            <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26.webp" />
            <div className="flex flex-wrap gap-8">
              <div className="flex gap-2 items-center">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp"
                  className="w-[30px] h-[30px] rounded-full"
                  alt=""
                />
                <p className=" text-[#6f6b80]">Janet Fleming</p>
              </div>
              <div className="flex gap-2 text-[#6f6b80] items-center">
                <RiCalendar2Line />
                <p>09 Feb, 2023</p>
              </div>
              <div className="flex gap-2 text-[#6f6b80] items-center">
                <TiMessages />
                <p>0 Comments</p>
              </div>
              <div className="flex gap-2 text-[#6f6b80] items-center">
                <AiOutlineEye />
                <p>1 Min Read</p>
              </div>
            </div>
            <h1 className=" text-[#231f40] font-bold text-3xl leading-[45px]">
              Social Media Marketing MASTERY( A-Z ) Journey
            </h1>
            <div>
              <p className=" text-[#6f6b80] leading-[25px]">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
                Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons
                rsus mal suada and fadolorit to the consectetur elit. Grursus
                mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend.
              </p>
            </div>
            <div className="relative flex justify-center shadow-lg border-t-[3px] border-t-blue-600 rounded-md">
              <div className="w-[82%] py-6">
                <p className=" text-xl text-[#525fe1] text-center">
                  “ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                  mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                  urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                  pulvinar a nibh quis. ”
                </p>
              </div>
              <div className=" absolute right-2 bottom-1">
                <img src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/quote.png" />
              </div>
            </div>
            <div>
              <p className=" text-[#6f6b80] leading-[25px]">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" text-[#231f40] font-bold text-2xl leading-[45px]">
                Learned From Doing One Of Those Social Media
              </h1>
              <div className="flex flex-col gap-3">
                <p className="flex gap-2 text-[#6f6b80] items-start">
                  <span className="w-4">
                    <RiCheckboxCircleFill className=" text-blue-600 mt-[5px]" />
                  </span>
                  Struggling to sell one multi-million dollar home currently on
                  the market
                </p>
                <p className="flex gap-2 text-[#6f6b80] items-start">
                  <span className="w-4">
                    <RiCheckboxCircleFill className=" text-blue-600 mt-[5px]" />
                  </span>
                  The point of using Lorem Ipsum is that it has a normal
                  distribution of letters.
                </p>
                <p className="flex gap-2 text-[#6f6b80] items-start">
                  <span className="w-4">
                    <RiCheckboxCircleFill className=" text-blue-600 mt-[5px]" />
                  </span>
                  Publishing packages and web page editors now use their default
                  model text.
                </p>
                <p className="flex gap-2 text-[#6f6b80] items-start">
                  <span className="w-4">
                    <RiCheckboxCircleFill className=" text-blue-600 mt-[5px]" />
                  </span>
                  Publishing packages and web page editors now use their default
                  model text.
                </p>
              </div>
            </div>
            <div className="flex max-md:flex-col max-md:justify-start max-md:gap-5 items-center justify-between">
              <div className="w-[40%] max-md:w-[100%] flex max-md:flex-wrap gap-2">
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Branding
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  JavaScript
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Science
                </button>
              </div>
              <div className="w-[40%] max-md:w-[100%] flex max-md:flex-wrap gap-5 items-center">
                <p className="text-[#231f40] font-medium">Share:</p>
                <RiLinkedinFill className="text-xl cursor-pointer text-gray-500 hover:text-blue-700 duration-500" />
                <RiFacebookFill className="text-xl cursor-pointer text-gray-500 hover:text-blue-700 duration-500" />
                <RiTwitterFill className="text-xl cursor-pointer text-gray-500 hover:text-blue-700 duration-500" />
                <TfiPinterest className="text-xl cursor-pointer text-gray-500 hover:text-blue-700 duration-500" />
              </div>
            </div>
            <div>
              <hr className="border-t border-t-gray-200" />
            </div>
            <div className="flex gap-8 max-sm:flex-col items-start">
              <div className="w-[20%] max-sm:w-[100%]">
                <img
                  src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2.webp"
                  className="w-[150px] h-[140px] max-sm:w-[250px] max-sm:h-[300px] object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-3 w-[70%] max-lg:w-[80%] max-sm:w-[100%]">
                <h2 className=" text-xl text-[#231f40] font-bold">
                  Janet Fleming
                </h2>
                <p className="text-[#6f6b80] leading-[25px]">
                  Janet Fleming is an instructor, blogger, and designer living
                  in a suburb of Washington, DC. She has been assigned to aspen
                  ecosystems research and has been involved in several special
                  assignments.
                </p>
                <div className="flex gap-6 items-center">
                  <RiFacebookFill className=" text-blue-700 cursor-pointer" />
                  <RiLinkedinFill className=" text-blue-700 cursor-pointer" />
                  <TfiPinterest className=" text-blue-700 text-sm cursor-pointer" />
                  <RiTwitterFill className=" text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className=" flex max-sm:flex-col gap-5">
              <div className="w-[45%] max-lg:w-[50%] max-sm:w-[100%] bg-[#F5F5F5] flex gap-5 items-center py-5 px-6 rounded-md border-b-2 border-b-[#F5F5F5] hover:border-b-blue-600 hover:bg-white hover:shadow-lg duration-500">
                <IoIosArrowBack className=" text-2xl" />
                <p className="text-[#231f40] text-lg font-medium">
                  Branding: How to Brand Yourself and Your Business
                </p>
              </div>
              <div className="w-[45%] max-lg:w-[50%] max-sm:w-[100%] bg-[#F5F5F5] flex gap-5 items-center py-5 px-6 rounded-md border-b-2 border-b-[#F5F5F5] hover:border-b-blue-600 hover:bg-white hover:shadow-lg duration-500">
                <p className="text-[#231f40] text-lg font-medium text-end">
                  The Complete Web Developer Guideline 2023
                </p>
                <IoIosArrowForward className=" text-xl" />
              </div>
            </div>
            <form className="flex flex-col gap-5">
              <h1 className=" text-[22px] text-[#231f40] font-bold">
                Leave a Reply
              </h1>
              <p className="text-[#6f6b80] leading-[25px]">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="flex max-md:gap-5 max-md:flex-col justify-between">
                <div className="w-[48%] max-md:w-[100%]">
                  <Input variant="filled" placeholder="Name*" size="lg" />
                </div>
                <div className="w-[48%] max-md:w-[100%]">
                  <Input variant="filled" placeholder="Email*" size="lg" />
                </div>
              </div>
              <div>
                <Input variant="filled" placeholder="Website" size="lg" />
              </div>
              <div>
                <Textarea
                  placeholder="Comment"
                  variant="filled"
                  size="xl"
                  withAsterisk
                />
              </div>
              <div className="flex gap-2 items-start">
                <Checkbox className="mt-[4px]" />
                <p className="text-[#6f6b80] leading-[25px]">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <div>
                <button className=" bg-blue-600 px-7 py-4 rounded gap-2 text-lg text-white font-medium flex items-center hover:bg-blue-950 duration-500">
                  Post A Comment
                </button>
              </div>
            </form>
          </div>
          <div className="w-[35%] max-lg:w-[100%] flex flex-col gap-8">
            <div className="flex flex-col gap-7">
              <h1 className="text-[#231f40] font-bold text-2xl">Search Here</h1>
              <div className="relative">
                <Input placeholder="Search" size="lg" variant="filled" />
                <CgSearch className=" text-blue-600 text-xl absolute top-4 right-4" />
              </div>
            </div>
            <div className="flex flex-col gap-7 mt-4">
              <h1 className="text-[#231f40] font-bold text-2xl">Categories</h1>
              <div className="flex flex-col gap-3">
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Branding
                  </p>
                  <p>(5)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Digital Marketing
                  </p>
                  <p>(5)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    JavaScript
                  </p>
                  <p>(3)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Science
                  </p>
                  <p>(6)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Social Media
                  </p>
                  <p>(5)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Uncategorized
                  </p>
                  <p>(1)</p>
                </div>
                <div>
                  <hr className="border-t border-t-gray-200" />
                </div>
                <div className="text-[#6f6b80] flex justify-between">
                  <p className="hover:text-blue-600 duration-500 cursor-pointer">
                    Web Development
                  </p>
                  <p>(7)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7 mt-4">
              <h1 className="text-[#231f40] font-bold text-2xl">Latest Post</h1>
              <div className="flex gap-5 max-[380px]:flex-col items-start">
                <div className="w-{30%}">
                  <img
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-300x162.webp"
                    className="w-[100px] h-[90px] rounded-md object-cover"
                  />
                </div>
                <div className="w-[65%] max-[380px]:w-[100%]">
                  <p className="text-[#6f6b80]">17 Feb, 2023</p>
                  <p className="text-[#231f40] font-medium hover:text-blue-600 duration-500 cursor-pointer tracking-tight text-lg">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </div>
              <div>
                <hr className="border-t border-t-gray-200" />
              </div>
              <div className="flex gap-5 max-[380px]:flex-col items-start">
                <div className="w-{30%}">
                  <img
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26-300x162.webp"
                    className="w-[100px] h-[90px] rounded-md object-cover"
                  />
                </div>
                <div className="w-[65%] max-[380px]:w-[100%]">
                  <p className="text-[#6f6b80]">09 Feb, 2023</p>
                  <p className="text-[#231f40] font-medium tracking-tight text-lg hover:text-blue-600 duration-500 cursor-pointer">
                    Social Media Marketing MASTERY( A-Z ) Journey
                  </p>
                </div>
              </div>
              <div>
                <hr className="border-t border-t-gray-200" />
              </div>
              <div className="flex gap-5 max-[380px]:flex-col items-start">
                <div className="w-{30%}">
                  <img
                    src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-35-300x162.webp"
                    className="w-[100px] h-[90px] rounded-md object-cover"
                  />
                </div>
                <div className="w-[65%] max-[380px]:w-[100%]">
                  <p className="text-[#6f6b80]">08 Feb, 2023</p>
                  <p className="text-[#231f40] font-medium tracking-tight text-lg hover:text-blue-600 duration-500 cursor-pointer">
                    Branding: How to Brand Yourself and Your
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/sidebar-banner.png"
                className=""
              />
            </div>
            <div className="flex flex-col gap-7">
              <h1 className="text-[#231f40] font-bold text-2xl">
                Popular Tags
              </h1>
              <div className="flex flex-wrap gap-3">
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Art
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Consulting
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Course
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Design
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Development
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Education
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Finance
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Learning
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  Online Courses 
                </button>
                <button className="px-3 py-2 font-medium hover:bg-blue-600 hover:text-gray-50 text-gray-600 bg-[#F5F5F5] duration-500 rounded">
                  UI Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer/>
      </section>
    </>
  );
};

export default BlogDetails;
