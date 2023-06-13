import React, { useRef, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "./swiper.css";
import "./testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import "swiper/swiper.min.css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div>
      <div className=" flex justify-center flex-col gap-2 bg-[url(https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-testimonial-2.jpg)] bg-no-repeat bg-cover relative pb-14 ">
        <div
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
        className="  pt-20 flex justify-center items-center flex-col  ">
          <h2 className=" uppercase text-[16px] tracking-wide text-[#525fe1] font-bold">
            Testimonial
          </h2>
          <h2 className=" capitalize text-[40px] text-center font-bold">
            what our student says
          </h2>
        </div>
        <div className=" flex my-20 ms-10 items-center flex-wrap carouselTop relative ">
          <div className=" relative">
            <img
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="true"
              className=" w-[280px] md:w-[400px] lg:w-[90%]"
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-01-2.jpg"
              alt=""
            />
          </div>
          <div className=" flex items-center gap-2 lg:visible invisible bg-white px-4 py-3 absolute top-1/3 left-[7%] rounded-md animate-bounce">
            <p className="">
              <GiTrophyCup className=" text-4xl text-yellow-500" />
            </p>
            <div>
              <p className=" font-bold text-lg">50K+</p>
              <p className=" text-gray-800 ">Satisfied Learners</p>
            </div>
          </div>

          {/* Carousel */}

          <div className="  w-[350px] md:w-[600px] lg:w-[380px] md:ms-28 sm:ms-20 swiper-container carouselBottom ">
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
              className=" mySwiper pb-24">
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
