<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import API from "../../utils/API";
import Board from "../Board";
class TableComponent extends Component {
  state = {
    project: [],
    projectName: "",
    projectNumber: ""
  };
  componentDidMount() {
    this.loadProjects();
  }
  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ project: res.data, projectName: "", projectNumber: "" })
      )
      .catch(err => console.log(err));
  };
  render(props) {
    return (
      <div className="row mt-4">
        <div className="col">
          <Board id="board-2" className="board table-responsive">
            <div className="container-fluid">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" id="projectHeader">
                      Project
                    </th>
                    <th scope="col" className="tableHeader">
                      Monday
                    </th>
                    <th scope="col" className="tableHeader">
                      Tuesday
                    </th>
                    <th scope="col" className="tableHeader">
                      Wednesday
                    </th>
                    <th scope="col" className="tableHeader">
                      Thursday
                    </th>
                    <th scope="col" className="tableHeader">
                      Friday
                    </th>
                    <th scope="col" className="tableHeader">
                      Saturday
                    </th>
                    <th scope="col" className="tableHeader">
                      Sunday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.project.map(project => (
                    <tr>
                      <th scope="row" className="projectCol">
                        -{project.projectNumber}- <br></br>-
                        {project.projectName}-
                      </th>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                      <td className="cell">{props}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Board>
        </div>
      </div>
    );
  }
>>>>>>> 103b9e18c0632ea4df498c13efc5e2d2b3cd909a
}

export default TableComponent;
