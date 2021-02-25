import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import * as ROUTES from "./routes/routes";
const HomePage = lazy(() => import("./pages/homePage"));
const VisitPage = lazy(() => import("./pages/visitPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const SignUpPage = lazy(() => import("./pages/signUpPage"));
const App = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.VISIT_PAGE} component={VisitPage} exact />
        <Route path={ROUTES.HOME_PAGE} component={HomePage} />
        <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
