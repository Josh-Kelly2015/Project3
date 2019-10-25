import React, { Component } from "react";
import { Container } from "../components/Grid";
import Header from "../components/Header";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
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
      <Container fluid>
        <Header />
        <Container>
          {this.state.employees.length ? (
            <List>
              {this.state.employees.map(employee => (
                <ListItem key={employee._id}>
                  <Link to={"/employees/" + employee._id}>
                    <strong>{employee.name}</strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Container>
        <Container>
          <Table />
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default ScheduleMaker;
