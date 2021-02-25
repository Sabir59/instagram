import React from "react";
import "./Logo.scss";
import instaLogo from "../../assets/logo.png";

const Logo = ({ classAdded }) => (
  <div className={`Logo ${classAdded ? classAdded : ""}`}>
    <img src={instaLogo} alt="Logo" className="Logo__photo" />
  </div>
);

export default Logo;
