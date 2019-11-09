import React, { Component } from "react";
import API from "../../utils/API";
class AssignUser extends Component {
  state = {
    projects: [],
    selectedOption: {}
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      API.getEmployee(selectedOption.value)
        .then(res => console.log(res.data._id))
        .catch(err => console.log(err));
    });
  };
  addToProject = projectIndex => {
    console.log("selectedOption.value = " + this.state.selectedOption.value);
    const newProject = this.state.projects[projectIndex];
    newProject.employees.push(this.state.selectedOption.value);
    API.updateProject(newProject)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {this.state.projects.map((project, index) => (
          <div className="row">
            <div key={project._id} id={project._id} className="col">
              {/* Project Name */}
              <h1>
                {project.projectName} {/* Delete Project Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.deleteProject(index)}
                >
                  Delete Project
                </button>
              </h1>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default AssignUser;
