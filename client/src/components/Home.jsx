import React, { Component } from "react";
import NewProjectForm from "./NewProject";
import NewEmployeeForm from "./NewEmployee";
import AssignUser from "./AssignUser";
import API from "../utils/API";
import Header from "./Header";
class Home extends Component {
  state = {
    projectName: "",
    projects: [],
    employees: [],
    employeeName: "",
    email: "",
    rank: "",
    selectedOption: ""
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
    // console.log(this.state.projects);
  }
  handleNewProject = event => {
    this.setState({ projectName: event.target.value });
    console.log(this.state.projectName);
  };
  render() {
    return (
      <div className="container-fluid ">
        <Header className="mb-5" />
        <div className="container mt-5">
          <div className="row">
            {/* ----------------- New Project Form ------------------- */}
            <div className="col">
              <NewProjectForm
                projectName={this.state.projectName}
                onChange={this.handleNewProject}
              />
            </div>
            {/* ----------------- New Employee Form ------------------- */}
            <div className="col">
              <NewEmployeeForm
                employeeName={this.state.employeeName}
                email={this.state.email}
                rank={this.state.rank}
              />
            </div>
          </div>
        </div>
        {/* ----------------- Assign User ------------------- */}
        <div className="col">
          <AssignUser
            projects={this.state.projects}
            employees={this.state.employees}
            selectedOption={this.state.selectedOption}
            projectName={this.state.projectName}
          />
        </div>
      </div>
    );
  }
}
export default Home;
