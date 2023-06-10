import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import BackToTop from '../components/BackToTop'

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
        <BackToTop/>
      </BrowserRouter>
    </div>
  );
};

export default Path;
