// @flow
import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import routes from "./route.config";
import { Loader } from "../components/Loader";
const authed = () => localStorage.hasOwnProperty("userToken");

const authPath = "/login";
const JumeirahRoutes = () => {
  return (
    <Router>
      <Suspense fallback={Loader}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              render={(props) => {
                if (route.path === authPath || route.default) {
                  return <route.component {...props} />;
                } else {
                  return <route.component {...props} />;
                }
              }}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default JumeirahRoutes;
