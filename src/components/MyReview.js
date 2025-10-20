import React from "react";
import "./Mypage.scss";
import plusBtn from "../images/plus_btn.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MyReview = ({ review, onToggle }) => {
  const { id, ramen, toppings, isFavorite } = review;

  return (
    <div key={id} className="review-card">
      <div className="ramen-box">
        <img src={ramen.imgUrl} alt={ramen.name} className="ramen-image2" />
        <h3 className="ramen-name">{ramen.name}</h3>
      </div>
      <div className="plus-button-container">
        <img src={plusBtn} alt="plus button" className="plus-button-image" />
      </div>
      <div className="toppings-box">
        <div className="toppings-price-wrapper">
          <div className="topping-list">
            {toppings.map((topping) => (
              <div key={topping.id} className="topping-item">
                <img
                  src={topping.imgUrl}
                  alt={topping.name}
                  className="topping-image2"
                />
                <span>{topping.name}</span>
              </div>
            ))}
          </div>
          <div className="Button-wrap">
            <span className="heartButton" onClick={() => onToggle(id)}>
              {isFavorite ? (
                <FaHeart className="heart filled" />
              ) : (
                <FaRegHeart className="heart outline" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyReview);
