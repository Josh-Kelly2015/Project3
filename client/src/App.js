import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Home";
import Login from "./components/UserAuth/Login";
// import Profile from "./components/UserAuth/Profile";
import Register from "./components/UserAuth/Register";
function App() {
  return (
    <Router>
      <Route exact path="/main" component={Main} />
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/profile" component={Profile} /> */}
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
