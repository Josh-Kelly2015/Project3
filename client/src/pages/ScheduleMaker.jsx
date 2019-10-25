import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Table from "../components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
class ScheduleMaker extends Component {
  state = {
    employees: [],
    name: ""
  };
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data, name: "" }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Container>
          <Header />{" "}
          {this.state.employees.length ? (
            <List>
              {this.state.employees.map(employees => (
                <ListItem key={employees._id}>
                  <Link to={"/employees/" + employees._id}>
                    <strong>{employees.name}</strong>
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
