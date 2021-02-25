import React from "react";
import Header from "../../Header/Header";
import "./HomeContainerLayout.scss";
import Post from "../../Post/Post";
import Suggestions from "../../Suggestions/Suggestions";
import Story from "../../Story/Story";
import userPic from "../../assets/profile_pic.jpg";
import postPhoto from "../../assets/post_photo.jpg";

const HomeContainerLayout = ({ children }) => (
  <div className="HomeContainerLayout">
    <Header />
    <main className="HomeContainerLayout__container">
      <div className="HomeContainerLayout__right">
        <Story />
        <Post
          postPhoto={
            "https://images.unsplash.com/photo-1446421053596-b6801571b8bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fHJhaW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          posterPic={
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          posterName={"sabir5_s"}
          postDescription={<p>Its Raining🤩🤩🤩🤩</p>}
        />
        <Post postPhoto={postPhoto} posterPic={userPic} posterName={"sabir5_s"} />
        <Post
          postPhoto={
            "https://images.unsplash.com/photo-1610030469069-cb6620bea733?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2FyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          posterPic={
            "https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHlvdW5nJTIwZ2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          posterName={"sana_safinaz"}
        />
      </div>
      <div className="HomeContainerLayout__left">
        <Suggestions />
      </div>
    </main>
  </div>
);

export default HomeContainerLayout;
