import React from "react";
import { Typography } from "@material-ui/core";

const ProjectName = props => {
  return (
    <div className="col">
      <Typography>{props.name}</Typography>
    </div>
  );
};

export default ProjectName;
