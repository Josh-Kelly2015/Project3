import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScheduleMaker from "./pages/ScheduleMaker";
function App() {
  return (
    <Router>
      <Route exact path="/" component={ScheduleMaker} />
    </Router>
  );
}

export default App;
