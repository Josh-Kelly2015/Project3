import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  //   logOut(e) {
  //     e.preventDefault();
  //     localStorage.removeItem("usertoken");
  //     this.props.history.push(`/Login`);
  //   }
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          {/* onClick={this.logOut.bind(this)} */}
          <a href="" className="nav-link">
            Logout
          </a>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          {/* {localStorage.usertoken ? userLink : loginRegLink} */}
        </div>
      </nav>
    </>
  );
}
export default Landing;
