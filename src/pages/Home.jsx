import React from "react";
import Learning from "../components/HomeComponents/Learning";
import AboutUs from "../components/HomeComponents/AboutUs";
import CourseCategories from "../components/HomeComponents/CourseCategories";
import PopularCourse from "../components/HomeComponents/PopularCourse";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import BlogsAndNews from "../components/HomeComponents/BlogAndNew";
import Skilled from "../components/AboutUsPagesComponent/Skilled";
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
      {/* Testimonial */}
      {/* TeamMember */}
      {/* WhyChooseUs */}
      <section className=" overflow-hidden">
        <NewsLetter />
      </section>
      <section className=" overflow-hidden">
        <BlogsAndNews />
      </section>
      <section className=" overflow-hidden">
        <Skilled />
      </section>
    </>
  );
};

export default Home;
