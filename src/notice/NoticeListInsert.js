import "./noticeListInsert.scss";

//1.노티스 컨테이너에서 전딜받은 프롭스
const NoticeListInsert = ({ onChangeInput, onUpsert, input }) => {
  //2.버튼클릭시 작동
  const onSubmit = (e) => {
    e.preventDefault(); //3.새로고침 방지
    //4. 벨류가 빈값이면 return  실행
    if (!input.trim()) return alert("한줄평을 입력해주세요");

    //5.reviews(모듈에)전달할 값/ 액션으로 아래 객체를 보낸다.
    const newReview = {
      id: "", //id값은 없다.
      text: input, // 7. 입력한 문장을 text에 저장 / 아래 input 태그에서 value={input}
      isFavorite: false, //8. 좋아요로 사용될 값(토글) false로 전달 위함
      isMyReview: true, //9. 리듀소 사용될 값(토글) true로 전달 위함
      showImage: false, //10. 게시판에서 이미지 보이는 여부를 결정하는 false 전달위함
    };
    onUpsert(newReview); //11.위 객체를 가지고 상위 컨테이너에 있는 onUpsert함수실행
  };

  return (
    <div className="notice-insert">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => onChangeInput(e.target.value)} //A.함수실행 -> 컨테이너
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
