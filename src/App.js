import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <hr></hr>
        <Outlet />
        <hr></hr>
        <Footer />
      </div>
    </>
  );
};

export default App;
