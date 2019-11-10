import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Navbar>
        </div>
      </Router>
    );
  }
}
export default App;
