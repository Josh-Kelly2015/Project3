import React, { Component } from "react";
import EmployeeContainer from "../components/EmployeeContainer";
import API from "../utils/API";
import { List, ListItem } from "../components/EmployeeList";
import { Link } from "react-router-dom";
class ScheduleMaker extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees().then(res =>
      this.setState({ employees: res.data, name: "" })
    );
  };

  render() {
    return (
      <div className="container">
        <EmployeeContainer>
          <h1>Employees</h1>
          <List>
            {this.state.name.map(employee => (
              <ListItem key={employee._id}>
                <Link to={"/employees/" + employee._id}>
                  <p>{employee.name}</p>
                </Link>
              </ListItem>
            ))}
          </List>
        </EmployeeContainer>
      </div>
    );
  }
}

export default ScheduleMaker;
