import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
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
        <Container>
          <List>
            <ListItem></ListItem>
          </List>
        </Container>
      </Container>
    );
  }
}

export default ScheduleMaker;
