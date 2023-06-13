import React, { useState } from "react";
import "./FAQ.css";
import { Accordion } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";

import Banner from "../Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
AOS.init();


const FAQ = () => {
  const [activeItem, setActiveItem] = useState(0); // Set the active item index
  const [buttonSection, setButtonSection] = useState(0);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const accordionData = [
    {
      value: "Eligible",
      heading: "Am I eligible for admission?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Time",
      heading: "How long is my personal free trial?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Support",
      heading: "Is There Any One To One Support System?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Python",
      heading: "Is There Any Prerequisites To Learn Python?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    // Add more sections as needed
  ];
  const accordionData2 = [
    {
      value: "System",
      heading: "Is There Any One To One Support System?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Guideline",
      heading: "Do You Provide Career Guideline?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "redeem",
      heading: "How do I redeem a coupon?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "refund",
      heading: "How do I get a refund?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    // Add more sections as needed
  ];
  const accordionData3 = [
    {
      value: "Kim NamJoon",
      heading: "Kim NamJoon?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Kim Seok Jin",
      heading: "Kim Seok Jin",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Min YoonGi",
      heading: "How do I redeem  Min YoonGi?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    {
      value: "Jung Hoseok",
      heading: "How do I get Jung Hoseok?",
      content:
        "Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.",
    },
    // Add more sections as needed
  ];

  return (
    <>
      <section>
        <Navbar value={2}/>
      </section>
      <section>
        <Banner title1={"Frequently Asked Questions"} />
      </section>
      <section
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        className=" lg:min-h-[900px] flex flex-col justify-center  md:h-screen ">
        <div className="   select-none flex justify-center w-full p-6    flex-col items-center ">
          <div className=" flex justify-center w-full    flex-col items-center lg:gap-14 md:gap-6 gap-14">
            {/* title */}
            <div className="   w-full container flex justify-center items-center flex-col lg:gap-14 md:gap-6 gap-4">
              <div className=" flex flex-wrap gap-5 justify-center flex-col items-center">
                <p className=" font-semibold text-[--color-primary]">
                  FAQ QUESTIONS
                </p>
                <h1 className="text-center w-full lg:w-[80%] md:w-full lg:text-4xl md:text-3xl text-2xl text-[--color-heading] font-bold tracking-wide">
                  Get Every General Answers From Here
                </h1>
              </div>
              <div className=" flex flex-wrap gap-4 justify-center">
                <div className=" relative">
                  <button
                    onClick={() => setButtonSection(0)}
                    className={`FAQ-Navigate-Btn ${
                      buttonSection == 0 && "FAQ-active"
                    }  lg:py-3 py-[6px] md:py-[8px] lg:px-12 md:px-10 px-5 rounded fontFAQ ${
                      buttonSection != 0 && "text-[--color-heading]"
                    }`}>
                    Online Education
                  </button>
                </div>
                <div onClick={() => setButtonSection(1)} className=" relative">
                  <button
                    className={`${
                      buttonSection == 1 && "FAQ-active"
                    } FAQ-Navigate-Btn  lg:py-3 py-[6px] md:py-[8px] lg:px-12 md:px-10 px-5 rounded fontFAQ ${
                      buttonSection != 1 && "text-[--color-heading]"
                    }`}>
                    Payment Method
                  </button>
                </div>
                <div onClick={() => setButtonSection(2)} className=" relative">
                  <button
                    className={`${
                      buttonSection == 2 && "FAQ-active"
                    } FAQ-Navigate-Btn   lg:py-3 py-[6px] md:py-[8px] lg:px-12 md:px-10 px-5 rounded fontFAQ ${
                      buttonSection != 2 && "text-[--color-heading]"
                    }`}>
                    Pricing Plan
                  </button>
                </div>
              </div>

  
            </div>
            {/* Question and answer */}
            <div
              className={` ${
                buttonSection != 0 ? "hidden" : ""
              } h-96  w-full flex   justify-between flex-wrap items-center container`}>
              <div
                className={`lg:w-1/2 md:w-full w-full   flex  justify-center items-center`}>
                <div className="w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="Eligible"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body]">{item.content}</p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className=" lg:w-1/2 md:w-full w-full  flex justify-center items-center">
                <div className="w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="Eligible"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body]">{item.content}</p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className={` ${
                buttonSection != 1 ? "hidden" : ""
              }   w-full flex justify-between flex-wrap items-center container`}>
              <div
                className={`lg:w-1/2 md:w-full   h-full flex  justify-center items-center`}>
                <div className="w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="System"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData2.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ select-none">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body] select-none">
                            {item.content}
                          </p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className=" lg:w-1/2 md:w-full w-full  flex  justify-center items-center">
                <div className=" w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="System"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData2.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body]">{item.content}</p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className={` ${
                buttonSection != 2 ? "hidden" : ""
              } h-96  w-full flex justify-between flex-wrap items-center container`}>
              <div
                className={`lg:w-1/2 md:w-full w-full   flex  justify-center items-center`}>
                <div className="w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="Kim NamJoon"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData3.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body]">{item.content}</p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className=" lg:w-1/2 md:w-full w-full flex  justify-center items-center">
                <div className=" w-full lg:w-[85%] md:w-full">
                  <Accordion
                    defaultValue="Kim NamJoon"
                    chevron={<AiOutlinePlus size="1rem" />}
                    styles={{
                      chevron: {
                        "&[data-rotate]": {
                          transform: "rotate(45deg)",
                        },
                        item: {
                          "&[data-active]": {},
                        },
                      },
                    }}>
                    {accordionData3.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.Control>
                          <div className="font-semibold fontFAQ">
                            {item.heading}
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <p className=" text-[--color-body]">{item.content}</p>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <Footer/>
      </section>
    
    </>
  );
};

export default FAQ;
