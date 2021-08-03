import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import history from "./history";

import publicRoutes from "./public";

const Routes = () => {
  const userSelector = useSelector((state) => state.user);
  console.log(userSelector);

  return (
    <Router history={history}>
      <Switch>
        {publicRoutes.map((pubRoute) => (
          <Route
            key={pubRoute.key}
            path={pubRoute.path}
            component={pubRoute.component}
            exact={false}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
