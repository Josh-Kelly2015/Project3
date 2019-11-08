import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectList from "./components/ProjectList";
function App() {
  return (
    <Router>
      <Route exact path="/" component={ProjectList} />
    </Router>
  );
}

export default App;
