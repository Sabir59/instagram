import React from "react";
import { Link } from "react-router-dom";
import "./NoAccount.scss";

const NoAccount = ({ children, option, path, classAdded }) => (
  <div className={`NoAccount ${classAdded ? classAdded : ""}`}>
    <p className="NoAccount__text">
      {children}
      {option && (
        <Link to={path} className="NoAccount__option">
          {" "}
          {option}
        </Link>
      )}
    </p>
  </div>
);
export default NoAccount;
