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
      <div className="container">
        {this.state.projects.map((project, index) => (
          <div className="row" key={project._id} id={project._id}>
            <div className="col-6">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteProject(index)}
              >
                x
              </button>
              {project.projectName}
            </div>

            <div className="col-4">
              <Select
                options={this.state.employees.map(employee => {
                  return {
                    value: employee._id,
                    label: employee.employeeName
                  };
                })}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <button
                className="btn btn-light"
                onClick={() => {
                  this.addToProject(index);
                }}
              >
                Add to Project
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AssignUser;
