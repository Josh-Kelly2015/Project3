import React, { Component } from "react";
// import API from "../../utils/API";
import { TextField, Button, Paper } from "@material-ui/core";

class NewProjectForm extends Component {
  //   state = {
  //     projectName: ""
  //   };
  handleNewProject = e => {
    // this.setState({ projectName: event.target.value });
    console.log(e);
  };
  addNewProject = () => {
    // const projectData = { projectName: this.state.projectName };
    // API.saveProject(projectData)
    //   .then(res => {
    //     window.location.reload();
    //   })
    //   .catch(err => console.log(err));
    console.log("New Project Successfully Created!");
  };
  render() {
    return (
      <>
        <Paper>
          <form>
            <TextField
              type="text"
              name="projectName"
              //   value={this.state.projectName}
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
export default NewProjectForm;
