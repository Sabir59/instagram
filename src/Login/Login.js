import React from "react";
import "./Login.scss";
import Logo from "../shared/Logo/Logo";
import InputFields from "./InputFields/InputFields";
import OR from ".././shared/OR/OR";
import SocialLink from "./SocialLink/SocialLink";
import facebookLogo from "../assets/faceboo_logo.png";
import { Link } from "react-router-dom";
import NoAccount from "./NoAccount/NoAccount";
import GetApp from "../shared/GetApp/GetApp";
import * as ROUTES from "../routes/routes";

const Login = ({ classAdded }) => (
  <div className={`Login ${classAdded ? classAdded : ""}`}>
    <form action="#" className="Login__form">
      <Logo classAdded="Login__logo" />
      <InputFields />
      <OR classAdded="Login__or">or</OR>
      <SocialLink path="/" icon={facebookLogo} classAdded="Login__social-link">
        Log in with Facebook
      </SocialLink>
      <Link to="/" className="Login__forgot-password">
        Forgot password?
      </Link>
    </form>
    <NoAccount option="Sign up" path={ROUTES.SIGN_UP} classAdded="Login__no-account">
      Don't have an account?
    </NoAccount>
    <GetApp classAdded="Login__get-app" />
  </div>
);

export default Login;
