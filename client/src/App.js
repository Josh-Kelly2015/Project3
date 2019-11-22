import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import NewProjectForm from "./components/NewProjectForm";
import NavBar from "./components/NavBar";
import ProjectListPage from "./components/ProjectListPage/ProjectListPage";
// import WrongWay from "./components/WrongWay";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/projectlist" component={ProjectListPage} />
        <Route exact path="/createproject" component={NewProjectForm} />
        {/* <Route path="*" component={WrongWay} /> */}
      </Router>
    </>
  );
}

export default App
