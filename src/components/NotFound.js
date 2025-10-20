import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">페이지를 찾을 수 없습니다.</p>
      <a href="/" className="not-found-button">
        홈으로 돌아가기
      </a>
    </div>
  );
};
export default NotFound;
