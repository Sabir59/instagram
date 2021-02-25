import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import * as ROUTES from "../../routes/routes";

const InputFields = () => (
  <div className="InputFields">
    <Input type="text" placeholder="Phone number, username, or email" />
    <Input type="password" placeholder="Password" />
    <Link to={ROUTES.HOME_PAGE}>
      <Button>Log In</Button>
    </Link>
  </div>
);

export default InputFields;
