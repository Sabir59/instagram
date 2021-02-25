import React from "react";
import "./Header.scss";
import Icon from "../shared/Icon/Icon";
import Input from "../shared/Input/Input";
import Logo from "../shared/Logo/Logo";
import HeaderOptions from "./components/HeaderOptions/HeaderOptions";
import iconHome from "../assets/house-black-silhouette-without-door.svg";
import iconSend from "../assets/send.svg";
import iconExplore from "../assets/direction.svg";
import iconHeart from "../assets/heart.svg";

const Header = () => (
  <header className="Header">
    <div className="Header__content">
      <Logo />
      <Input placeholder="Search" classAdded="Header__search" />
      <div className="Header__options"></div>
      <HeaderOptions>
        <Icon src={iconHome} />
        <Icon src={iconSend} />
        <Icon src={iconExplore} />
        <Icon src={iconHeart} />
      </HeaderOptions>
    </div>
  </header>
);

export default Header;
