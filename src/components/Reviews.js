import React, { useState } from "react";
import "./Reviews.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import KakaoMap from "./KakaoMap";
import plusBtn from "../images/plus_btn.png";
import { useNavigate } from "react-router-dom";

const Reviews = ({ input, randomPreview, onChangeInput, onUpsert }) => {
  const navigate = useNavigate();
  const [Favorite, setFavorite] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!randomPreview) {
      alert("먼저 랜덤 메뉴를 생성하세요.");
      return;
    }
    if (!input.trim()) {
      alert("리뷰 내용을 입력하세요.");
      return;
    }

    const reviewToUpsert = {
      ...randomPreview,
      text: input,
      isMyReview: true,
      isFavorite: Favorite,
    };
    onUpsert(reviewToUpsert);
    setFavorite(false);
    onChangeInput("");
    navigate("/notice");
  };

  return (
    <div className="wrapper">
      {randomPreview && (
        <div className="preview-container">
          <div className="ramen-box">
            <img
              src={randomPreview.ramen.imgUrl}
              alt={randomPreview.ramen.name}
              className="ramen-image"
            />
            <h3 className="ramen-name">{randomPreview.ramen.name}</h3>
          </div>
          <div className="plus-button-container">
            <img
              src={plusBtn}
              alt="plus button"
              className="plus-button-image"
            />
          </div>
          <div className="toppings-box">
            <div className="toppings-price-wrapper">
              <div className="topping-list">
                {randomPreview.toppings.map((topping) => (
                  <div key={topping.id} className="topping-item">
                    <img
                      src={topping.imgUrl}
                      alt={topping.name}
                      className="topping-image"
                    />
                    <span>{topping.name}</span>
                  </div>
                ))}
              </div>
              <p className="price">총 가격: {randomPreview.totalPrice}원</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="container">
        <div className="titleRow">
          <h2 className="title">후기 작성</h2>
          <span
            className="heartButton"
            onClick={() => setFavorite((prev) => !prev)}
          >
            {Favorite ? (
              <FaHeart className="heart filled" />
            ) : (
              <FaRegHeart className="heart outline" />
            )}
          </span>
        </div>

        <textarea
          value={input}
          onChange={(e) => {
            onChangeInput(e.target.value);
          }}
          placeholder="리뷰를 입력하세요"
          className="inputText"
          rows={4}
        />

        <button className="button"> 추가</button>
      </form>
      <KakaoMap />
    </div>
  );
};

export default Reviews;
