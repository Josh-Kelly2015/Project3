import React from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

const DeleteAssignedUser = id => {
  API.deleteEmployee(id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
const DeleteAssignedUserButton = ({ userId }) => {
  return (
    <Button
      onClick={() => {
        DeleteAssignedUser(userId);
      }}
    >
      x
    </Button>
  );
};

export default DeleteAssignedUserButton;
