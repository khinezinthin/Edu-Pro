import React from "react";
import BlogStandardRight from "../components/BlogStandardComponents/BlogStandardRight";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetailRight from "../components/BlogStandardComponents/BlogDetailRight";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
AOS.init();
const Blog = () => {
  return (
    <section>
      <div className=" ">
        <Navbar value={7} />
      </div>

      <section>
        <Banner title1={"Blog"} title2={"Blog Page"} />
      </section>
      <section className="  flex flex-col gap-y-20 justify-center items-center">
        <section
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className=" container flex flex-wrap justify-center items-center pt-6 ">
          <section className=" lg:w-[70%] w-full md:w-full">
            <BlogStandardRight />
          </section>
          <section className=" lg:w-[30%] w-full md:w-full">
            <BlogDetailRight />
          </section>
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};

export default Blog;
