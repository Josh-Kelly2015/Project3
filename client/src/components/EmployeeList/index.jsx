// ------------------------- Import Folders ---------------------- //
import React, { Component } from "react";
import API from "../../utils/API";
import Board from "../Target";
import Draggable from "../Source";
// ---------------------- Schedule App Main Page ------------------- //
class ScheduleMaker extends Component {
  // --------------------------- Declare state ---------------------------- //
  state = {
    employee: []
  };
  // --------------- Once the page loads, call loadEmployees() ------------ //
  componentDidMount() {
    this.loadEmployees();
  }
  // --------- Make an API call to Read all data in Employees docs -------- //
  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employee: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      // -------------- Draggable Container ------------ //
      <div className="container mb-4">
        <Board id="board-1">
          <div className="row board">
            {this.state.employee.map(employee => (
              <div className="col-2">
                <Draggable
                  key={employee._id}
                  id={employee._id}
                  className="card"
                  draggable="true"
                >
                  {employee.Name}
                </Draggable>
              </div>
            ))}
          </div>
        </Board>
      </div>
    );
  }
}
// --------------------- Export Class Component ------------------- //
export default ScheduleMaker;
