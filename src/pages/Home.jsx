import React from "react";
import Learning from "../components/HomeComponents/Learning";
import AboutUs from "../components/HomeComponents/AboutUs";
import CourseCategories from "../components/HomeComponents/CourseCategories";
import PopularCourse from "../components/HomeComponents/PopularCourse";
import Testimonial from "../components/HomeComponents/Testimonial";
import TeamMember from "../components/HomeComponents/TeamMember";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import BlogsAndNews from "../components/HomeComponents/BlogAndNew";

const Home = () => {
  return (
    <>
      <section className="">
        <Learning />
      </section>

      <section className=" overflow-hidden">
        <AboutUs />
      </section>


      <section className=" overflow-hidden">
        <CourseCategories />
      </section>

      <section className=" overflow-hidden">
        <PopularCourse />
      </section>

      <section className=" overflow-hidden">
        <Testimonial />
      </section>

      <section className=" overflow-hidden">
        <TeamMember />
      </section>

      <section className=" overflow-hidden">
        <WhyChooseUs />
      </section>

      <section className=" overflow-hidden">
        <NewsLetter />
      </section>

      <section className=" overflow-hidden">
        <BlogsAndNews/>
      </section>

    </>
  );
};


export default Home;
