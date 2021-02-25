import React from "react";
import "./ContinueWith.scss";
import Logo from "../shared/Logo/Logo";
import RoundUserPhoto from "../shared/RoundImage/RoundImage";
import AnchorLink from "../shared/Link/Link";
import * as ROUTES from "../routes/routes";
import photo from "../assets/profile_pic.jpg";

const ContinueWith = ({ classAdded }) => (
  <div className={`ContinueWith ${classAdded ? classAdded : ""}`}>
    <Logo />
    <RoundUserPhoto src={photo} classAdded="ContinueWith__photo" />
    <AnchorLink path={ROUTES.HOME_PAGE} classAdded="ContinueWith__btnLink">
      Continue as Sabir5_s
    </AnchorLink>
    <div className="ContinueWith__not">
      <span>Not Sabir5_s?</span>
      <AnchorLink path={ROUTES.LOGIN_PAGE} classAdded="ContinueWith__link">
        Swith accounts
      </AnchorLink>
    </div>
  </div>
);

export default ContinueWith;
