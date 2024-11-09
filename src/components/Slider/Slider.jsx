import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <AiOutlineArrowLeft className="prev slide" />
      <AiOutlineArrowRight className="curr slide" />
      {sliderData.map((current, index) => {
        const { image, heading, desc } = current;
        return (
          <div key={index}>
            {current === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <h2>{desc}</h2>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Slider;
