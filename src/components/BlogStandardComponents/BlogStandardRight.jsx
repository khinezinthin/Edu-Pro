import React, { useState } from "react";
import "./BlogStandard.css";
import { AiOutlineTags } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import BlogImg1 from "../../assets/course-06-2-1024x551.webp";

import "swiper/css";
import { Pagination } from "@mantine/core";
// import Banner from "../Banner";
import { Link } from "react-router-dom";
const BlogStandardRight = () => {
  return (
    <>
      <div className=" w-full flex justify-end flex-wrap flex-col lg:flex-row ">
        <div className=" w-full  m-auto flex flex-col gap-7 justify-center items-center pb-10">
          <div
            id="1"

            className="mx-auto  shadow w-full  flex flex-col gap-4 lg:gap-7 md:gap-5   overflow-hidden bg-[--color-shape]">
            <div className="relative h-[100%] w-[100%]   flex justify-center items-center flex-col ">
              <div className="w-full h-[70%] thumnail   relative">

          
                <div className="hoverCustom h-full w-full overflow-hidden rounded">
                  <Link to={"/blogDetail"}>
                    <img
                      src={BlogImg1}
                      className="w-full h-full cursor-pointer rounded transition-all hoverItem overflow-hidden "
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0    lg:top-[5%] lg:left-[27px]  rounded lg:py-2 lg:px-6 md:py-2 md:px-4 px-[2px] py-1 bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold  lg:font-Size-h4 text-white">
                  Social Media
                </p>
              </div>
              <div className="absolute z-50 bottom-[-11%]  right-[5%] md:bottom-[-6%] md:right-[5%] lg:bottom-[-7%] lg:right-[5%] w-[47px] h-[47px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50%] bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold lg:font-Size-h4 text-white">18</p>
                <p className=" font-semibold lg:font-Size-h4 text-white">Feb</p>
              </div>
            </div>

            <div className="flex p-3 flex-col  gap-5">
              <div className=" flex justify-between items-center p-2 ">
                <div className="  flex justify-between items-center gap-2 hoverBtn ">
                  <AiOutlineTags className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    Social Media
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BiCommentDetail className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      0
                    </span>
                    Comment
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BsClockHistory className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      1
                    </span>
                    Min Read
                  </p>
                </div>
              </div>

              <div className="p-3 flex items-center flex-col gap-4 md:gap-6  lg:gap-10">
                <h1 className="   line-clamp-3 md:text-3xl text-xl lg:text-4xl font-bold text-[--color-heading] hover:text-[--color-primary]">
                  The Complete Web Developer Guideline 2023
                </h1>

                <p className=" line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  pariatur quae quasi, consequatur ullam maxime consequuntur
                  repellat hic quisquam minus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eaque cupiditate delectus
                  tempore labore suscipit cumque. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nisi laudantium dolores quis
                  natus! Ad tempora nihil reiciendis asperiores porro aut,
                  perferendis, eveniet quaerat provident deleniti minus debitis
                  cum soluta. Illum?
                </p>
                <Link to={`/blogDetail`}>
                  <div className=" flex gap-2 hoverBtn">
                    <p className=" text-2xl font-bold text-[--color-primary] hoverEl">
                      More Info
                    </p>
                    <TbArrowBigRightLinesFilled className=" text-4xl text-[--color-primary] hoverEl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="2"

            className="mx-auto  shadow w-full  flex flex-col gap-4 lg:gap-7 md:gap-5   overflow-hidden bg-[--color-shape]">

            <div className="relative h-[100%] w-[100%]   flex justify-center items-center flex-col ">
              <div className="w-full h-[70%] thumnail   relative">
                <div className="hoverCustom h-full w-full overflow-hidden rounded">
                  <Link to={"/blogDetail"}>
                    <img
                      src={BlogImg1}
                      className="w-full h-full cursor-pointer rounded transition-all   hoverItem overflow-hidden "
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0    lg:top-[5%] lg:left-[27px]  rounded lg:py-2 lg:px-6 md:py-2 md:px-4 px-[2px] py-1 bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold  lg:font-Size-h4 text-white">
                  Social Media
                </p>
              </div>
              <div className="absolute z-50 bottom-[-11%]  right-[5%] md:bottom-[-6%] md:right-[5%] lg:bottom-[-7%] lg:right-[5%] w-[47px] h-[47px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50%] bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold lg:font-Size-h4 text-white">18</p>
                <p className=" font-semibold lg:font-Size-h4 text-white">Feb</p>
              </div>
            </div>

            <div className="flex p-3 flex-col  gap-5">
              <div className=" flex justify-between items-center p-2 ">
                <div className="  flex justify-between items-center gap-2 hoverBtn ">
                  <AiOutlineTags className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    Social Media
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BiCommentDetail className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      0
                    </span>
                    Comment
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BsClockHistory className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      1
                    </span>
                    Min Read
                  </p>
                </div>
              </div>


              <div className="p-3 flex items-center flex-col gap-4 md:gap-6  lg:gap-10">
                <h1 className="   line-clamp-3 md:text-3xl text-xl lg:text-4xl font-bold text-[--color-heading] hover:text-[--color-primary]">
                  The Complete Web Developer Guideline 2023
                </h1>
                <p className=" line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  pariatur quae quasi, consequatur ullam maxime consequuntur
                  repellat hic quisquam minus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eaque cupiditate delectus
                  tempore labore suscipit cumque. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nisi laudantium dolores quis
                  natus! Ad tempora nihil reiciendis asperiores porro aut,
                  perferendis, eveniet quaerat provident deleniti minus debitis
                  cum soluta. Illum?
                </p>
                <Link to={`/blogDetail`}>
                  <div className=" flex gap-2 hoverBtn">
                    <p className=" text-2xl font-bold text-[--color-primary] hoverEl">
                      More Info
                    </p>
                    <TbArrowBigRightLinesFilled className=" text-4xl text-[--color-primary] hoverEl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="3"

            className="mx-auto  shadow w-full  flex flex-col gap-4 lg:gap-7 md:gap-5   overflow-hidden bg-[--color-shape]">

            <div className="relative h-[100%] w-[100%]   flex justify-center items-center flex-col ">
              <div className="w-full h-[70%] thumnail   relative">
                <div className="hoverCustom h-full w-full overflow-hidden rounded">
                  <Link to={"/blogDetail"}>
                    <img
                      src={BlogImg1}
                      className="w-full h-full cursor-pointer rounded transition-all   hoverItem overflow-hidden "
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0    lg:top-[5%] lg:left-[27px]  rounded lg:py-2 lg:px-6 md:py-2 md:px-4 px-[2px] py-1 bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold  lg:font-Size-h4 text-white">
                  Social Media
                </p>
              </div>
              <div className="absolute z-50 bottom-[-11%]  right-[5%] md:bottom-[-6%] md:right-[5%] lg:bottom-[-7%] lg:right-[5%] w-[47px] h-[47px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50%] bg-[--color-primary] flex flex-col justify-center items-center">
                <p className=" font-semibold lg:font-Size-h4 text-white">18</p>
                <p className=" font-semibold lg:font-Size-h4 text-white">Feb</p>
              </div>
            </div>

            <div className="flex p-3 flex-col  gap-5">
              <div className=" flex justify-between items-center p-2 ">
                <div className="  flex justify-between items-center gap-2 hoverBtn ">
                  <AiOutlineTags className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    Social Media
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BiCommentDetail className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      0
                    </span>
                    Comment
                  </p>
                </div>
                <div className="  flex justify-between items-center gap-2 hoverBtn">
                  <BsClockHistory className=" text-[--color-extra01] hoverEl" />
                  <p className=" text-[--color-extra01] hoverEl">
                    <span className=" text-[--color-extra01] hoverEl me-1">
                      1
                    </span>
                    Min Read
                  </p>
                </div>
              </div>


              <div className="p-3 flex items-center flex-col gap-4 md:gap-6  lg:gap-10">
                <h1 className="   line-clamp-3 md:text-3xl text-xl lg:text-4xl font-bold text-[--color-heading] hover:text-[--color-primary]">
                  The Complete Web Developer Guideline 2023
                </h1>
                <p className=" line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  pariatur quae quasi, consequatur ullam maxime consequuntur
                  repellat hic quisquam minus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eaque cupiditate delectus
                  tempore labore suscipit cumque. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nisi laudantium dolores quis
                  natus! Ad tempora nihil reiciendis asperiores porro aut,
                  perferendis, eveniet quaerat provident deleniti minus debitis
                  cum soluta. Illum?
                </p>
                <Link to={`/blogDetail`}>
                  <div className=" flex gap-2 hoverBtn">
                    <p className=" text-2xl font-bold text-[--color-primary] hoverEl">
                      More Info
                    </p>
                    <TbArrowBigRightLinesFilled className=" text-4xl text-[--color-primary] hoverEl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Pagination
            total={10}
            defaultValue={10}
            subling={1}
            position="center"
            styles={(theme) => ({
              control: {
                "&[data-active]": {
                  backgroundImage: theme.fn.gradient({
                    from: "red",
                    to: "yellow",
                  }),
                },
              },
            })}
            withEdges
            getItemProps={(id) => ({
              component: "a",
              href: `#${id}`,
            })}
          />
        </div>
      </div>
    </>
  );
};

export default BlogStandardRight;
