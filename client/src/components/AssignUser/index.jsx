import React, { Component } from "react";
import API from "../../utils/API";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
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
    const projectData = this.state.projects[projectIndex];
    projectData.employees.push(this.state.selectedOption.value);
    API.updateProject(projectData)
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteProject = projectIndex => {
    let id = this.state.projects[projectIndex]._id;
    API.deleteProject(id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
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
      <>
        {this.state.projects.map((project, index) => (
          <Paper>
            <div
              className="row border border-color-danger m-4"
              key={project._id}
            >
              <div className="col">
                <Typography>{project.projectName}</Typography>
                <IconButton
                  aria-label="delete"
                  onClick={() => this.deleteProject(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>

              <div className="row">
                {project.employees.map(assignedEmployee => (
                  <Card>
                    {assignedEmployee.employeeName}
                    <Button
                      onClick={() => {
                        this.deleteAssignedEmployee(
                          index,
                          assignedEmployee._id
                        );
                      }}
                    >
                      x
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="col">
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
                <Button
                  onClick={() => {
                    this.addToProject(index);
                  }}
                >
                  Add to Project
                </Button>
              </div>
            </div>
          </Paper>
        ))}
      </>
    );
  }
}
export default AssignUser;
