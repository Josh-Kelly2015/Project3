import React, { Component } from "react";
import Header from "../components/Header";
import API from "../utils/API";
import Footer from "../components/Footer";
import Board from "../components/Board";
import Card from "../components/Card";
import ReactTableComponent from "../components/Table";
class ScheduleMaker extends Component {
  state = {
    employee: [],
    project: [],
    projectName: "",
    projectNumber: "",
    name: "",
    email: "",
    rank: ""
  };

  componentDidMount() {
    // this.loadEmployees();
    this.loadProjects();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({ employee: res.data, name: "", email: "", rank: "" })
      )
      .catch(err => console.log(err));
  };

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ project: res.data, projectName: "", projectNumber: "" })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <main className="flexbox ">
          {/* List */}

          <Board id="board-1" className="board">
            {this.state.employee.map(employee => (
              <Card
                key={employee._id}
                id={employee._id}
                className="card"
                draggable="true"
              >
                {employee.name}
              </Card>
            ))}
          </Board>

          {/* Table */}

          <Board id="board-2" className="board">
            {/* <Table>
              {this.state.project.map(project => (
                <tr>
                  <th scope="row">
                    -{project.projectNumber}- <br></br>-{project.projectName}-
                  </th>
                  <td>A Name</td>
                </tr>
              ))}
            </Table> */}
            <ReactTableComponent />
          </Board>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
