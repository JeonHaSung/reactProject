import React from "react";
import ConviList from "../components/ConviList";
import ReviewsContainer from "../containers/ReviewsContainer";
import styled from "styled-components";
import KakaoMap from "../components/KakaoMap";

const Container = styled.div`
  background-color: #000000ff;
  padding: 40px 20px; /* 위아래 패딩 */
  overflow: visible;
`;

const Result = () => {
  return (
    <Container>
      <ReviewsContainer />
    </Container>
  );
};

export default Result;
