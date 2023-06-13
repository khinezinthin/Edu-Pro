import React from "react";
import BlogStandardRight from "../components/BlogStandardComponents/BlogStandardRight";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Blog = () => {
  return (
    <section className=" flex flex-col gap-y-20">
      <section>
        <Banner title1={"Blog"} title2={"Blog Page"} />
      </section>
      <section
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        className=" flex flex-wrap justify-between pt-6 ">
        <BlogStandardRight />
      </section>
    </section>
  );
};

export default Blog;
