import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="next" onClick={nextSlide} />

      {sliderData.map((current, index) => {
        const { image, heading, desc } = current;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}>
            {index === currentSlide && (
              <div className="container">
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

// import React, { useState } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { sliderData } from "./Slider-data";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   return (
//     <>
//       <AiOutlineArrowLeft className="prev slide" />
//       <AiOutlineArrowRight className="curr slide" />
//       {sliderData.map((current, index) => {
//         const { image, heading, desc } = current;
//         return (
//           <div key={index}>
//             {current === currentSlide && (
//               <>
//                 <div className="container">
//                   <img src={image} alt="slide" />
//                   <div className="content">
//                     <h2>{heading}</h2>
//                     <h2>{desc}</h2>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Slider;
