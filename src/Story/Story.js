import React from "react";
import "./Story.scss";
import profilePic from "../assets/profile_pic.jpg";
import RoundImage from "../shared/RoundImage/RoundImage";

const Story = ({ classAdded }) => (
  <div className={`Story ${classAdded ? classAdded : ""}`}>
    <RoundImage src={profilePic} />
  </div>
);

export default Story;
