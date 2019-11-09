import React, { Component } from "react";
import API from "../../utils/API";

class NewEmployee extends Component {
  state = {
    employeeName: "",
    email: "",
    rank: ""
  };
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
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
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
          <div className="row">
            <div className="col-2">
              <button
                className="btn btn-light"
                type="submit"
                onClick={() => {
                  this.addNewEmployee();
                }}
              >
                Create Employee
              </button>
            </div>
            <div className="col-2">
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
        </div>
      </div>
    );
  }
}
export default NewEmployee;
