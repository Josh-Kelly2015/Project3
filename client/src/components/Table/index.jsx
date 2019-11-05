import React, { Component } from "react";
import API from "../../utils/API";
import NewProject from "./NewProject";
import Header from "./Header";
class TableComponent extends Component {
  state = {
    project: []
  };
  componentDidMount() {
    this.loadProjects();
  }
  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <Header />
        <NewProject project={this.state.project} />
      </div>
    );
  }
}

export default TableComponent;
