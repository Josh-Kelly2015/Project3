import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Home";
import Login from "./components/Login";
// import Profile from "./components/UserAuth/Profile";
import Register from "./components/Register";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
