import React, { Component } from "react";
import Select from "react-select";
import API from "../../utils/API";
import AssignUserButton from "./AssignUserButton";

class UserDropDown extends Component {
  state = {
    users: [],
    selectedOption: []
  };
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const handleChange = selectedOption => {
      let id = selectedOption.value;
      API.getUser(id)
        .then(res => this.setState({ selectedOption: res.data }))
        .catch(err => console.log(err));
    };

    return (
      <div className="col">
        <Select
          options={this.state.users.map(user => {
            return {
              value: user._id,
              label: user.name
            };
          })}
          onChange={selectedOption => handleChange(selectedOption)}
        />
        <AssignUserButton
          userToAssign={this.state.selectedOption}
          id={this.props.id}
        />
      </div>
    );
  }
}
export default UserDropDown;
