import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import BackToTop from "../components/BackToTop";
import Courses from "../pages/Courses";


const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
};

export default Path;
