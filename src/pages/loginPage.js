import React from "react";
import LayoutMain from "../layouts/LayoutMain/LayoutMain";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";
import BlueBanner from "../shared/BlueBanner/BlueBanner";

export default function loginPage() {
  return (
    <div className="loginPage">
      <LayoutMain header={<BlueBanner />} main={<Login />} footer={<Navigation />} />
    </div>
  );
}
