import React, { Component } from "react";
import TableComponent from "../components/Table";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Footer from "../components/Footer";
<<<<<<< HEAD
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
=======
>>>>>>> 103b9e18c0632ea4df498c13efc5e2d2b3cd909a

class ScheduleMaker extends Component {
  render() {
    return (
      // --------------------- Wrapper -------------------- //
      <div className="container-fluid">
        {/* ------------------ Header -------------------- */}
        <Header />
        {/* ------------------- Body --------------------- */}
        {/* ----------- Draggable Employees ------------ */}

<<<<<<< HEAD
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
=======
        <EmployeeList />
>>>>>>> 103b9e18c0632ea4df498c13efc5e2d2b3cd909a

        <TableComponent />

<<<<<<< HEAD
          <Board id="board-2" className="board">
            <Table />
          </Board>
        </main>
        <div className="row">
          <SubmitButton>Submit</SubmitButton>
        </div>
=======
        {/* ------------------ Footer -------------------- */}
>>>>>>> 103b9e18c0632ea4df498c13efc5e2d2b3cd909a
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
