import React from "react";
import "./Home.css";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div container style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Slider />
    </div>
  );
};

export default Home;
