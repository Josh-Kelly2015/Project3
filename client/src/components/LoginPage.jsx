import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class LoginPage extends Component {
  onChange(e) {
    console.log(e);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    // const user = {
    //   email: this.state.email,
    //   password: this.state.password
    // };

    // login(user).then(res => {
    //   if (res) {
    //     this.props.history.push(`/main`);
    //   }
    // });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  //   value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  //   value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <Button type="submit">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
