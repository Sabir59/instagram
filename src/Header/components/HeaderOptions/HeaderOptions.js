import React from "react";
import "./HeaderOptions.scss";

const HeaderOptions = ({ children, classAdded }) => (
  <div className={`HeaderOptions ${classAdded ? classAdded : ""}`}>{children}</div>
);

export default HeaderOptions;
