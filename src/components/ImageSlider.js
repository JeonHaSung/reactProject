import React from "react";
import "./ImageSlider.scss";

const imageUrls = [
  "🌭",
  "🥓",
  "🌶️",
  "🥚",
  "🧀",
  "🍖",
  "🍗",
  "🍙",
  "🥫",
  "🍥",
  "🌭",
  "🧈",
  "🧅",
  "🍖",
  "🍚",
  "🥒",
];

const ImageSlider = () => {
  const duplicatedImages = [...imageUrls, ...imageUrls];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {duplicatedImages.map((emg, index) => (
          <div key={index} className="slider-item">
            <span className="emoji" data-alt={`slide-${index}`}>
              {emg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
