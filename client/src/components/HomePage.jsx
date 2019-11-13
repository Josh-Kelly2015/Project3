import React from "react";
import Button from "@material-ui/core/Button";
const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col">
          <div className="row">
            <Button className="btn btn-success">Login</Button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <Button className="btn btn-danger">Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
