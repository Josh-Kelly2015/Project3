import React, { Component } from "react";
import Board from "../components/Board";
import Card from "../components/Card";
// import Employee from "../components/Employee";
import API from "../utils/API";
import EmployeeList from "../components/EmployeeList";
class ScheduleMaker extends Component {
  state = {
    employees: [],
    name: "",
    email: "",
    rank: ""
  };

  componentDidMount() {
    this.loadEmployees();
  }
  loadEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({ employees: res.data, name: "", email: "", rank: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <main className="flexbox">
          {/* First Board with Card One  */}
          <Board id="board-1" className="board">
            <EmployeeList>
              {this.state.employees.map(employees => (
                <Card>
                  <h4>{this.state.employees.name}</h4>
                </Card>
              ))}
            </EmployeeList>
          </Board>

          {/* Second Board with Card Two */}
          <Board id="board-2" className="board"></Board>
        </main>
      </div>
    );
  }
}
export default ScheduleMaker;
