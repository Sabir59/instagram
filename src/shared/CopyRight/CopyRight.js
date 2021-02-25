import React from "react";
import "./CopyRight.scss";

const CopyRight = ({ classAdded }) => (
  <p className={`CopyRight ${classAdded && classAdded}`}>
    &copy; 2021 Instagram from Facebook
  </p>
);

export default CopyRight;
