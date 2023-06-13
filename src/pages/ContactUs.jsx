import React from "react";
import {
  RiGlobalFill,
  RiHeadphoneFill,
  RiMailOpenFill,
  RiMapPinFill,
} from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
AOS.init();

const ContactUs = () => {
  return (
    <>
      <section>
        <Navbar value={2}/>
      </section>

      <section>
        <Banner title1={"Contact Us"}/>
      </section>

      <div className=" py-32 max-xl:py-20">
        <div className=" relative">
          <div
            className=" text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <p className=" text-[15px] font-bold text-[#525FE1] tracking-widest mb-2">
              NEED HELP?
            </p>
            <h1 className=" text-[35px] max-[500px]:text-[30px] font-extrabold tracking-wide">
              Get In Touch With us
            </h1>
          </div>

          <div className=" flex justify-center items-center mb-28 max-xl:mb-20 relative max-xl:flex-wrap">
            <img
              src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png"
              className=" absolute top-[20px] left-[-17px] max-xl:hidden"
              alt=""
            />
            <div
              className=" w-[50%] max-xl:w-full max-xl:mt-16 flex justify-center items-center max-[720px]:flex-wrap gap-8 max-xl:gap-7 flex-wrap "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div className=" w-[37%] max-xl:w-[46%] max-[720px]:w-[93%] max-[500px]:w-[90%] p-14 flex flex-col justify-center items-center gap-4 contact-card contact-card-shadow hover:bg-[#f86f03] duration-300 rounded-md">
                <p className=" contact-icon p-3 bg-[rgba(82,95,225,.1)] rounded-full text-[#525FE1] text-2xl">
                  <RiGlobalFill />
                </p>
                <h1 className=" contact-title text-[17px] font-bold tracking-widest">
                  Our Website
                </h1>
                <p className=" cursor-pointer contact-p flex flex-col justify-center items-center gap-1 text-gray-800 tracking-wide">
                  <span>www.example.com</span>
                  <span>www.theme.net</span>
                </p>
              </div>

              <div className="w-[37%] max-xl:w-[46%] max-[720px]:w-[93%] max-[500px]:w-[90%] p-14 flex flex-col justify-center items-center gap-4 contact-card contact-card-shadow hover:bg-[#f86f03] duration-300 rounded-md">
                <p className=" contact-icon p-3 bg-[#0DB09F1A] rounded-full text-[#0DB09F] text-2xl">
                  <RiHeadphoneFill />
                </p>
                <h1 className=" contact-title text-[17px] font-bold tracking-widest">
                  Call Us On
                </h1>
                <p className=" cursor-pointer contact-p flex flex-col justify-center items-center gap-1 text-gray-800 tracking-wide whitespace-nowrap">
                  <span>+2763 (388) 2930</span>
                  <span>+4875 (356) 2568</span>
                </p>
              </div>

              <div className="w-[37%] max-xl:w-[46%] max-[720px]:w-[93%] max-[500px]:w-[90%] p-14 flex flex-col justify-center items-center gap-4 contact-card contact-card-shadow hover:bg-[#f86f03] duration-300 rounded-md">
                <p className=" contact-icon p-3 bg-[#FFA41B1A] rounded-full text-[#FFA41B] text-2xl">
                  <RiMailOpenFill />
                </p>
                <h1 className=" contact-title text-[17px] font-bold tracking-widest">
                  Email Us
                </h1>
                <p className=" cursor-pointer contact-p flex flex-col justify-center items-center gap-1 text-gray-800 tracking-wide">
                  <span>edupro@example.com</span>
                  <span>contact@edupro.com</span>
                </p>
              </div>

              <div className="w-[37%] max-xl:w-[46%] max-[720px]:w-[93%] max-[500px]:w-[90%] p-14 flex flex-col justify-center items-center gap-4 contact-card contact-card-shadow hover:bg-[#f86f03] duration-300 rounded-md">
                <p className=" contact-icon p-3 bg-[#FB7C561A] rounded-full text-[#F86F03] text-2xl">
                  <RiMapPinFill />
                </p>
                <h1 className=" contact-title text-[17px] font-bold tracking-widest">
                  Our Location
                </h1>
                <p className=" contact-p flex flex-col justify-center items-center gap-1 text-gray-800 tracking-wide whitespace-nowrap">
                  <span>486 Normana Avenue</span>
                  <span>Morningtide, 4223</span>
                </p>
              </div>
            </div>

            <img
              src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-01-2.png"
              className=" absolute top-[-10px] right-[20px] max-xl:hidden img-reverse"
              alt=""
            />
            <div className=" w-[50%] pr-20 max-xl:w-full max-xl:px-5">
              <form
                action=""
                className=" flex flex-col justify-center mt-14"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <input
                  type="text"
                  className=" z-10 w-full border py-4 pl-7 mb-5 bg-[#F5F5F5] rounded-md focus:border-[#525FE1] focus:outline-none placeholder-gray-500"
                  placeholder="Name*"
                />
                <input
                  type="email"
                  className=" w-full border py-4 pl-7 mb-5 bg-[#F5F5F5] rounded-md focus:border-[#525FE1] focus:outline-none placeholder-gray-500"
                  placeholder="Email*"
                />
                <input
                  type="phone"
                  className=" w-full border py-4 pl-7 mb-5 bg-[#F5F5F5] rounded-md focus:border-[#525FE1] focus:outline-none placeholder-gray-500"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className=" w-full border py-4 pl-7 mb-5 bg-[#F5F5F5] rounded-md focus:border-[#525FE1] focus:outline-none placeholder-gray-500"
                  placeholder="Subject"
                />
                <textarea
                  className=" focus:outline-none  focus:ring-1 focus:ring-[#525FE1] placeholder-gray-500 bg-[#F5F5F5] rounded-md mb-5 pl-7 pt-5"
                  cols="30"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>

                <div>
                  <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[18px] w-full bg-[#525FE1] text-white tracking-wider rounded">
                    <span className=" text-base font-semibold">Submit Now</span>
                    <span className="flex items-center font-bold">
                      <AiOutlineArrowRight className="ml-1" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center max-w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.1993960357!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1686471930336!5m2!1sen!2sus"
              className=" w-[96%] max-[860px]:w-[94%] h-[500px] max-[869px]:h-[400px] max-[560px]:w-[92%] max-[560px]:h-[350px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <section>
        <Footer/>
      </section>
    </>
  );
};

export default ContactUs;
