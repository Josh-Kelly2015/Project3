import React from "react";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
const AddToProject = ({ userToAssign, projectId }) => {
  console.log({ userToAssign, projectId });

  let id = projectId;
  API.getProject(id)
    .then(res => {
      let projectData = res.data;
      console.log(projectData);
      let id = userToAssign._id;

      API.getUser(id).then(res => {
        let assignedUser = res.data;
        console.log(assignedUser);
        projectData.assignedUsers.push(assignedUser);
        console.log(projectData);

        API.updateProject(projectData)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      });

      // projectData.assignedUsers.push(userToAssign);
      // API.updateProject(projectData)
      //   .then(res => console.log(res.data))
      //   .catch(err => console.log(err));
      // console.log(projectData);
    })
    .catch(err => console.log(err));
};
const AssignUserButton = ({ userToAssign, projectId }) => {
  // console.log(props);
  return (
    <Button
      onClick={() => {
        AddToProject({ userToAssign, projectId });
      }}
    >
      Add to Project
    </Button>
  );
};

export default AssignUserButton;
