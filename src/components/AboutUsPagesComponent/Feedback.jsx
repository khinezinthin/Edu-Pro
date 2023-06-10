import React from "react";
import "./Feedback.css";
import {FaStar} from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="bg-image flex justify-center">
      <div className="w-[90%] flex flex-col gap-16 justify-center my-20">
        <div className="flex flex-col justify-center gap-1">
          <p className="tex-lg font-medium text-blue-600 tracking-widest text-center">
            TESTIMONIALS
          </p>
          <h1 className=" text-4xl text-gray-700 font-bold text-center leading-[50px]">
            Our Lovely Students Feedback
          </h1>
        </div>
        <div className=" flex gap-5">
          <div className="w-[30%] bg-white flex flex-col gap-6 rounded p-8 relative">
            <div className="flex gap-4">
              <div>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png" />
              </div>
              <div className="flex flex-col">
                <p className=" text-xl font-medium text-gray-700">Stive Marlone</p>
                <p className=" text-blue-500">Web Developer</p>
              </div>
            </div>
            <div>
                <p className=" text-gray-500">“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
            </div>
            <div className="flex gap-1">
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
            </div>
            <div className="triangle-down absolute bottom-[-30px]"></div>
          </div>
          <div className="w-[30%] bg-white flex flex-col gap-6 rounded p-8 relative">
            <div className="flex gap-4">
              <div>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png" />
              </div>
              <div className="flex flex-col">
                <p className=" text-xl font-medium text-gray-700">Stive Marlone</p>
                <p className=" text-blue-500">Web Developer</p>
              </div>
            </div>
            <div>
                <p className=" text-gray-500">“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
            </div>
            <div className="flex gap-1">
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
            </div>
            <div className="triangle-down absolute bottom-[-30px]"></div>
          </div>
          <div className="w-[30%] bg-white flex flex-col gap-6 rounded p-8 relative">
            <div className="flex gap-4">
              <div>
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png" />
              </div>
              <div className="flex flex-col">
                <p className=" text-xl font-medium text-gray-700">Stive Marlone</p>
                <p className=" text-blue-500">Web Developer</p>
              </div>
            </div>
            <div>
                <p className=" text-gray-500">“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
            </div>
            <div className="flex gap-1">
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
                <FaStar className=" text-orange-400 text-xl"/>
            </div>
            <div className="triangle-down absolute bottom-[-30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
