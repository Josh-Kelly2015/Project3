import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import NewProjectForm from "./components/NewProjectForm";
import NewUserForm from "./components/NewUserForm";
// import Header from "./components/Header";
// import WrongWay from "./components/WrongWay";
import ProjectListPage from "./components/ProjectListPage/ProjectListPage";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/projectlist" component={ProjectListPage} />
        <Route exact path="/createproject" component={NewProjectForm} />
        <Route exact path="/createuser" component={NewUserForm} />
        {/* <Route path="*" component={WrongWay} /> */}
      </Router>
    </>
  );
}

export default App;
