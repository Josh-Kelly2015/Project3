import React, { Component } from "react";
import ProjectList from "../components/ProjectList";
import EmployeeList from "../components/EmployeeList";
class HomePage extends Component {
  render() {
    return (
      <div>
        <ProjectList />
        <EmployeeList />
      </div>
    );
  }
}
export default HomePage;
