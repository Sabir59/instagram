import React from "react";
import "./User.scss";
import RoundImage from "../../../shared/RoundImage/RoundImage";
import UserName from "../../../shared/UserName/UserName";
import FullName from "../../../shared/FullName/FullName";
import AnchorLink from "../../../shared/Link/Link";

const User = ({ photo, userName, fullName, action }) => (
  <div className="User">
    {photo}
    <div className="User__names">
      <UserName username={userName} />
      <FullName name={fullName} />
    </div>
    <AnchorLink classAdded="User__link">{action}</AnchorLink>
  </div>
);

export default User;
