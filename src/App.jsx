import React from "react";
// import Path from "./route/Path";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
