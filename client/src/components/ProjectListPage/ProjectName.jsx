import React from "react";
import { Typography } from "@material-ui/core";

const ProjectName = ({ name }) => {
  return (
    <div className="col">
      <Typography>{name}</Typography>
    </div>
  );
};

export default ProjectName;
