import React from "react";
import './app.css'
import Path from "./route/Path";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import FreeWorkshop from "./components/AboutUsPagesComponent/FreeWorkshop";
import WhyChooseUs from "./components/HomeComponents/WhyChooseUs";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <div className=" relative">
      {/* <Navbar /

      <Path /> */}
      {/* <FreeWorkshop />
      <WhyChooseUs /> */}
      <BlogDetails/>
    </div>
  );
};

export default App;
