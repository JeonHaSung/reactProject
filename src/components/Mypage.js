import "./Mypage.scss";
import MyReview from "./MyReview";
import FavoriteMenu from "./FavoriteMenu";

const Mypage = ({
  reviews,
  input,
  onChangeInput,
  onUpsert,
  onToggle,
  onRemove,
}) => {
  const favoriteReviews = reviews.filter(
    (review) => review.isFavorite === true
  );
  const myReviews = reviews.filter((review) => review.isMyReview === true);

  return (
    <div className="wrapper2">
      {favoriteReviews.length > 0 && (
        <div>
          <h2 className="notice-title">내가 찜한 목록</h2>
          <div className="reviews-container">
            {favoriteReviews.map((review) => (
              <MyReview review={review} onToggle={onToggle} />
            ))}
          </div>
        </div>
      )}
      {myReviews.length > 0 && (
        <div>
          <h2 className="notice-title">내가 쓴 후기</h2>
          <div className="notice-wrap">
            {myReviews.map((review) => (
              <FavoriteMenu
                review={review}
                input={input}
                onChangeInput={onChangeInput}
                onUpsert={onUpsert}
                onToggle={onToggle}
                onRemove={onRemove}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypage;
