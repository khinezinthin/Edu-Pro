import React from "react";
import "./Feedback.css";
import { FaStar } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

SwiperCore.use([Navigation, Pagination]);

const Feedback = () => {
  return (
    <div className="bg-image flex justify-center">
      <div className="w-[90%] flex flex-col gap-16 justify-center my-20">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="flex flex-col justify-center gap-1"
        >
          <p className="tex-lg font-medium text-blue-600 tracking-widest text-center">
            TESTIMONIALS
          </p>
          <h1 className=" text-4xl text-gray-700 font-bold text-center leading-[50px]">
            Our Lovely Students Feedback
          </h1>
        </div>
        <div className=" flex ">
          <Swiper
            pagination={{ clickable: true }}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className=" pb-28 xl:ml-12 lg:ml-10 md:ml-8 sm:ml-14"
          >
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Stive Marlone
                    </p>
                    <p className="text-blue-500">Web Developer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-04-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      James Carlson
                    </p>
                    <p className="text-blue-500">UI/UX Designer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-01-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Nancy Phipps
                    </p>
                    <p className="text-blue-500">Digital Marketer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-02-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Adam Smith
                    </p>
                    <p className="text-blue-500">Web Developer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Jhaniel Devora
                    </p>
                    <p className="text-blue-500">SEO Specialist</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] max-sm:w-full bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-04-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Walter Wilford
                    </p>
                    <p className="text-blue-500">JavaScript Engineer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[90%] bg-white flex flex-col gap-6 rounded p-8 relative">
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-01-2.png"
                      alt="Client Image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray-700">
                      Mark Ronsan
                    </p>
                    <p className="text-blue-500">Digital Marketer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">
                    “ I had an amazing experience at EduVibe. The instructors
                    were knowledgeable and passionate, and the coursework was
                    challenging and relevant to my future career. "
                  </p>
                </div>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                  <FaStar className="text-orange-400 text-xl" />
                </div>
                <div className="triangle-down absolute bottom-[-30px]"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
