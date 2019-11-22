import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ProjectName = ({ deleteProject }) => {
  return (
    <div className="col">
      <IconButton aria-label="delete" onClick={deleteProject}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ProjectName;
