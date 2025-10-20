import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HeaderContainer from "./containers/HeaderContainer";
import NotFound from "./components/NotFound";
const HomeContainer = lazy(() => import("./containers/HomeContainer"));
const ReviewsContainer = lazy(() => import("./containers/ReviewsContainer"));
const MypageContainer = lazy(() => import("./containers/MypageContainer"));
const NoticeContainer = lazy(() => import("./containers/NoticeContainer"));

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        <Route element={<HeaderContainer />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/review" element={<ReviewsContainer />} />
          <Route path="/mypage" element={<MypageContainer />} />
          <Route path="/notice" element={<NoticeContainer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
