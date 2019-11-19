import React from "react";
import { Card } from "@material-ui/core";

const AssignedUser = ({ name, _id }) => {
  return (
    <Card key={_id}>
      {name}
      User Name
    </Card>
  );
};

export default AssignedUser;
