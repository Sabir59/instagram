import React from "react";
import "./Input.scss";

const Input = ({ type, placeholder, classAdded }) => (
  <input
    type={type}
    className={`Input ${classAdded ? classAdded : ""}`}
    placeholder={placeholder}
  />
);

export default Input;
