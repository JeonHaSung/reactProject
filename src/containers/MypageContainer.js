import React, { useCallback } from "react";
import Mypage from "../components/Mypage";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, upsert, remove, toggle } from "../modules/reviews";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px; /* 위아래 패딩 */
`;

const MypageContainer = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const input = useSelector((state) => state.reviews.input);

  const onChangeInput = useCallback(
    (value) => dispatch(changeInput(value)),
    []
  );
  const onUpsert = useCallback((review) => dispatch(upsert(review)), []);
  const onToggle = useCallback((id) => dispatch(toggle(id)), []);
  const onRemove = useCallback((id) => dispatch(remove(id)), []);

  return (
    <Container>
      <Mypage
        reviews={reviews}
        input={input}
        onChangeInput={onChangeInput}
        onUpsert={onUpsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </Container>
  );
};

export default MypageContainer;
