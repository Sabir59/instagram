import React from "react";
import "./PostUser.scss";
import UserPhoto from "../../../shared/RoundImage/RoundImage";
import UserName from "../../../shared/UserName/UserName";

const PostUser = ({ photo, username }) => (
  <div className="PostUser">
    <UserPhoto src={photo} />
    <UserName username={username} />
  </div>
);

export default PostUser;
