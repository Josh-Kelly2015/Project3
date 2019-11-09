import React, { Component } from "react";
import NewProject from "./NewProject";
import NewEmployee from "./NewEmployee";
import AssignUser from "./AssignUser";
import DeleteAssignedUser from "./DeleteAssignedUser";
import DeleteProject from "./DeleteProject";
import DeleteEmployee from "./DeleteEmployee";
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
        <div className="container">
          <NewProject></NewProject>
        </div>
        <div className="container">
          <DeleteProject></DeleteProject>
        </div>
        <div className="container">
          <NewEmployee></NewEmployee>
        </div>

        <div className="container">
          <AssignUser></AssignUser>
        </div>
      </>
    );
  }
}
export default Home;
