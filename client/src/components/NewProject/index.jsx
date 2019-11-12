import React, { Component } from "react";
import API from "../../utils/API";
import { TextField, Button, Paper } from "@material-ui/core";

class NewProject extends Component {
  state = {
    projectName: ""
  };
  handleNewProject = e => {
    e.preventDefault();
    this.setState({ projectName: e.target.value });
    console.log(e);
    console.log(e.target.value);
  };
  addNewProject = () => {
    const projectData = { projectName: this.state.projectName };
    API.saveProject(projectData)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <Paper>
          <form>
            <TextField
              type="text"
              name="projectName"
              value={this.state.projectName}
              onChange={this.handleNewProject}
            ></TextField>
          </form>
          <div className="col">
            <Button
              className="btn btn-light"
              type="submit"
              onClick={this.addNewProject}
            >
              Create Project
            </Button>
          </div>
        </Paper>
      </>
    );
  }
}
export default NewProject;
