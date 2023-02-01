import React from "react"
import profilePic from "../assets/profile.jpg"
import linkedInQR from "../assets/linkedinqr.jpg"
import { useState } from "react"

const slideStyles = {
  width: "100%",
  height: "35rem",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#1a1b21",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#1a1b21",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  width: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ProfilePicture = ({ slides }) => {
  console.log(slides)
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {

    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
};

export default ProfilePicture;

// const ProfilePicture = ({slides}) => {
//         constant [currentIndex, setCurrentUser] = useState(0)
//         return (
//         <div>
//             <div
//                 style={{ backgroundImage: `url(${slides[currentIndex]}).url` }}
//             ></div>
//         </div>
//     )
// };

// export default ProfilePicture