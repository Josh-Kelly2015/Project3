import React, { Component } from "react";
import TableComponent from "../components/Table";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Board from "../components/Board";
import Card from "../components/Card";
import SubmitButton from "../components/SubmitButton/SubmitButton";
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

class ScheduleMaker extends Component {
  render() {
    return (
      // --------------------- Wrapper -------------------- //
      <div className="container-fluid">
        {/* ------------------ Header -------------------- */}
        <Header />
        {/* ------------------- Body --------------------- */}
        {/* ----------- Draggable Employees ------------ */}

          <Board id="board-1" className="board">
            {this.state.employees.map(employee => (
              <Card
                key={employee._id}
                id={employee._id}
                className="card text-info"
                draggable="true"
              >
                {employee.name}
              </Card>
            ))}
          </Board>

        <TableComponent />

          <Board id="board-2" className="board">
            <Table />
          </Board>
        </main>
        <div className="row">
          <SubmitButton>Submit</SubmitButton>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
