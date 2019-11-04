import React, { Component } from "react";
import API from "../../utils/API";
import Board from "../Board";
class TableComponent extends Component {
  state = {
    employees: [],
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
  loadPrs = () => {
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
}

export default TableComponent;
