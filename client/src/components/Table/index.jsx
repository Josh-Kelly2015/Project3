import React, { Component } from "react";
import API from "../../utils/API";
import Header from "./Header";
import ProjectRow from "./ProjectRow";
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
      <div className="table-responsive">
        <table class="table table-bordered">
          <Header />
          <tbody>
            <ProjectRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
