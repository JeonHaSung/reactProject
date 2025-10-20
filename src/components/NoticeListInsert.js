import "./noticeListInsert.scss";

const NoticeListInsert = ({ onChangeInput, onUpsert, input }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return alert("한줄평을 입력해주세요");
    const newReview = {
      id: "",
      text: input,
      isFavorite: false,
      isMyReview: true,
      showImage: false,
    };
    onUpsert(newReview);
  };

  return (
    <div className="notice-insert">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => onChangeInput(e.target.value)}
          className="input-design"
          placeholder="최고의 조합이였나요?"
        />
        <button type="submit">후기 등록</button>
      </form>

      <div className="guidtext">
        <p className="red">❤️좋아요 / 🍜조합</p>
        <p>한줄평</p>
        <div className="dummy"></div>
      </div>
    </div>
  );
};

export default NoticeListInsert;
