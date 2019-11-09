import React, { Component } from "react";
import NewProjectForm from "./NewProject";
import NewEmployeeForm from "./NewEmployee";
import AssignUser from "./AssignUser";
import API from "../utils/API";
import { Paper } from "@material-ui/core";

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
      <div className="container-fluid">
        <div className="container">
          <Paper>
            <div className="row">
              <div className="col">
                <NewProjectForm></NewProjectForm>
              </div>
              <div className="col">
                <NewEmployeeForm></NewEmployeeForm>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col">
          <AssignUser></AssignUser>
        </div>
      </div>
    );
  }
}
export default Home;
