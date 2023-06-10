import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Path;
