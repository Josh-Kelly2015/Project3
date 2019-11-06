<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9d8d081fd1edcd1a3e68ba09ba792878788bb246
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
                <ProjectRow name={this.state.project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
=======
import React from "react";
// import Board from "../Board";
function Table() {
  return (
    <table className="table table-bordered text-info">
      <thead className="thead-dark">
        <tr className="text-danger">
          <th scope="col">Project</th>
          <th scope="col">Monday</th>
          <th scope="col">Tuesday</th>
          <th scope="col">Wednesday</th>
          <th scope="col">Thursday</th>
          <th scope="col">Friday</th>
          <th scope="col">Saturday</th>
          <th scope="col">Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">0001 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0002 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0003 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0004 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
      </tbody>
    </table>
  );
>>>>>>> e2043b6f7018d6fb77b67c1f14e5766b05cc91cd
=======
>>>>>>> 9d8d081fd1edcd1a3e68ba09ba792878788bb246
}

export default TableComponent;
