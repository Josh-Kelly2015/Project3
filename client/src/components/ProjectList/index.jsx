import React, { Component } from "react";
import API from "../../utils/API";
import Select from "react-select";

class ProjectList extends Component {
  state = {
    projects: [],
    employees: [],
    selectedOption: {},
    projectName: "",
    employeeName: "",
    email: "",
    rank: ""
    // newEmployee: {
    //   employeeName: "",
    //   email: "",
    //   rank: "",
    // }
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
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      API.getEmployee(selectedOption.value)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    });
  };
  addToProject = projectIndex => {
    console.log(this.state.projects[projectIndex].assignedEmployees);
    let projectData = this.state.projects[projectIndex].assignedEmployees;
    API.saveProject(projectData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  deleteProject = projectIndex => {
    console.log(this.state.projects[projectIndex]._id);
    let id = this.state.projects[projectIndex]._id;
    API.deleteProject(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  addNewProject = () => {
    console.log(this.state.projectName);
    let projectData = this.state.projectName;

    API.saveProject(projectData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  handleNewProject = event => {
    this.setState({ projectName: event.target.value });
  };

  // Add new employee using state of name email and rank
  handleNewRank = event => {
    this.setState({
      rank: event.target.value
    });
  };
  handleNewEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleNewEmployee = event => {
    this.setState({ employeeName: event.target.value });
  };
  addNewEmployee = () => {
    console.log(this.state.employeeName, this.state.email, this.state.rank);
    let employeeData = {
      employeeName: this.state.employeeName,
      email: this.state.email,
      rank: this.state.rank
    };
    API.saveEmployee(employeeData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  // Delete EMployee button
  deleteEmployee = () => {
    console.log(this.state.selectedOption.value);
    let id = this.state.selectedOption.value;
    API.deleteEmployee(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  // Save selectedOption in a different named variable?
  handleDeleteEmployee = selectedOption => {
    this.setState({ selectedOption }, () => {
      API.getEmployee(selectedOption.value)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <input
                  type="text"
                  name="projectName"
                  value={this.state.projectName}
                  onChange={this.handleNewProject}
                ></input>
              </form>
              {/* submit button to add new project */}
              <button
                className="btn btn-light"
                type="submit"
                onClick={() => {
                  this.addNewProject();
                }}
              >
                Add New Project
              </button>
            </div>
            {/* form to enter new employee info */}
            <div className="col">
              <form>
                <input
                  type="text"
                  name="employeeName"
                  value={this.state.employeeName}
                  onChange={this.handleNewEmployee}
                ></input>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleNewEmail}
                ></input>
                <input
                  type="text"
                  name="rank"
                  value={this.state.rank}
                  onChange={this.handleNewRank}
                ></input>
              </form>
              {/* Submit button to add a new employee */}
              <button
                className="btn btn-light"
                type="submit"
                onClick={() => {
                  this.addNewEmployee();
                }}
              >
                Add New Employee
              </button>
            </div>
            {/* Delete Employee using Drop Down and button */}

            <div className="col">
              {/* Drop Down Select */}
              <Select
                options={this.state.employees.map(employee => {
                  return {
                    value: employee._id,
                    label: employee.employeeName
                  };
                })}
                onChange={this.handleDeleteEmployee}
              />
              {/* Add Employee To Project Button */}
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.deleteEmployee();
                }}
              >
                Delete Employee
              </button>
            </div>
          </div>
          {/* Map through projects */}
          {this.state.projects.map((project, index) => (
            <>
              <div className="row">
                <div key={project._id} id={project._id} className="col">
                  {/* Project Name */}

                  <h1>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.deleteEmployee();
                      }}
                    >
                      Delete Assigned Employee
                    </button>
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
                {project.assignedEmployees.map(assignedEmployee => (
                  <div
                    className="col"
                    key={assignedEmployee._id}
                    id={assignedEmployee._id}
                  >
                    {assignedEmployee.name}
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
