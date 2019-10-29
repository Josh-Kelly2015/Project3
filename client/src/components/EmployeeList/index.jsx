// ------------------------- Import Folders ---------------------- //
import React, { Component } from "react";
import API from "../../utils/API";
import Board from "../Board";
import Card from "../Card";
// ---------------------- Schedule App Main Page ------------------- //
class ScheduleMaker extends Component {
  // --------------------------- Declare state ---------------------------- //
  state = {
    employee: [],
    name: "",
    email: "",
    rank: ""
  };
  // --------------- Once the page loads, call loadEmployees() ------------ //
  componentDidMount() {
    this.loadEmployees();
  }
  // --------- Make an API call to Read all data in Employees docs -------- //
  loadEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({ employee: res.data, name: "", email: "", rank: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      // -------------- Draggable Container ------------ //
      <Board id="board-1" className="board">
        {/* ---------- Maps through seed data ----------*/}
        {this.state.employee.map(employee => (
          // ----------- Draggable Component ----------- //
          <Card
            key={employee._id}
            id={employee._id}
            className="card"
            draggable="true"
          >
            {employee.name}
          </Card>
        ))}
      </Board>
    );
  }
}
// --------------------- Export Class Component ------------------- //
export default ScheduleMaker;
