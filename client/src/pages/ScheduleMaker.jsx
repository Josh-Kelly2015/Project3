import React, { Component } from "react";
import Header from "../components/Header";
import API from "../utils/API";
import Table from "../components/Table";
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

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <main className="flexbox ">
          {/* List */}

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

          {/* Table */}

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
