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
      <>
        <form>
          <div className="col">
            <input
              type="text"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleNewEmployee}
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleNewEmail}
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              name="rank"
              value={this.state.rank}
              onChange={this.handleNewRank}
            ></input>
          </div>
        </form>
        <div className="col">
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
      </>
    );
  }
}
export default NewEmployee;
