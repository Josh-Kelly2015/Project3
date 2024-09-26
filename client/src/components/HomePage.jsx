import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col">
          <div className="row">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
