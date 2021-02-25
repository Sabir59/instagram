import React from "react";
import "./Icon.scss";

const Icon = ({ src, classAdded }) => (
  <img src={src} alt="icon" className={`Icon ${classAdded ? classAdded : ""}`} />
);

export default Icon;
