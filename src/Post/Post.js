import React from "react";
import PostUser from "./components/PostUser/PostUser";
import "./Post.scss";
import PostActions from "./components/PostActions/PostActions";
import PostDate from "./components/PostDate/PostDate";
import PostComment from "./components/PostComment/PostComment";
import PostReactions from "./components/PostReactions/PostReactions";
import Icon from "../shared/Icon/Icon";
import iconHeart from "../assets/heart.svg";
import iconMessage from "../assets/speech-bubble.svg";
import iconSend from "../assets/send.svg";

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const monthsInAlphabets = [
  "january",
  "feberuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const Post = ({ postPhoto, posterPic, posterName, postDescription }) => (
  <div className="Post">
    <div className="Post__header">
      <PostUser photo={posterPic} username={posterName} />
      <PostActions />
    </div>
    <div className="Post__body">
      {postDescription ? <h2 className="Post__description">{postDescription}</h2> : ""}
      {postPhoto ? <img src={postPhoto} alt="" className="Post__photo" /> : ""}
    </div>
    <div className="Post__footer">
      <PostDate>{`${monthsInAlphabets[month]} ${day} ${year}`}</PostDate>
      <div className="Post__reactions">
        <PostReactions>
          <Icon src={iconHeart} />
          <Icon src={iconMessage} />
          <Icon src={iconSend} />
        </PostReactions>
      </div>
      <div className="Post__CommentPlus">
        <PostComment />
      </div>
    </div>
  </div>
);

export default Post;
