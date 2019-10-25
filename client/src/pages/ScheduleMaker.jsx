import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
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
        <Row>
          <div className="col-2">
            <Container>
              <div className="col">
                {this.state.employees.length ? (
                  <List>
                    {this.state.employees.map(employee => (
                      <ListItem key={employee._id}>
                        <Link
                          to={"/employees/" + employee._id}
                          className="text-dark"
                        >
                          <strong>{employee.name}</strong>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </div>
            </Container>
          </div>
          <div className="col">
            <Container>
              <Table />
            </Container>
          </div>
        </Row>

        <Footer />
      </Container>
    );
  }
}

export default ScheduleMaker;
