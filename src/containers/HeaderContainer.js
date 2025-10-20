import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeRandomPreview } from "../modules/reviews";
import Header from "../components/Header";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const onRemoveRandomPreview = useCallback(
    () => dispatch(removeRandomPreview()),
    []
  );
  return <Header onRemoveRandomPreview={onRemoveRandomPreview} />;
};

export default HeaderContainer;
