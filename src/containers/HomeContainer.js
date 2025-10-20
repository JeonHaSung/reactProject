import React, { useCallback } from "react";
import Home from "../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMenu } from "../modules/reviews";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const randomPreview = useSelector((state) => state.reviews.randomPreview);
  const onGenerateRandomMenu = useCallback(
    () => dispatch(generateRandomMenu()),
    []
  );

  return (
    <Home
      randomPreview={randomPreview}
      onGenerateRandomMenu={onGenerateRandomMenu}
    />
  );
};

export default HomeContainer;
