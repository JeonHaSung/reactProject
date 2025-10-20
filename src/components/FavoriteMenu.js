import "./Mypage.scss";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteMenu = ({
  review,
  input,
  onChangeInput,
  onUpsert,
  onToggle,
  onRemove,
}) => {
  const { showImage, id, text, ramen, toppings, isFavorite } = review;

  const [editingId, setEditingId] = useState(null);

  const onSubmit = (e, review) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("리뷰 내용을 입력하세요.");
      return;
    }
    const reviewToUpsert = {
      ...review,
      text: input,
    };
    onUpsert(reviewToUpsert);
    setEditingId(null);
  };

  return (
    <div className="noticeitem">
      {showImage && (
        <div className="imagehart">
          <div className="hearticon" onClick={() => onToggle(id)}>
            {isFavorite ? (
              <FaHeart className="heart" color="red" size={25} />
            ) : (
              <FaRegHeart className="heart" color="gray" size={22} />
            )}
          </div>
          {ramen?.imgUrl && (
            <img src={ramen.imgUrl} alt={ramen.name} className="ramenimage" />
          )}
          <h3 className="a">+</h3>
          <div className="toppingimages">
            {toppings.map(
              (topping) =>
                topping.imgUrl && (
                  <img
                    key={topping.id}
                    src={topping.imgUrl}
                    alt={topping.name}
                    className="toppingimage"
                  />
                )
            )}
          </div>
        </div>
      )}
      <div className="review-box">
        <div className="review-main">
          <p className="review-header">
            {editingId === id ? "수정" : "작성된 후기"}
          </p>
          {editingId === id ? (
            <input
              className="review-input"
              type="text"
              value={input}
              onChange={(e) => onChangeInput(e.target.value)}
              placeholder="리뷰를 입력하세요"
            />
          ) : (
            <p className="review-paragraph">{text}</p>
          )}
        </div>

        <div className="review-actions">
          {editingId === id ? (
            <>
              <button
                type="submit"
                form="edit-form"
                onClick={(e) => onSubmit(e, review)}
              >
                저장
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  onChangeInput("");
                }}
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => setEditingId(id)}>
                수정
              </button>
              <button type="button" onClick={() => onRemove(id)}>
                삭제
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FavoriteMenu);
