import React, { Component } from "react";
import API from "../../utils/API";
import { Paper } from "@material-ui/core";
import UserDropDown from "./UserDropDown";
import AssignedUser from "./AssignedUser";
import DeleteProjectButton from "./DeleteProject";
import ProjectName from "./ProjectName";
import DeleteAssignedUserButton from "./DeleteAssignedUser";
class ProjectListPage extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        {this.state.projects.map(({ name, _id, assignedUsers }) => (
          <Paper key={_id}>
            <ProjectName name={name} />
            <DeleteProjectButton id={_id} />
            <AssignedUser name={assignedUsers} />
            <DeleteAssignedUserButton id={_id} />
            <UserDropDown id={_id} />
          </Paper>
        ))}
      </div>
    );
  }
}

export default ProjectListPage;
