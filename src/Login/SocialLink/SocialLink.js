import React from "react";
import { Link } from "react-router-dom";
import "./SocialLink.scss";

const SocialLink = ({ path, icon, alt, children, classAdded }) => (
  <Link to={path} className={`SocialLink ${classAdded && classAdded}`}>
    {icon && <img src={icon} alt={alt && alt} className={`SocialLink__icon`} />}
    {children}
  </Link>
);

export default SocialLink;
