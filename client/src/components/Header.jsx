import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6">Login</Typography>
          </Link>

          <Link to="/main">
            <Typography variant="h6">Project List</Typography>
          </Link>

          <Link to="/">
            <Typography variant="h6">New Project</Typography>
          </Link>

          <Link to="/register">
            <Typography variant="h6">Register</Typography>
          </Link>

          <Link to="/">
            <Typography variant="h6">New Employee</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
