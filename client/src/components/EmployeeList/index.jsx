// ------------------------- Import Folders ---------------------- //
import React, { Component } from "react";
import API from "../../utils/API";
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
        {this.state.employee.map(employee => (
          <div className="col-2 employees">
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
    );
  }
}
// --------------------- Export Class Component ------------------- //
export default ScheduleMaker;
