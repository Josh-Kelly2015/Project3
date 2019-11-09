import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"></Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
