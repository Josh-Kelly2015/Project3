import React from "react";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
const AddToProject = ({ userToAssign, id }) => {
  console.log({ userToAssign, id });
  API.getProject(id)
    .then(res => {
      const projectData = res.data;
      projectData.assignedUsers.push(userToAssign._id);
      API.updateProject(projectData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      // console.log(projectData);
    })
    .catch(err => console.log(err));
};
const AssignUserButton = ({ userToAssign, id }) => {
  // console.log(props);
  return (
    <Button
      onClick={() => {
        AddToProject({ userToAssign, id });
      }}
    >
      Add to Project
    </Button>
  );
};

export default AssignUserButton;
