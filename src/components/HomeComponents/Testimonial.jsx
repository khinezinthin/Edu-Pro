import React, { useRef, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "./swiper.css";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div>
      <div className=" flex justify-center flex-col items-center gap-2 bg-[url(https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-testimonial-2.jpg)] bg-no-repeat bg-cover relative pb-14 ">
        <div className="  pt-20 flex justify-center items-center flex-col  ">
          <h2 className=" uppercase text-[16px] tracking-wide text-[#525fe1] font-bold">
            Testimonial
          </h2>
          <h2 className=" capitalize text-[40px] font-bold">
            what our student says
          </h2>
        </div>
        <div className=" flex gap-14 md:gap-3 my-20 flex-wrap  relative  ">
          <div className=" ">
            <img
              className=" w-[280px] md:w-[400px] lg:w-[90%]"
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-01-2.jpg"
              alt=""
            />
          </div>

          {/* Carousel */}

          <div className=" w-[200px] lg:w-[500px] md:w-[225px] swiper-container ">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              // effect={"fade"}
              slidesPerView={1}
              // navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper ">
              <SwiperSlide>
                <div>
                  <img
                    className=" my-7"
                    src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png"
                    alt=""
                  />
                  <p className=" text-[24px] text-gray-500">
                    " I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. I feel
                    confident that the education I received will prepare me for
                    success."
                  </p>
                  <div className=" flex items-center gap-4 mt-12">
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-01-2.png"
                      alt=""
                    />
                    <div>
                      <p className=" text-[24px] font-bold">Sophie Moore</p>
                      <p className=" text-[16px] font-bold text-[#525fe1]">
                        UI Designer
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className=" my-7"
                    src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png"
                    alt=""
                  />
                  <p className=" text-[24px] text-gray-500">
                    " The online courses at EduVibe were the perfect fit for my
                    busy schedule. I was able to work full-time while pursuing
                    my degree, thanks to the flexibility and convenience of
                    online learning. The instructors were supportive and
                    engaging."
                  </p>
                  <div className=" flex items-center gap-4 mt-12">
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-02-2.png"
                      alt=""
                    />
                    <div>
                      <p className=" text-[24px] font-bold">Lorraine Raines</p>
                      <p className=" text-[16px] font-bold text-[#525fe1]">
                        WordPress Expert
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className=" my-7"
                    src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png"
                    alt=""
                  />
                  <p className=" text-[24px] text-gray-500">
                    " Attending EduVibe School of Business was one of the best
                    decisions I've ever made. The curriculum was practical and
                    industry-focused, and I was able to apply what I learned in
                    the classroom to real-world situations during internships
                    and co-op placements."
                  </p>
                  <div className=" flex items-center gap-4 mt-12">
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-03-2.png"
                      alt=""
                    />
                    <div>
                      <p className=" text-[24px] font-bold">David Bard</p>
                      <p className=" text-[16px] font-bold text-[#525fe1]">
                        Javascript Developer
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" swiper-pagination"></div>

          <div className=" flex items-center gap-2 lg:visible md:visible invisible bg-white px-4 py-3 absolute top-1/3 -left-[12%] rounded-md animate-bounce">
            <p className="">
              <GiTrophyCup className=" text-4xl text-yellow-500" />
            </p>
            <div>
              <p className=" font-bold text-lg">50K+</p>
              <p className=" text-gray-800 ">Satisfied Learners</p>
            </div>
          </div>
        </div>
        <img
          className=" absolute top-20 -left-[3px]"
          src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-2.png"
          alt=""
        />
        <img
          className=" absolute top-20 -right-[5%]"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-01-2.png"
          alt=""
        />
        <img
          className=" absolute bottom-10 left-14"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-01-2.png"
          alt=""
        />
        <img
          className=" absolute bottom-10 -right-2"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-2.png
            "
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonial;