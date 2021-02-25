import React from "react";
import "./OR.scss";

const OR = ({ children, classAdded }) => (
  <div className={`OR ${classAdded && classAdded}`}>
    <div className="OR__line">&nbsp;</div>
    <span className="OR__text">{children}</span>
    <div className="OR__line">&nbsp;</div>
  </div>
);

export default OR;
