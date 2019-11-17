import React from "react";
import Button from "@material-ui/core/Button";
const AddToProject = props => {
  console.log(props);
  // let id = projectId;
  // API.getProject(id)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));

  //   const projectData = projects[projectIndex];
  //   projectData.employees.push(selectedOption.value);
  //   API.updateProject(projectData)
  //     .then(res => {
  //       window.location.reload();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
};
const AssignUserButton = props => {
  return (
    <Button
      onClick={() => {
        AddToProject(props);
      }}
    >
      Add to Project
    </Button>
  );
};

export default AssignUserButton;
