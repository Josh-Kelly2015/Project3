import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleMaker from "./pages/ScheduleMaker";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ScheduleMaker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
