import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, upsert } from "../modules/reviews";
import Reviews from "../components/Reviews";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px; /* 위아래 패딩 */
`;

const ReviewsContainer = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.reviews.input);
  const randomPreview = useSelector((state) => state.reviews.randomPreview);

  const onChangeInput = useCallback(
    (value) => dispatch(changeInput(value)),
    []
  );
  const onUpsert = useCallback((review) => dispatch(upsert(review)), []);

  return (
    <Container>
      <Reviews
        input={input}
        randomPreview={randomPreview}
        onChangeInput={onChangeInput}
        onUpsert={onUpsert}
      />
    </Container>
  );
};

export default ReviewsContainer;
