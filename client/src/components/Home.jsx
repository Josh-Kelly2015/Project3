import React, { Component } from "react";
import NewProject from "./NewProject";
import NewEmployee from "./NewEmployee";
import AssignUser from "./AssignUser";
import ProjectList from "./ProjectList";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <NewProject></NewProject>
        </div>
        <div className="container">
          <NewEmployee></NewEmployee>
        </div>
        <div className="container">
          <AssignUser></AssignUser>
        </div>
        <div className="container">
          <ProjectList></ProjectList>
        </div>
      </>
    );
  }
}
export default Home;
