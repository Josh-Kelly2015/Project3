import React from "react";
import DeleteAssignedUserButton from "./DeleteAssignedUser";
import { Card } from "@material-ui/core";

const AssignedUser = ({ assignedUsers }) => {
  return assignedUsers.map(({ _id, name }) => (
    <Card key={_id}>
      <p name={name} />
      <DeleteAssignedUserButton userId={_id} />
    </Card>
  ));
};

export default AssignedUser;
