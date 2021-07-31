import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router history={history}>
          <Switch>
            {/* <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} /> */}
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
