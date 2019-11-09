import React, { Component } from "react";
import API from "../../utils/API";

class NewProject extends Component {
  state = {
    projectName: ""
  };
  handleNewProject = event => {
    console.log(this.state.projectName);
    this.setState({ projectName: event.target.value });
  };
  addNewProject = () => {
    console.log(this.state.projectName);
    const projectData = { projectName: this.state.projectName };
    API.saveProject(projectData)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <form>
          <div className="row">
            <input
              type="text"
              name="projectName"
              value={this.state.projectName}
              onChange={this.handleNewProject}
            ></input>
          </div>
        </form>
        <div className="col">
          <button
            className="btn btn-light"
            type="submit"
            onClick={this.addNewProject}
          >
            Create Project
          </button>
        </div>
      </>
    );
  }
}

export default NewProject;
