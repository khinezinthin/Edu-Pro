import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WhatweOffer = () => {
  return (
    <div
      className=" mt-16 mb-32 "
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div className=" flex flex-col justify-center items-center relative ">
        <h2 className=" uppercase text-[16px] text-[#525fe1] font-bold">
          what we offer
        </h2>
        <h2 className=" capitalize lg:text-[40px] text-[32px] w-[400px] lg:w-[600px] px-3 text-center font-bold">
          learn new skills when and where you like
        </h2>
        <img
          className=" absolute top-32 max-xl:hidden right-10"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-07-2.png"
          alt=""
        />
      </div>

      <div className=" flex items-center gap-[20px] overflow-hidden flex-wrap justify-center mx-[1%] mt-10 relative ">
        <div className=" group hover:shadow-md bg-[#EAF8F6] hover:shadow-[#84ded1] duration-500 w-[270px] h-[310px] rounded-[5px] px-[30px] py-[40px] flex flex-col items-center gap-6 relative">
          <img
            className=" absolute max-xl:hidden top-54  -left-24"
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-03-2.png"
            alt=""
          />
          <div className="  relative bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center mt-3">
            <img
              className=" absolute -bottom-5 opacity-0 group-hover:opacity-100 duration-500 "
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-03.png"
              alt=""
            />
            <img
              className=" absolute -left-6 top-5 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-02.png"
              alt=""
            />

            <img
              className=" absolute -right-4 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-01.png"
              alt=""
            />
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/offer-icon-01-2.png"
              alt=""
            />
          </div>

          <p className=" capitalize text-[20px] font-semibold text-[#231f40]">
            remote learning
          </p>
          <p className=" text-center text-[#6f6b80]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" group hover:shadow-md bg-[#fff3ee] hover:shadow-[#f4ddd3] duration-500 w-[270px] h-[310px] rounded-[5px] px-[40px] py-[30px] flex flex-col items-center gap-6">
          <div className=" bg-white relative w-[80px] h-[80px] rounded-full flex items-center justify-center mt-3">
            <img
              className=" absolute -bottom-5 opacity-0 group-hover:opacity-100 duration-500 "
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-03.png"
              alt=""
            />
            <img
              className=" absolute -left-6 top-5 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-02.png"
              alt=""
            />

            <img
              className=" absolute -right-4 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-01.png"
              alt=""
            />
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/offer-icon-02-2.png"
              alt=""
            />
          </div>
          <p className=" capitalize text-[20px] font-semibold text-[#231f40]">
            awesome tutors
          </p>
          <p className=" text-center text-[#6f6b80]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" group hover:shadow-md  bg-[#EFF4FC] hover:shadow-[#cedef8] duration-500 w-[270px] h-[310px] rounded-[5px] px-[40px] py-[30px] flex flex-col items-center gap-6">
          <div className=" bg-white relative w-[80px] h-[80px] rounded-full flex items-center justify-center mt-3">
            <img
              className=" absolute -bottom-5 opacity-0 group-hover:opacity-100 duration-500 "
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-03.png"
              alt=""
            />
            <img
              className=" absolute -left-6 top-5 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-02.png"
              alt=""
            />

            <img
              className=" absolute -right-4 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-01.png"
              alt=""
            />
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/offer-icon-03-2.png"
              alt=""
            />
          </div>
          <p className=" capitalize text-[20px] font-semibold text-[#231f40]">
            global certificate
          </p>
          <p className=" text-center text-[#6f6b80]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className=" group hover:shadow-md bg-[#FFF1F1] hover:shadow-[#f7d5d5] duration-500 w-[270px] h-[310px] rounded-[5px] px-[40px] py-[30px] flex flex-col items-center gap-6 relative">
          <div className=" bg-white relative w-[80px] h-[80px] rounded-full flex items-center justify-center mt-3">
            <img
              className=" absolute -bottom-5 opacity-0 group-hover:opacity-100 duration-500 "
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-03.png"
              alt=""
            />
            <img
              className=" absolute -left-6 top-5 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-02.png"
              alt=""
            />

            <img
              className=" absolute -right-4 opacity-0 group-hover:opacity-100 duration-500"
              src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/service-icon-01.png"
              alt=""
            />
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/offer-icon-04-2.png"
              alt=""
            />
          </div>
          <p className=" capitalize text-[20px] font-semibold text-[#231f40]">
            carrier guideline
          </p>
          <p className=" text-center text-[#6f6b80]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            className=" absolute opacity-0 xl:opacity-100 bottom-3 -right-24"
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-15-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhatweOffer;
