import React, { Component } from "react";
import NewProjectForm from "./NewProject";
import NewEmployeeForm from "./NewEmployee";
import AssignUser from "./AssignUser";
import API from "../utils/API";

class Home extends Component {
  state = {
    projectName: "",
    projects: [],
    employees: [],
    employeeName: "",
    email: "",
    rank: "",
    selectedOption: {}
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <NewProjectForm></NewProjectForm>
        <NewEmployeeForm></NewEmployeeForm>
        <AssignUser></AssignUser>
      </>
    );
  }
}
export default Home;
