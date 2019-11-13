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
            <Typography variant="h4">Home</Typography>
          </Link>
          <Link to="/login">
            <Typography variant="h4">Login</Typography>
          </Link>
          <Link to="/register">
            <Typography variant="h4">Register</Typography>
          </Link>
          <Link to="/projectlist">
            <Typography variant="h4">Projects</Typography>
          </Link>
          <Link to="/createproject">
            <Typography variant="h4">Create Project</Typography>
          </Link>
          <Link to="/createuser">
            <Typography variant="h4">Create User</Typography>
          </Link>
          {/* <Link to="*">
            <Typography variant="h4"></Typography>
          </Link> */}
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
