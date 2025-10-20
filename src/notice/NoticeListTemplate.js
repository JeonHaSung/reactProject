import "./noticeListTemplate.scss";
//$yarn add sass classnames react-icons
//$yarn add styled-components
//                           자식가져온다. 객체,오브젝트라서 {}로 가져옴
const NoticeListTemplate = ({ children }) => {
  return (
    // 레이아웃
    <div className="notice-container">
      <h2 className="notice-title">한줄"펑❤️" 게시판</h2>
      {/* div로 레이아웃을 구성 {children}은 자식인  */}
      <div className="notice-content">{children}</div>
    </div>
  );
};

export default NoticeListTemplate;
