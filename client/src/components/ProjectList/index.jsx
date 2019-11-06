import React, { Component } from "react";
import API from "../../utils/API";
import Select from "react-select";
class ProjectList extends Component {
  state = {
    project: [],
    employees: [],
    selectedOption: ""
  };
  componentDidMount() {
    this.loadProjects();
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }
  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ project: res.data }))
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
    const newState = this.state;
    newState.project[projectIndex].assignedEmployees.push(
      this.state.selectedOption.value
    );
    this.setState(newState);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          {this.state.project.map((project, index) => (
            <>
              <div className="row">
                <div key={project._id} id={project._id} className="col">
                  <h1>{project.name}</h1>
                </div>
              </div>
              <div className="row">
                {project.assignedEmployees.map(employee => (
                  <div className="col" key={employee._id} id={employee._id}>
                    {employee.name}
                  </div>
                ))}
              </div>

              <div className="row">
                <h3>Add new employee to this project?</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <Select
                        options={this.state.employees.map(employee => {
                          return {
                            value: employee._id,
                            label: employee.name
                          };
                        })}
                        onChange={this.handleChange}
                      />
                      <button
                        onClick={() => {
                          this.addToProject(index);
                        }}
                      >
                        Add to Project
                      </button>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
                {/* Add a select dropdown that includes, every employee in the database. */}
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
