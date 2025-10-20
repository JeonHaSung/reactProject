import { Link, useNavigate } from "react-router-dom";
import "./GachaSection.scss";
import plusBtn from "../images/plus_btn.png";

const GachaSection = ({ randomPreview, onGenerateRandomMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="gacha-container">
      <div className="test">
        {!randomPreview && (
          <button onClick={onGenerateRandomMenu} className="start-btn">
            랜덤뽑기 시작
          </button>
        )}
      </div>

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
      {randomPreview && (
        <div className="button22">
          <div className="button33">
            <button
              className="mv"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </button>
            <button
              className="mv1"
              onClick={() => {
                navigate("/review");
              }}
            >
              후기 및 근처 편의점 찾기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GachaSection;
