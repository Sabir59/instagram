import React from "react";
import "./GetApp.scss";
import appleBadge from "../../assets/apple_store_badge.png";
import playstoreBadge from "../../assets/google_play_badge.png";

const GetApp = ({ classAdded }) => (
  <div className={`get-app ${classAdded ? classAdded : ""}`}>
    <span className="get-app__text">Get the App.</span>
    <div className="get-app__badges">
      <img src={appleBadge} alt="" className="get-app__badge" />
      <img src={playstoreBadge} alt="" className="get-app__badge" />
    </div>
  </div>
);

export default GetApp;
