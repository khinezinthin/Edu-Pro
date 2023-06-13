import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import "./Pricing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
AOS.init();

const Pricing = () => {
  const [open, setOpen] = useState(true);

  const yearlyOnclick = () => {
    setOpen(true);
  };

  const monthlyOnclick = () => {
    setOpen(false);
  };

  return (
    <>
      <section>
        <Navbar value={2}/>
      </section>

      <section>
        <Banner title1={"Pricing Plan"}/>
      </section>

      <div
        className=" pt-28 pb-32"
        style={{
          backgroundImage: `url(https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/pricing-plan-2.webp)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" mx-20 max-xl:mx-10 max-lg:mx-8 max-[500px]:mx-3">
          <div className=" flex justify-between items-center mb-16 max-lg:flex-wrap">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className=" max-lg:w-full max-lg:mb-5"
            >
              <h1 className="text-[15px] font-bold text-[#525FE1] tracking-widest mb-1">
                PRICING PLAN
              </h1>
              <h1 className=" text-[37px] font-bold text-gray-800 tracking-wide max-[675px]:text-[32px] max-[500px]:text-[27px]">
                Choose Your Pricing Plan
              </h1>
            </div>
            <div
              className=" flex justify-center items-center bg-[rgba(82,95,225,.08)] rounded-md w-[240px]
            max-[675px]:w-[215px] p-3"
            >
              <span
                onClick={() => yearlyOnclick()}
                className={` 
              ${
                open
                  ? "bg-[#525FE1] text-white"
                  : "bg-[rgba(82,95,225,.08] text-gray-700 cursor-pointer"
              }
              px-6 py-2 max-[675px]:px-5 max-[675px]:text-base rounded font-semibold text-lg duration-300`}
              >
                Yearly
              </span>

              <span
                onClick={() => monthlyOnclick()}
                className={` 
              ${
                open != true
                  ? "bg-[#525FE1] text-white"
                  : "bg-[rgba(82,95,225,.08] text-gray-700 cursor-pointer"
              }
              px-6 py-2 max-[675px]:px-5 max-[675px]:text-base rounded font-semibold text-lg duration-300`}
              >
                Monthly
              </span>
            </div>
          </div>

          {open == true ? (
            <div className={` Yearly my-div`}>
              <div
                className=" flex justify-center items-center gap-7 max-[981px]:gap-5 max-lg:gap-9 max-lg:flex-wrap
           max-lg:justify-start max-lg:items-center"
              >
                <div className=" bg-white w-[36%] max-lg:w-[48%] max-[781px]:w-full py-16 px-14 rounded contact-card-shadow">
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      BASIC PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $15.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Interactive practice sessions
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#525FE1] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#231F40] text-white tracking-wider rounded">
                      <span className=" max-[940px]:text-[15px] text-base font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className=" bg-white w-[34%] max-lg:w-[48%] max-[781px]:w-full max-lg:py-10 py-16 px-14 rounded contact-card-shadow relative">
                  <div
                    className=" absolute top-4 max-lg:top-2 right-0
              bg-[#f86f03] text-white text-[14px] font-bold tracking-wider w-[120px] py-1 text-center"
                  >
                    POPULAR
                    <div
                      style={{
                        width: "0px",
                        height: "0px",
                        borderTop: "15px solid transparent",
                        borderLeft: "16px solid white",
                        borderBottom: "15px solid transparent",
                      }}
                      className=" absolute top-[-1px] left-[0px]"
                    ></div>
                  </div>
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      STANDARD PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $25.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Lifetime Access All Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Excercise Files & Notes
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#525FE1] text-white tracking-wider rounded">
                      <span className=" text-base max-[940px]:text-[15px] font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className=" bg-white w-[36%] max-lg:w-[48%] max-[781px]:w-full py-16 px-14 rounded contact-card-shadow">
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      PREMIUM PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $35.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Lifetime Access All Courses
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#525FE1] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#231F40] text-white tracking-wider rounded">
                      <span className=" text-base max-[940px]:text-[15px] font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={` Monthly my-div-2`}>
              <div
                className=" flex justify-center items-center gap-7 max-[981px]:gap-5 max-lg:gap-9 max-lg:flex-wrap
           max-lg:justify-start max-lg:items-center"
              >
                <div className=" bg-white w-[36%] max-lg:w-[48%] max-[781px]:w-full py-16 px-14 rounded contact-card-shadow">
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      BASIC PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $29.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Interactive practice sessions
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#525FE1] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#231F40] text-white tracking-wider rounded">
                      <span className=" max-[940px]:text-[15px] text-base font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className=" bg-white w-[34%] max-lg:w-[48%] max-[781px]:w-full max-lg:py-10 py-16 px-14 rounded contact-card-shadow relative">
                  <div
                    className=" absolute top-4 max-lg:top-2 right-0
              bg-[#f86f03] text-white text-[14px] font-bold tracking-wider w-[120px] py-1 text-center"
                  >
                    POPULAR
                    <div
                      style={{
                        width: "0px",
                        height: "0px",
                        borderTop: "15px solid transparent",
                        borderLeft: "16px solid white",
                        borderBottom: "15px solid transparent",
                      }}
                      className=" absolute top-[-1px] left-[0px]"
                    ></div>
                  </div>
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      STANDARD PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $39.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Lifetime Access All Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Excercise Files & Notes
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#525FE1] text-white tracking-wider rounded">
                      <span className=" text-base max-[940px]:text-[15px] font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className=" bg-white w-[36%] max-lg:w-[48%] max-[781px]:w-full py-16 px-14 rounded contact-card-shadow">
                  <div className=" text-center flex flex-col gap-3 mb-9">
                    <h4 className="text-[15px] max-[781px]:text-[16px] font-bold text-gray-800 tracking-widest">
                      PREMIUM PLAN
                    </h4>
                    <h1 className=" text-[#525FE1] ">
                      <span className=" font-bold text-[37px] tracking-wide">
                        $49.99{" "}
                      </span>
                      <span>/Yearly</span>
                    </h1>
                  </div>

                  <div className=" flex flex-col gap-5 mb-12">
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Unlimited Access Courses
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Certificate After Completion
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        High Resolution Videos
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        24/7 Dedicated Support
                      </span>
                    </p>
                    <p className=" flex items-center gap-3">
                      <span className=" text-[#F86F03]">
                        <AiOutlineCheckCircle />
                      </span>
                      <span className=" text-gray-500">
                        Lifetime Access All Courses
                      </span>
                    </p>
                  </div>

                  <div>
                    <button className=" hover:bg-[#525FE1] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] max-[940px]:px-[24px] bg-[#231F40] text-white tracking-wider rounded">
                      <span className=" text-base max-[940px]:text-[15px] font-semibold whitespace-nowrap">
                        Buy This Plan
                      </span>
                      <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Pricing;
