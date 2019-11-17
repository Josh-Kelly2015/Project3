import React, { Component } from "react";
import API from "../../utils/API";
import { Paper } from "@material-ui/core";
import UserDropDown from "./UserDropDown";
import AssignedUser from "./AssignedUser";
import DeleteProjectButton from "./DeleteProject";
import ProjectName from "./ProjectName";
import DeleteAssignedUserButton from "./DeleteAssignedUser";
import AssignUserButton from "./AssignUserButton";
class ProjectListPage extends Component {
  state = {
    projects: [],
    employees: []
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
      <div className="container">
        {this.state.projects.map(project => (
          <Paper key={project._id}>
            <ProjectName name={project.projectName} />
            <DeleteProjectButton id={project._id} />
            <AssignedUser name={project.employees} />
            <DeleteAssignedUserButton id={project._id} />
            <UserDropDown allUsers={this.state.employees} />
            <AssignUserButton
              assignedUsers={project.employees}
              id={project._id}
            />
          </Paper>
        ))}
      </div>
    );
  }
}

export default ProjectListPage;
