import React, { Component } from "react";
import NewProject from "./NewProject";
import NewEmployee from "./NewEmployee";
import AssignUser from "./AssignUser";

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
      </>
    );
  }
}
export default Home;
