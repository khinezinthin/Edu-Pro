import React from "react";

import Path from "./route/Path";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import FreeWorkshop from "./components/AboutUsPagesComponent/FreeWorkshop";
import WhyChooseUs from "./components/HomeComponents/WhyChooseUs";

const App = () => {
  return (
    <div className=" relative">
      {/* <Navbar /

      <Path /> */}
      <FreeWorkshop />
      <WhyChooseUs />
    </div>
  );
};

export default App;
