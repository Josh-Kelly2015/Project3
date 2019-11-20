import React, { Component } from "react";
import API from "../../utils/API";
import { Paper } from "@material-ui/core";
import UserDropDown from "./UserDropDown";
import AssignedUser from "./AssignedUser";
import DeleteProjectButton from "./DeleteProject";
import ProjectName from "./ProjectName";
class ProjectListPage extends Component {
  state = {
    projects: []
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  }
  deleteProject = id => {
    API.deleteProject(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  getProject = id => {
    API.getProject(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        {this.state.projects.map(({ _id, name, assignedUsers }) => (
          <Paper key={_id}>
            <ProjectName name={name} />
            <DeleteProjectButton
              deleteProject={() => this.deleteProject(_id)}
            />

            {/* How the fuck do i update the project, with the user ?!! */}

            <AssignedUser assignedUsers={assignedUsers} />
            <UserDropDown getProjectId={() => this.getProject(_id)} />
          </Paper>
        ))}
      </div>
    );
  }
}

export default ProjectListPage;
