import React from "react";
import "./Header.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../images/mainlogo.png";

const Header = ({ onRemoveRandomPreview }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // 이동 잠시 막기
    onRemoveRandomPreview();
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="편레시피 로고" className="logo-img1" />
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleClick}
          >
            랜덤 뽑기
          </NavLink>
          <NavLink
            to="/notice"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            게시판
          </NavLink>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            마이페이지
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
