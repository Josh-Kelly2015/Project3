import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Table from "../components/Table";
class ScheduleMaker extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees().then(res =>
      this.setState({ employees: res.data, name: "" })
    );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Employees</h1>
          </Col>
        </Row>
        <Container>
          <List>
            {this.state.name.map(employee => (
              <ListItem key={employee._id}>
                <Link to={"/employees/" + employee._id}>
                  <p>{employee.name}</p>
                </Link>
              </ListItem>
            ))}
          </List>
        </Container>

        <Container>
          <Table></Table>
        </Container>
      </Container>
    );
  }
}

export default ScheduleMaker;
