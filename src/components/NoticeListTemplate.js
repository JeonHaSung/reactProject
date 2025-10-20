import { Outlet } from "react-router-dom";
import "./noticeListTemplate.scss";
//$yarn add sass classnames react-icons
//$yarn add styled-components
//                           자식가져온다. 객체,오브젝트라서 {}로 가져옴
const NoticeListTemplate = ({ children }) => {
  return (
    <div className="notice-container">
      <h2 className="notice-title">후기 게시판</h2>
      <div className="notice-content">{children}</div>
    </div>
  );
};

export default NoticeListTemplate;
