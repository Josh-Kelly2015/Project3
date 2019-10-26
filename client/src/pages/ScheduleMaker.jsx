import React, { Component } from "react";
import Header from "../components/Header";
import API from "../utils/API";
import Table from "../components/Table";
import Footer from "../components/Footer";
import Board from "../components/Board";
import Card from "../components/Card";
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
      <>
        <Header />
        <main className="flexbox">
          <div className="container">
            <Board id="board-1" className="board">
              {this.state.employees.map(employee => (
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
          </div>
          <div className="container">
            <Board id="board-2" className="board">
              <Table />
            </Board>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default ScheduleMaker;
