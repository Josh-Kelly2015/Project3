import React, { Component } from "react";
// import API from "../../utils/API";
import { TextField, Button, Paper } from "@material-ui/core";

class NewUserForm extends Component {
  //   state = {
  //     employeeName: "",
  //     email: "",
  //     rank: ""
  //   };
  handleNewRank = e => {
    // this.setState({
    //   rank: event.target.value
    // });
    console.log(e);
  };
  handleNewEmail = e => {
    // this.setState({
    //   email: event.target.value
    // });
    console.log(e);
  };
  handleNewEmployee = e => {
    // this.setState({ employeeName: event.target.value });
    console.log(e);
  };
  addNewEmployee = () => {
    console.log("Successfully created new user!");
    // console.log(this.state.employeeName, this.state.email, this.state.rank);
    // let employeeData = {
    //   employeeName: this.state.employeeName,
    //   email: this.state.email,
    //   rank: this.state.rank
    // };
    // API.saveEmployee(employeeData)
    //   .then(res => {
    //     console.log(res);
    //     window.location.reload();
    //   })
    //   .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <Paper>
          <form>
            <div className="col">
              <TextField
                type="text"
                name="employeeName"
                // value={this.state.employeeName}
                onChange={this.handleNewEmployee}
              ></TextField>
            </div>
            <div className="col">
              <TextField
                type="text"
                name="email"
                // value={this.state.email}
                onChange={this.handleNewEmail}
              ></TextField>
            </div>
            <div className="col">
              <TextField
                type="text"
                name="rank"
                // value={this.state.rank}
                onChange={this.handleNewRank}
              ></TextField>
            </div>
          </form>
          <div className="col">
            <Button
              className="btn btn-light"
              type="submit"
              onClick={() => {
                this.addNewEmployee();
              }}
            >
              Create Employee
            </Button>
          </div>
        </Paper>
      </>
    );
  }
}
export default NewUserForm;
