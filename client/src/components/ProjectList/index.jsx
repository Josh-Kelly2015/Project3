import React, { Component } from "react";
import API from "../../utils/API";
import Select from "react-select";
class ProjectList extends Component {
  state = {
    projects: [],
    employees: []
  };
  componentDidMount() {
    this.loadProjects();
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }
  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
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

  deleteEmployee = () => {
    console.log(this.state.selectedOption.value);
    let id = this.state.selectedOption.value;
    API.deleteEmployee(id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  handleDeleteEmployee = selectedOption => {
    this.setState({ selectedOption }, () => {
      API.getEmployee(selectedOption.value)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    });
  };
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
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* Delete Employee using Drop Down and button */}
          </div>

          {/* Map through projects */}
          {this.state.projects.map((project, index) => (
            <>
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
              {/* Mapping through assignedEmployees array */}
              <div className="row">
                {project.employees.map(assignedEmployee => (
                  <div
                    className="col"
                    key={assignedEmployee._id}
                    id={assignedEmployee._id}
                  >
                    {assignedEmployee.employeeName}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.deleteAssignedEmployee(
                          index,
                          assignedEmployee._id
                        );
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
              {/* Add a select dropdown that includes, every employee in the database. */}
              <div className="row">
                <h3>Add new employee to this project?</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      {/* Drop Down Select */}
                      <Select
                        options={this.state.employees.map(employee => {
                          return {
                            value: employee._id,
                            label: employee.employeeName
                          };
                        })}
                        onChange={this.handleChange}
                      />
                      {/* Add Employee To Project Button */}
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
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
export default ProjectList;
