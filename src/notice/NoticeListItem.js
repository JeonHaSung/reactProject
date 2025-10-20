import React from "react";
import "./noticeListItem.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

//NoticeList에서 props 로 받은 인자
const NoticeListItem = ({ notice, style, onToggle }) => {
  //비구조 할당문   notice를 객체 분해 -> id = 1 이런식으로
  const { id, ramen, toppings, text, isFavorite, showImage } = notice;

  return (
    //style={style} 스타일을 전달해서 무한스크롤 깨짐 방지
    <div className="noticeitem" style={style}>
      {/* showImage가 true일 때만 이미지/하트 영역 렌더링 */}
      {showImage && (
        <div className="imagehart">
          {/* 클릭시 onToggle(id) 함수 실행 -> 컨테이너  */}
          <div className="hearticon" onClick={() => onToggle(id)}>
            {/* 삼항연산자 isFavorite이 참이면 ?FaHeart 거짓:FaRegHeart  */}
            {isFavorite ? (
              <FaHeart color="red" size={25} />
            ) : (
              <FaRegHeart color="gray" size={22} />
            )}
          </div>
          {/* 랜덤 라면이미지 */}
          {/* ramen 객체가 존재한다면(undefined나 null이 아니라면) .url 속성을 읽고*/}
          {/* ramen?.imgUrl 참이면 img를 렌더링 */}
          {ramen?.imgUrl && (
            <img src={ramen.imgUrl} alt={ramen.name} className="ramenimage" />
          )}

          <h3 className="a">+</h3>

          {/* 랜덤 토핑이미지 1~3개 */}
          <div className="toppingimages">
            {toppings.map(
              // 토핑 순환하여 꺼냄 (랜덤함수에서 만약 토핑이 2개를 반환하면 여기서 두개의 이미지를 렌더링한다)
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

      {/*후기 내용 (이미지 여부와 관계없이 항상 렌더) */}
      <div className="review-content">
        <p className="review-title">작성된 후기</p>
        <p className="review-text">{text}</p>
      </div>
    </div>
  );
};

export default React.memo(NoticeListItem);
