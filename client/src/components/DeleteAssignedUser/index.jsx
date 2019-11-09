import React, { Component } from "react";
import API from "../../utils/API";

class DeleteAssignedEmployee extends Component {
  state = {
    projects: [],
    employees: []
  };

  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }
  deleteAssignedEmployee = (projectIndex, employeeId) => {
    console.log(this.state.projects[projectIndex].employees);
    let projectToUpdate = this.state.projects[projectIndex];
    const newEmployeeArray = projectToUpdate.employees.map(employee => {
      return employee._id;
    });
    const newEmployeeFiltered = newEmployeeArray.filter(employee => {
      return employee !== employeeId;
    });
    console.log(newEmployeeFiltered);
    projectToUpdate.employees = newEmployeeFiltered;
    console.log(projectToUpdate);
    API.updateProject(projectToUpdate)
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
            {project.employees.map(assignedEmployee => (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  this.deleteAssignedEmployee(index, assignedEmployee._id);
                }}
              >
                x
              </button>
            ))}
          </div>
        ))}
      </>
    );
  }
}

export default DeleteAssignedEmployee;
