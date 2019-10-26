import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Header from "../components/Header";
import API from "../utils/API";
// import { List, ListItem } from "../components/EmployeeList";
import Table from "../components/Table";
import Footer from "../components/Footer";
import SubmitButton from "../components/SubmitButton";
// import { Link } from "react-router-dom";
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
          <Board id="board-1" className="board list-overflow-container">
            {this.state.employees.map(employee => (
              <Card id="card-1" className="card" draggable="true">
                {employee.name}
              </Card>
            ))}
          </Board>

          <Table />
        </main>
        <Footer />
      </>
    );
  }
}

export default ScheduleMaker;
