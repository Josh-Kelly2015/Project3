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
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered">
            <Header />
            <tbody>
              {this.state.project.map(project => (
                <ProjectRow name={this.state.project.Name} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableComponent;
