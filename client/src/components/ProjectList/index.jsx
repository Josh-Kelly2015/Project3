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
        .then(res => console.log(res.data._id))
        .catch(err => console.log(err));
    });
  };
  addToProject = projectIndex => {
    console.log("selectedOption.value = " + this.state.selectedOption.value);
    // const newState = this.state;
    // newState.projects[projectIndex].assignedEmployees.push(
    //   this.state.selectedOption.value
    // );
    // this.setState(newState);
    const newProject = this.state.projects[projectIndex];
    newProject.employees.push(this.state.selectedOption.value);
    API.updateProject(newProject)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    // let projectData = this.state.projects[projectIndex].assignedEmployees;
    // console.log(projectData);
    // API.saveProject(projectData)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err));
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
  handleNewProject = event => {
    this.setState({ projectName: event.target.value });
  };
  addNewProject = () => {
    console.log(this.state.projectName);
    const projectData = this.state.projectName;

    API.saveProject(projectData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
                {project.employees.map(assignedEmployee => (
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
