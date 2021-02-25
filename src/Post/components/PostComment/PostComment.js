import React from "react";
import "./PostComment.scss";
import Input from "../../../shared/Input/Input";

const PostComment = () => (
  <div className="PostComment">
    {/* <Option icon={meme} /> */}
    <p>&#128512;</p>
    <Input placeholder="Add comment" classAdded="PostComment__input" />
    <span className="PostComment__post">Post</span>
  </div>
);

export default PostComment;
