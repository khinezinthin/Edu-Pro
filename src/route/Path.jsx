import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Navbar from "../components/Navbar.jsx";
import CourseDetail from "../pages/CourseDetail";

import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import BlogDetails from "../pages/BlogDetails";
import FAQ from "../components/FAQ/FAQ";
// import BlogStandardRight from "../components/BlogStandardComponents/BlogStandardRight";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/courseDetail/:id" element={<CourseDetail />} />

          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/FAQ" element={<FAQ />} />
          {/* <Route path="/blog" element={<BlogStandardRight/>}/> */}
          <Route path="/blogDetail" element={<BlogDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Path;
