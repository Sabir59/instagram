import React from "react";
import "./RoundImage.scss";

const RoundImage = ({ src, classAdded }) => (
  <img src={src} alt="Image" className={`RoundImage ${classAdded ? classAdded : ""}`} />
);

export default RoundImage;
