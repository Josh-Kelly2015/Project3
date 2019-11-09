import React, { Component } from "react";
import API from "../../utils/API";
class DeleteUser extends Component {
  state = {
    employees: [],
    selectedOption: {}
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
  render() {
    return (
      <>
        <div className="col">
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
      </>
    );
  }
}
export default DeleteUser;
