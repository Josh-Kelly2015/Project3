import React from "react";
import { Card } from "@material-ui/core";

const AssignedUser = props => {
  return (
    <Card key={props.id}>
      {props.employeeName}
      User Name
    </Card>
  );
};

export default AssignedUser;
