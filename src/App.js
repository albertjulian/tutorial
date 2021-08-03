import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes";
import { userLoginRequest, userLoginSuccess } from "./actions/user";

const App = () => {
  const dispatch = useDispatch();
  const user =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      dispatch(userLoginSuccess(user));
    } else {
      dispatch(
        userLoginRequest({ name: "Albert", email: "albertganteng@gmail.com" })
      );
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;
