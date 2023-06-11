import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import BackToTop from "../components/BackToTop";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Navbar from "../components/Navbar.jsx";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
};

export default Path;
