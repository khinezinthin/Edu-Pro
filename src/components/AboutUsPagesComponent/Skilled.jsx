import React, { useState } from "react";
import circle from "../../assets/instructor-border-shape.png";
import instuctor1 from "../../assets/instructor-01-01-2.webp";
import { GrLinkedinOption, GrFacebookOption, GrTwitter } from "react-icons/gr";
import "./Skilled.css";
import blur from "../../assets/shape-04-01-2.png";
import ball from "../../assets/shape-24-02-2.png";
import leaf from "../../assets/shape-08-02-2.png";
const Skilled = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-one-service-2.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center overflow-hidden">
      <div className=" overflow-hidden w-full flex flex-col gap-24 justify-center my-20 p-5">
        <div className="mx-auto flex gap-3 w-[90%] flex-col justify-center ">
          <h1 className=" text-blue-700 tracking-wider font-medium text-center">
            SKILLED INSTRUCTOR
          </h1>
          <h1 className=" text-gray-700 max-sm:text-3xl lg:text-5xl md:text-4xl text-2xl font-bold text-center">
            Introduce Our Life Coaches
          </h1>
        </div>
        <div className="flex gap-10  flex-wrap lg:gap-7 md:gap-5 lg:gap-y-20 md:gap-y-15  justify-center relative">
          {/* instructorOne */}
          <div className="lg:w-1/5 instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*2*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*3*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*4*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*5*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*6*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  lg:scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*7*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%] ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
          {/*8*/}
          <div className="lg:w-1/5 md:w-1/4 w-full instructorShow flex  justify-center items-center flex-col gap-14">
            <div className="hoverImageContainer h-60 relative flex justify-center flex-col items-center">
              <div className=" overflow-hidden  rounded-[50%]  ">
                <img src={instuctor1} alt="" className="  " />
              </div>
              <div className="w-[230px] h-[230px] opacity-0 hoverImage  scale-[1.1] absolute top-[5px] left-0 bg-[--color-dark] transition-all  rounded-[50%]"></div>
              <div
                className={`absolute transitionCustom  top-[5px] left-0 hoverMoveClass mouseEnter`}>
                <img
                  src={circle}
                  alt=""
                  className=" scale-[1.3] md:scale-[1.2] "
                />
              </div>
              <div className=" absolute top-[47%] left-[25%] flex justify-center gap-4 ">
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrLinkedinOption className=" text-[--color-primary] icon" />
                </div>
                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%]">
                  <GrFacebookOption className=" text-[--color-primary] icon" />
                </div>

                <div className="iconUpAnimation hoverIconAppear hidden p-2 bg-white hover:bg-[--color-primary] iconHover rounded-[50%] ">
                  <GrTwitter className=" text-[--color-primary] icon" />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-2xl font-semibold text-gray-700 hover:text-[--color-primary]">
                Mark R. Ronson
              </p>
              <p className=" text-[--color-body] hover:text-[--color-primary] ">
                UI Designer
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block md:block min-[820px]:hidden absolute left-[20px] bottom-[-20px] ">
          <div className=" ">
            <img src={blur} alt="" className="moveUpDownClass  rounded-[50%]" />
          </div>
        </div>
        <div className=" hidden lg:block md:block min-[820px]:hidden absolute right-[0px] top-[0px] ">
          <div className=" overflow-hidden">
            <img src={ball} alt="" className=" w-[80%]" />
          </div>
        </div>
        <div className=" hidden lg:block md:block min-[820px]:hidden absolute left-[0px] top-[0px] ">
          <div className=" overflow-hidden">
            <img src={leaf} alt="" className=" w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilled;