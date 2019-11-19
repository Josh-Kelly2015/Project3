import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../../utils/API";
const deleteProject = id => {
  API.deleteProject(id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const ProjectName = ({ id }) => {
  return (
    <div className="col">
      <IconButton aria-label="delete" onClick={() => deleteProject(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ProjectName;
