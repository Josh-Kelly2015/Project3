import React from "react";
import Button from "@material-ui/core/Button";

const AssignUserButton = ({ projectId }) => {
  return <Button onClick={projectId}>Add to Project</Button>;
};

export default AssignUserButton;
