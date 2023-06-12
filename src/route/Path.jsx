import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import BackToTop from "../components/BackToTop";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar.jsx";
import CourseDetail from "../pages/CourseDetail";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courseDetail" element={<CourseDetail/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        {/* <Footer /> */}
        <BackToTop />
      </BrowserRouter>
    </div>
  );
};

export default Path;
