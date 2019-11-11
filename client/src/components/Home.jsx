import React, { Component } from "react";
import NewProjectForm from "./NewProject";
import NewEmployeeForm from "./NewEmployee";
import AssignUser from "./AssignUser";
import API from "../utils/API";
import Header from "./Header";

class Home extends Component {
  state = {
    projectName: "",
    projects: [],
    employees: [],
    employeeName: "",
    email: "",
    rank: "",
    selectedOption: {}
  };
  componentDidMount() {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    API.getEmployees()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid ">
        <Header className="mb-5"></Header>
        {/* <Navbar></Navbar> */}
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <NewProjectForm></NewProjectForm>
              {/* <Login></Login> */}
            </div>
            <div className="col">
              <NewEmployeeForm></NewEmployeeForm>
              {/* <Profile></Profile> */}
            </div>
          </div>
        </div>
        <div className="col">
          <AssignUser></AssignUser>
          {/* <Register></Register> */}
        </div>
      </div>
    );
  }
}
export default Home;
