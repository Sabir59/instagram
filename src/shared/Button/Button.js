import React from "react";
import "./Button.scss";

const Button = ({ type, classAdded, children }) => (
  <button type={type} className={`Button ${classAdded ? classAdded : ""}`}>
    {children}
  </button>
);
export default Button;
