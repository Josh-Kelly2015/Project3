import React, { Component } from "react";
import NewProject from "./NewProject";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NewProject></NewProject>
      </div>
    );
  }
}
export default Home;
