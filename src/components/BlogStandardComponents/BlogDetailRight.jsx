import React from "react";
import { CgSearch } from "react-icons/cg";
import { Input } from "@mantine/core";

const BlogDetailRight = () => {
  return (
    <div className=" flex flex-col justify-center gap-8">
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
        <h1 className="text-[#231f40] font-bold text-2xl">Popular Tags</h1>
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
  );
};

export default BlogDetailRight;
