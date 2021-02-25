import React from "react";
import AnchorLink from "../../../shared/Link/Link";
import "./SuggestionsLinkList.scss";

const SuggestionsLinkList = ({ children }) => (
  <div className="SuggestionsLinkList">
    <AnchorLink>{children}</AnchorLink>
  </div>
);

export default SuggestionsLinkList;
