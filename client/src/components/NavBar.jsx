import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h4">Home</Typography>
          </Link>

          <Link to="/projectlist">
            <Typography variant="h4">Projects</Typography>
          </Link>
          <Link to="/createproject">
            <Typography variant="h4">Create Project</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
export default NavBar;
