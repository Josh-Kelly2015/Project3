import React from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

const DeleteAssignedUser = id => {
  API.deleteEmployee(id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const DeleteAssignedUserButton = props => {
  return (
    <Button
      onClick={() => {
        DeleteAssignedUser(props.id);
      }}
    >
      x
    </Button>
  );
};

export default DeleteAssignedUserButton;
