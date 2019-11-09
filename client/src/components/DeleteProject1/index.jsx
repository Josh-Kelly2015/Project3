import React, { Component } from "react";
import API from "../../utils/API";
class DeleteProject extends Component {
  state = {
    projects: {}
  };
  deleteProject = projectIndex => {
    console.log(this.state.projects[projectIndex]._id);
    let id = this.state.projects[projectIndex]._id;
    API.deleteProject(id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
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

export default DeleteProject;
