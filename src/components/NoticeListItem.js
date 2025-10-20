import React from "react";
import "./noticeListItem.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const NoticeListItem = ({ notice, style, onToggle }) => {
  const { id, ramen, toppings, text, isFavorite, showImage } = notice;

  return (
    <div className="noticeitem" style={style}>
      {showImage && (
        <div className="imagehart">
          <div className="hearticon" onClick={() => onToggle(id)}>
            {isFavorite ? (
              <FaHeart color="red" size={25} />
            ) : (
              <FaRegHeart color="gray" size={22} />
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

      <div className="review-content">
        <p className="review-title">작성된 후기</p>
        <p className="review-text">{text}</p>
      </div>
    </div>
  );
};

export default React.memo(NoticeListItem);
