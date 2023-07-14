import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <hr></hr>
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default App;
