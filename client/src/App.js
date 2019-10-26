import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleMaker from "./pages/ScheduleMaker";
import MergeCodePage from "./pages/MergeCodePage";
import "./index.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MergeCodePage} />
          <Route exact path="/schedule" component={ScheduleMaker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
