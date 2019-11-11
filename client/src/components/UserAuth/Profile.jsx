import React from "react";
// import jwt_decode from "jwt-decode";

function Profile() {
  //   constructor() {
  //     super();
  //     this.state = {
  //       id: "",
  //       email: "",
  //       errors: {}
  //     };
  //   }

  //   componentDidMount() {
  //     const token = localStorage.usertoken;
  //     const decoded = jwt_decode(token);
  //     this.setState({
  //       id: decoded.id,
  //       email: decoded.email
  //     });
  //   }

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>id</td>
              {/* <td>{this.state.id}</td> */}
              <td></td>
            </tr>
            <tr>
              <td>Email</td>
              {/* <td>{this.state.email}</td> */}
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
