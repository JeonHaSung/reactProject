import logo from "../logo.svg";
import "../App.css";
import NoticeList from "../components/NoticeList";
import NoticeListInsert from "../components/NoticeListInsert";
import NoticeListTemplate from "../components/NoticeListTemplate";
import "../components/containerNotice.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, toggle, upsert } from "../modules/reviews";
import { useCallback } from "react";

function NoticeContainer() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const input = useSelector((state) => state.reviews.input);

  const onChangeInput = useCallback(
    (value) => dispatch(changeInput(value)),
    []
  );
  const onUpsert = useCallback((review) => dispatch(upsert(review)), []);
  const onToggle = useCallback((id) => dispatch(toggle(id)), []);

  return (
    <div className="main">
      <NoticeListTemplate>
        <NoticeListInsert
          onChangeInput={onChangeInput}
          onUpsert={onUpsert}
          input={input}
        />
        <NoticeList reviews={reviews} onToggle={onToggle} />
      </NoticeListTemplate>
    </div>
  );
}

export default NoticeContainer;
