import React from "react";
import { CgFacebook } from "react-icons/cg";
import { GrLinkedinOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import "./Footer.css";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#231F40" }} className="flex flex-col justify-center">
      <div className="w-[90%] flex justify-center flex-wrap gap-16 my-20 mx-auto">
        <div className="w-[20%] max-xl:w-[40%] max-md:w-[100%] flex flex-col gap-10">
          <img
            className="w-[150px]"
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/logo-white-2.png"
          />
          <p className=" text-gray-100 font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-hover w-12 h-12 rounded">
              <CgFacebook className=" text-white text-2xl mx-auto" />
            </button>
            <button className="btn-hover w-12 h-12 rounded">
              <GrLinkedinOption className=" text-white text-xl mx-auto" />
            </button>
            <button className="btn-hover w-12 h-12 rounded">
              <FaPinterestP className=" text-white text-xl mx-auto" />
            </button>
            <button className="btn-hover w-12 h-12 rounded">
              <FaTwitter className=" text-white text-xl mx-auto" />
            </button>
          </div>
        </div>
        <div className="w-[15%] max-xl:w-[40%] max-md:w-[100%] gap-10 flex flex-col">
          <h1 className=" text-white text-2xl font-medium">Explore</h1>
          <div className=" flex flex-col gap-5">
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> About Us
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Upcoming Events
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Blog & News
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> FAQ Question
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Testimonial
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Privacy Policy
            </p>
          </div>
        </div>
        <div className="w-[15%] max-xl:w-[40%] max-md:w-[100%] gap-10 flex flex-col">
          <h1 className=" text-white text-2xl font-medium">Useful Links</h1>
          <div className=" flex flex-col gap-5">
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Contact Us
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Pricing Plan
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Gallery
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Instructor
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiChevronDoubleRight /> Purchase Guide
            </p>
          </div>
        </div>
        <div className="w-[25%] max-xl:w-[40%] max-md:w-[100%] gap-10 flex flex-col">
          <h1 className=" text-white text-2xl font-medium">Contact Info</h1>
          <div className=" flex flex-col gap-5">
            <p className=" flex gap-2 font-medium text-gray-100">
              <HiOutlineLocationMarker className=" text-2xl" /> 275 Quadra Street Victoria Road, New York
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiPhone /> + 1 (237) 382-2839
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <HiPhone /> + 1 (237) 382-2840
            </p>
            <p className=" flex gap-2 items-center font-medium text-gray-100 cursor-pointer duration-300  hover:text-blue-800">
              <span><MdOutlineEmail className=" text-xl"/></span>
              <span>yourmailaddress@example.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[80%] flex justify-center items-center my-10 mx-auto">
        <p className=" text-gray-100 font-medium text-center">Copyright 2023 EduPro | Developed By Team C . All Rights Reserved</p>
      </div>
    </div>

    <BackToTop/>
    </>
  );
};

export default Footer;
