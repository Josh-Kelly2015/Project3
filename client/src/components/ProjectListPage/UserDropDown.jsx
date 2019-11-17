import React from "react";
import Select from "react-select";
import API from "../../utils/API";

const handleChange = selectedOption => {
  let id = selectedOption.value;
  API.getEmployee(id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

const UserDropDown = props => {
  return (
    <div className="col">
      <Select
        options={props.allUsers.map(employee => {
          return {
            value: employee._id,
            label: employee.employeeName
          };
        })}
        onChange={selectedOption => handleChange(selectedOption)}
      />
    </div>
  );
};

export default UserDropDown;
