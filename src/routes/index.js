import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import history from "./history";

import publicRoutes from "./public";

const Routes = ({ isLoggedIn, uid }) => {
  const dispatch = useDispatch();

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

const mapStateToProps = (state) => ({
  isLoggedIn: state && state.auth && state.auth.isLoggedIn,
  uid: state && state.auth && state.auth.userDate && state.auth.userData.id,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, React.memo)(Routes);
