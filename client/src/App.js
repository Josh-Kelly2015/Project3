import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleMaker from "./pages/ScheduleMaker";
import "./index.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ScheduleMaker} />
          <Route exact path="/employees" component={ScheduleMaker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
