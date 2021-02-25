import React from "react";
import "./Navigation.scss";
import NavigationList from "./components/NavigationList/NavigationList";
import AnchorLink from "../shared/Link/Link";
import CopyRight from "../shared/CopyRight/CopyRight";

const links1 = [
  "about",
  "jobs",
  "help",
  "API",
  "privacy",
  "terms",
  "top account",
  "hashtags",
  "location",
];
const links2 = [
  "beauty",
  "dance & performance",
  "fitness",
  "food & drink",
  "home & garden",
  "music",
  "visual & arts",
];

const Navigation = () => (
  <nav className="Navigation">
    <NavigationList>
      <NavigationList>
        {links1.map((link, i) => (
          <AnchorLink key={i}>{link}</AnchorLink>
        ))}
      </NavigationList>
      <NavigationList>
        {links2.map((link, i) => (
          <AnchorLink key={i}>{link}</AnchorLink>
        ))}
      </NavigationList>
      <CopyRight classAdded="FooterNavigation__copy-right" />
    </NavigationList>
  </nav>
);

export default Navigation;
