import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";

const Testimonial = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className=" bg-[url(https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-testimonial-2.jpg)] ">
      <div className=" flex justify-center flex-col items-center gap-2">
        <h2 className=" uppercase">Testimonial</h2>
        <h2 className=" capitalize">what our student says</h2>
      </div>
      <div className=" flex gap-32 mt-20 ">
        <div className=" relative">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-01-2.jpg"
            alt=""
          />
          <div className=" bg-slate-300 px-5 py-3 absolute top-28 rounded-md animate-bounce">
            <p className=" font-bold">50K+</p>
            <p className=" text-gray-800">Satisfied Learners</p>
          </div>
        </div>
        <div className=" bg-gray-200 px-10">
          <Carousel
            maw={320}
            mx="auto"
            withIndicators
            height={300}
            // withControls={false}
            loop
            slideGap="md"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            align="center"
            style={{
              indicator: {
                width: rem(20),
                height: rem(100),
                
              },
            }}>
            <Carousel.Slide size="100%">
              <h1>1</h1>
              <p>
                “ I had an amazing experience at EduVibe. The instructors were
                knowledgeable and passionate, and the coursework was challenging
                and relevant to my future career. I feel confident that the
                education I received will prepare me for success."
              </p>
            </Carousel.Slide>
            <Carousel.Slide size="100%">
              <h2>2</h2>
              <p>
                “ I had an amazing experience at EduVibe. The instructors were
                knowledgeable and passionate, and the coursework was challenging
                and relevant to my future career. I feel confident that the
                education I received will prepare me for success."
              </p>
            </Carousel.Slide>
            <Carousel.Slide size="100%">
              <h2>3</h2>
              <p>
                “ I had an amazing experience at EduVibe. The instructors were
                knowledgeable and passionate, and the coursework was challenging
                and relevant to my future career. I feel confident that the
                education I received will prepare me for success."
              </p>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
