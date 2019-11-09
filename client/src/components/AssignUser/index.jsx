import React, { Component } from "react";
import API from "../../utils/API";
import Select from "react-select";
class AssignUser extends Component {
  state = {
    projects: [],
    employees: [],
    selectedOption: {},
    projectName: ""
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      API.getEmployee(selectedOption.value)
        .then(res => console.log(res.data._id))
        .catch(err => console.log(err));
    });
  };
  addToProject = projectIndex => {
    console.log("selectedOption.value = " + this.state.selectedOption.value);
    const projectData = this.state.projects[projectIndex];
    projectData.employees.push(this.state.selectedOption.value);
    API.updateProject(projectData)
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
          <div key={project._id} id={project._id}>
            {project.projectName}
            <Select
              options={this.state.employees.map(employee => {
                return {
                  value: employee._id,
                  label: employee.employeeName
                };
              })}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-light"
              onClick={() => {
                this.addToProject(index);
              }}
            >
              Add to Project
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default AssignUser;
