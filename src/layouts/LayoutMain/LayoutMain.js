import React from "react";
import "./LayoutMain.scss";

const LayoutMain = ({ header, main, footer }) => (
  <div className="LayoutMain">
    {header ? <header className="LayoutMain__header">{header}</header> : ""}
    {main ? <main className="LayoutMain__body">{main}</main> : ""}
    {footer ? <footer className="LayoutMain__footer">{footer}</footer> : ""}
  </div>
);

export default LayoutMain;
