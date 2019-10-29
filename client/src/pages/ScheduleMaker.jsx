import React, { Component } from "react";
import TableComponent from "../components/Table";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Footer from "../components/Footer";
<<<<<<< HEAD
=======
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
>>>>>>> e2043b6f7018d6fb77b67c1f14e5766b05cc91cd

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
        <EmployeeList />
=======
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
>>>>>>> e2043b6f7018d6fb77b67c1f14e5766b05cc91cd

        <TableComponent />

<<<<<<< HEAD
        {/* ------------------ Footer -------------------- */}
=======
          <Board id="board-2" className="board">
            <Table />
          </Board>
        </main>
        <div className="row">
          <SubmitButton>Submit</SubmitButton>
        </div>
>>>>>>> e2043b6f7018d6fb77b67c1f14e5766b05cc91cd
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
