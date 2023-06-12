import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar.jsx";
import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Path;
