import React from "react";
import "./MobileMockup.scss";
import photo from "../../assets/instagram_login.jpg.png";

const MobileMockup = () => (
  <div className="MobileMockup">
    <img src={photo} alt="" className="MobileMockup__photo" />
  </div>
);

export default MobileMockup;
