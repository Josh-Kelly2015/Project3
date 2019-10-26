import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleMaker from "./pages/ScheduleMaker";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ScheduleMaker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
