import React, { Component } from "react";
import API from "../utils/API";
import { TextField, Button, Paper } from "@material-ui/core";

class NewProjectForm extends Component {
  state = {
    name: ""
  };
  handleNewProject = e => {
    this.setState({ name: e.target.value });
  };
  addNewProject = () => {
    const projectData = this.state.name;
    API.saveProject(projectData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
    console.log("New Project Successfully Created!");
  };
  render() {
    return (
      <>
        <Paper>
          <form>
            <TextField
              type="text"
              name="name"
              value={this.state.name}
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
<<<<<<< HEAD:client/src/components/NewProject/index.jsx
export default NewProject;
=======
export default NewProjectForm;
>>>>>>> b6d8c461b621a660f1881b21fb54b6a10d0a799c:client/src/components/NewProjectForm.jsx
