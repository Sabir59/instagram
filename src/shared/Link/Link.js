import React from "react";
import "./Link.scss";
import { Link } from "react-router-dom";

const AnchorLink = ({ path, children, classAdded }) => (
  <Link to={path ? path : "#"} className={`Link ${classAdded ? classAdded : ""}`}>
    {children}
  </Link>
);

export default AnchorLink;
