import React from "react";
import BlogStandardRight from "../components/BlogStandardComponents/BlogStandardRight";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import BlogDetailRight from "../components/BlogStandardComponents/BlogDetailRight";
import Footer from "../components/Footer";
AOS.init();
const Blog = () => {
  return (
    <div className=" flex flex-col ">
      <section>
        <Navbar value={1} />
      </section>
      <section className=" flex flex-col lg:gap-20 md:gap-10 gap-5">
        <section>
          <Banner title1={"Blog"} title2={"Blog Page"} />
        </section>
        <section
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="containerPro flex flex-wrap gap-7 flex-col lg:flex-row justify-center pt-6 ">
          <section className=" md:w-full w-full lg:w-[50%] ">
            <BlogStandardRight />
          </section>
          <section className="md:w-full w-full lg:w-[25%] flex justify-start flex-col">
            <BlogDetailRight />
          </section>
        </section>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Blog;
